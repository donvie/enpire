const assert = require('assert');
const app = require('../../src/app');

describe('\'rewardpts_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('rewardpts_tbl');

    assert.ok(service, 'Registered the service');
  });
});
