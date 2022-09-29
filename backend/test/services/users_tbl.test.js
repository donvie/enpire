const assert = require('assert');
const app = require('../../src/app');

describe('\'users_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('users_tbl');

    assert.ok(service, 'Registered the service');
  });
});
