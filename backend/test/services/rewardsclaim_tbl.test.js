const assert = require('assert');
const app = require('../../src/app');

describe('\'rewardsclaim_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('rewardsclaim_tbl');

    assert.ok(service, 'Registered the service');
  });
});
