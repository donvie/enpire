const assert = require('assert');
const app = require('../../src/app');

describe('\'accounts_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('accounts_tbl');

    assert.ok(service, 'Registered the service');
  });
});
