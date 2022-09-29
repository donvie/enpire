const assert = require('assert');
const app = require('../../src/app');

describe('\'suretylog_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('suretylog_tbl');

    assert.ok(service, 'Registered the service');
  });
});
