const assert = require('assert');
const app = require('../../src/app');

describe('\'terms_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('terms_tbl');

    assert.ok(service, 'Registered the service');
  });
});
