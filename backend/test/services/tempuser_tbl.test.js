const assert = require('assert');
const app = require('../../src/app');

describe('\'tempuser_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('tempuser_tbl');

    assert.ok(service, 'Registered the service');
  });
});
