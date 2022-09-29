const assert = require('assert');
const app = require('../../src/app');

describe('\'sttype_tbl\' service', () => {
  it('registered the service', () => {
    const service = app.service('sttype_tbl');

    assert.ok(service, 'Registered the service');
  });
});
