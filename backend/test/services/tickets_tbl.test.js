const assert = require('assert');
const app = require('../../src/app');

describe('\'tickets_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('tickets_tbl');

    assert.ok(service, 'Registered the service');
  });
});
