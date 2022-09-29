const assert = require('assert');
const app = require('../../src/app');

describe('\'commtype_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('commtype_tbl');

    assert.ok(service, 'Registered the service');
  });
});
