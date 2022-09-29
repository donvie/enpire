// Initializes the `stproducts_tbl` service on path `/stproducts-tbl`
const { StproductsTbl } = require('./stproducts_tbl.class');
const createModel = require('../../models/stproducts_tbl.model');
const hooks = require('./stproducts_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/stproducts_tbl', new StproductsTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('stproducts_tbl');

  service.hooks(hooks);
};
