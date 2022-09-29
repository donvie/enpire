// Initializes the `tempuser_tbl` service on path `/tempuser_tbl`
const { TempuserTbl } = require('./tempuser_tbl.class');
const createModel = require('../../models/tempuser_tbl.model');
const hooks = require('./tempuser_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tempuser_tbl', new TempuserTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tempuser_tbl');

  service.hooks(hooks);
};
