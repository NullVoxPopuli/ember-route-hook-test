import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class TestController extends Controller {
  @service store;

  get currentTest() {
    return this.store.peekAll('test').findBy('id', this.model.currentTestId);
  }
}
