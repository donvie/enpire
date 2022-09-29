const assert = require('assert');
const app = require('../../src/app');

describe('\'rtinvoice_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('rtinvoice_tbl');

    assert.ok(service, 'Registered the service');
  });
});
