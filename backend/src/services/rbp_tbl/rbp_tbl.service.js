// Initializes the `rbp_tbl` service on path `/rbp-tbl`
const { RbpTbl } = require('./rbp_tbl.class');
const createModel = require('../../models/rbp_tbl.model');
const hooks = require('./rbp_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rbp_tbl', new RbpTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rbp_tbl');

  service.hooks(hooks);
};
