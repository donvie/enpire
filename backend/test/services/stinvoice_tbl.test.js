const assert = require('assert');
const app = require('../../src/app');

describe('\'stinvoice_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('stinvoice_tbl');

    assert.ok(service, 'Registered the service');
  });
});
