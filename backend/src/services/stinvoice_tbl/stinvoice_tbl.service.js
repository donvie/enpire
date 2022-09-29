// Initializes the `stinvoice_tbl` service on path `/stinvoice_tbl`
const { StinvoiceTbl } = require('./stinvoice_tbl.class');
const createModel = require('../../models/stinvoice_tbl.model');
const hooks = require('./stinvoice_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/stinvoice_tbl', new StinvoiceTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('stinvoice_tbl');

  service.hooks(hooks);
};
