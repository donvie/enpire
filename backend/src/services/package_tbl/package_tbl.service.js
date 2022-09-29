// Initializes the `package_tbl` service on path `/package_tbl`
const { PackageTbl } = require('./package_tbl.class');
const createModel = require('../../models/package_tbl.model');
const hooks = require('./package_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/package_tbl', new PackageTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('package_tbl');

  service.hooks(hooks);
};
