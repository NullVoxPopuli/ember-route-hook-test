import EmberRouter from '@ember/routing/router';
import config from 'ember-route-hook-test/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('test', function () {
    // this.route('index');
    this.route('test', { path: '/:test_id' });
  });
});
