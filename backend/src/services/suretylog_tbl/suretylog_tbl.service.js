// Initializes the `suretylog_tbl` service on path `/suretylog_tbl`
const { SuretylogTbl } = require('./suretylog_tbl.class');
const createModel = require('../../models/suretylog_tbl.model');
const hooks = require('./suretylog_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/suretylog_tbl', new SuretylogTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('suretylog_tbl');

  service.hooks(hooks);
};
