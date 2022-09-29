// Initializes the `terms_tbl` service on path `/terms_tbl`
const { TermsTbl } = require('./terms_tbl.class');
const createModel = require('../../models/terms_tbl.model');
const hooks = require('./terms_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/terms_tbl', new TermsTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('terms_tbl');

  service.hooks(hooks);
};
