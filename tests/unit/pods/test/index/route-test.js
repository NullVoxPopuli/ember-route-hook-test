import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | test/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:test/index');
    assert.ok(route);
  });
});
