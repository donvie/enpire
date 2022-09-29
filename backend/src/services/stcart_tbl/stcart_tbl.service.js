// Initializes the `stcart_tbl` service on path `/stcart_tbl`
const { StcartTbl } = require('./stcart_tbl.class');
const createModel = require('../../models/stcart_tbl.model');
const hooks = require('./stcart_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/stcart_tbl', new StcartTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('stcart_tbl');

  service.hooks(hooks);
};
