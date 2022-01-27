import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TestWidgetComponent extends Component {
  @service store;
  @service router;

  @tracked isRunning = false;

  get currentTest() {
    return this.args.currentTest;
  }

  async getUnfinishedTest() {
    let unfinishedTest = this.store.peekAll('test').findBy('completed', null);
    if (!unfinishedTest) {
      const now = new Date;
      unfinishedTest = this.store.createRecord('test', {
        score: +now % 150,
        created: now,
        completed: null, //new Date(now - 500)
      });
      await unfinishedTest.save();
    }
    return unfinishedTest;
  }

  @action
  async beginTest() {
    this.isRunning = true;
  }

  @action
  async createTest() {
    const test = await this.getUnfinishedTest();
    this.router.transitionTo('test.test', test.id);
  }

  @action
  async finishTest() {
    this.isRunning = false;
    const test = await this.getUnfinishedTest();
    test.completed = new Date();
    await test.save();
  }
}
