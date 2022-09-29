const assert = require('assert');
const app = require('../../src/app');

describe('\'commision_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('commision_tbl');

    assert.ok(service, 'Registered the service');
  });
});
