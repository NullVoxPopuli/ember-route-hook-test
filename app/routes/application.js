import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';

export default class ApplicationRoute extends Route {
  @service store;

  async beforeModel() {
    console.log('application beforeModel');
    const tests = await this.store.findAll('test');
    if (!tests.length) {
      await all([
        this.store.createRecord('test').save(),
        this.store.createRecord('test').save(),
        this.store.createRecord('test').save(),
      ]);
    }
  }

  async model() {
    console.log('application model');
    return this.store.peekAll('test');
  }
}
