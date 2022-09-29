const assert = require('assert');
const app = require('../../src/app');

describe('\'rs_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('rs_tbl');

    assert.ok(service, 'Registered the service');
  });
});
