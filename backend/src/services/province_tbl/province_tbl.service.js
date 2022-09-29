// Initializes the `province_tbl` service on path `/province_tbl`
const { ProvinceTbl } = require('./province_tbl.class');
const createModel = require('../../models/province_tbl.model');
const hooks = require('./province_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/province_tbl', new ProvinceTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('province_tbl');

  service.hooks(hooks);
};
