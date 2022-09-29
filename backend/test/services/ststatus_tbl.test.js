const assert = require('assert');
const app = require('../../src/app');

describe('\'ststatus_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('ststatus_tbl');

    assert.ok(service, 'Registered the service');
  });
});
