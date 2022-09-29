// Initializes the `cscart_tbl` service on path `/cscart_tbl`
const { CscartTbl } = require('./cscart_tbl.class');
const createModel = require('../../models/cscart_tbl.model');
const hooks = require('./cscart_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/cscart_tbl', new CscartTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cscart_tbl');

  service.hooks(hooks);
};
