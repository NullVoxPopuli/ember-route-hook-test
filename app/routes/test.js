import Route from '@ember/routing/route';

export default class TestRoute extends Route {
  model() {
    super.model(...arguments);
    console.log('/test/test model');
    const model = this.modelFor('application');
    const { test_id } = this.paramsFor('test.test');
    model.currentTestId = test_id;
    return model;
  }
  afterModel() {
    super.afterModel(...arguments);
    console.log('/test/test afterModel');
  }
}
