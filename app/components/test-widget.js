import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class TestWidgetComponent extends Component {
  @service store;
  @service router;

  get currentTest() {
    return this.args.currentTest;
  }
}
