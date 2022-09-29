const assert = require('assert');
const app = require('../../src/app');

describe('\'cscart_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('cscart_tbl');

    assert.ok(service, 'Registered the service');
  });
});
