const assert = require('assert');
const app = require('../../src/app');

describe('\'country_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('country_tbl');

    assert.ok(service, 'Registered the service');
  });
});
