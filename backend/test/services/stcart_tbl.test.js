const assert = require('assert');
const app = require('../../src/app');

describe('\'stcart_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('stcart_tbl');

    assert.ok(service, 'Registered the service');
  });
});
