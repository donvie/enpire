// Initializes the `stinvoicedetails_tbl` service on path `/stinvoicedetails_tbl`
const { StinvoicedetailsTbl } = require('./stinvoicedetails_tbl.class');
const createModel = require('../../models/stinvoicedetails_tbl.model');
const hooks = require('./stinvoicedetails_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/stinvoicedetails_tbl', new StinvoicedetailsTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('stinvoicedetails_tbl');

  service.hooks(hooks);
};
