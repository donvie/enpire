// Initializes the `accounts_tbl` service on path `/accounts-tbl`
const { AccountsTbl } = require('./accounts_tbl.class');
const createModel = require('../../models/accounts_tbl.model');
const hooks = require('./accounts_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/accounts_tbl', new AccountsTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('accounts_tbl');

  service.hooks(hooks);
};
