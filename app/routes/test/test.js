import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TestRoute extends Route {
  @service store;

  model({ test_id }) {
    super.model(...arguments);

    let model = this.store.peekRecord('test', test_id);
    console.log('/test/test model', model.id);

    return model;
  }

  afterModel() {
    super.afterModel(...arguments);
    console.log('/test/test afterModel');
  }
}
