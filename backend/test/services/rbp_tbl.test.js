const assert = require('assert');
const app = require('../../src/app');

describe('\'rbp_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('rbp_tbl');

    assert.ok(service, 'Registered the service');
  });
});
