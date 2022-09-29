const assert = require('assert');
const app = require('../../src/app');

describe('\'retroprocessing_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('retroprocessing_tbl');

    assert.ok(service, 'Registered the service');
  });
});
