// Initializes the `retroprocessing_tbl` service on path `/retroprocessing_tbl`
const { RetroprocessingTbl } = require('./retroprocessing_tbl.class');
const createModel = require('../../models/retroprocessing_tbl.model');
const hooks = require('./retroprocessing_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/retroprocessing_tbl', new RetroprocessingTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('retroprocessing_tbl');

  service.hooks(hooks);
};
