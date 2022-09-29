const assert = require('assert');
const app = require('../../src/app');

describe('\'rewards_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('rewards_tbl');

    assert.ok(service, 'Registered the service');
  });
});
