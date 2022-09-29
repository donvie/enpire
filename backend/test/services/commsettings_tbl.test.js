const assert = require('assert');
const app = require('../../src/app');

describe('\'commsettings_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('commsettings_tbl');

    assert.ok(service, 'Registered the service');
  });
});
