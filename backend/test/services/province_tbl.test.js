const assert = require('assert');
const app = require('../../src/app');

describe('\'province_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('province_tbl');

    assert.ok(service, 'Registered the service');
  });
});
