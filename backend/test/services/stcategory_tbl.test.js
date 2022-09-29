const assert = require('assert');
const app = require('../../src/app');

describe('\'stcategory_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('stcategory_tbl');

    assert.ok(service, 'Registered the service');
  });
});
