// Initializes the `zipcode_tbl` service on path `/zipcode_tbl`
const { ZipcodeTbl } = require('./zipcode_tbl.class');
const createModel = require('../../models/zipcode_tbl.model');
const hooks = require('./zipcode_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/zipcode_tbl', new ZipcodeTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('zipcode_tbl');

  service.hooks(hooks);
};
