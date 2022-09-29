const assert = require('assert');
const app = require('../../src/app');

describe('\'town_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('town_tbl');

    assert.ok(service, 'Registered the service');
  });
});
