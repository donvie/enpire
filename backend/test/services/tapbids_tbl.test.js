const assert = require('assert');
const app = require('../../src/app');

describe('\'tapbids_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('tapbids_tbl');

    assert.ok(service, 'Registered the service');
  });
});
