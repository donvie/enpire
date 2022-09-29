// Initializes the `rtinvoice_tbl` service on path `/rtinvoice_tbl`
const { RtinvoiceTbl } = require('./rtinvoice_tbl.class');
const createModel = require('../../models/rtinvoice_tbl.model');
const hooks = require('./rtinvoice_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rtinvoice_tbl', new RtinvoiceTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rtinvoice_tbl');

  service.hooks(hooks);
};
