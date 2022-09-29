const assert = require('assert');
const app = require('../../src/app');

describe('\'stinvoicedetails_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('stinvoicedetails_tbl');

    assert.ok(service, 'Registered the service');
  });
});
