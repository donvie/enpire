const assert = require('assert');
const app = require('../../src/app');

describe('\'zipcode_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('zipcode_tbl');

    assert.ok(service, 'Registered the service');
  });
});
