const assert = require('assert');
const app = require('../../src/app');

describe('\'package_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('package_tbl');

    assert.ok(service, 'Registered the service');
  });
});
