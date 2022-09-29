const assert = require('assert');
const app = require('../../src/app');

describe('\'stproducts_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('stproducts_tbl');

    assert.ok(service, 'Registered the service');
  });
});
