const assert = require('assert');
const app = require('../../src/app');

describe('\'tapbidsrewards_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('tapbidsrewards_tbl');

    assert.ok(service, 'Registered the service');
  });
});
