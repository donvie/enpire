// Initializes the `rs_tbl` service on path `/rs_tbl`
const { RsTbl } = require('./rs_tbl.class');
const createModel = require('../../models/rs_tbl.model');
const hooks = require('./rs_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rs_tbl', new RsTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rs_tbl');

  service.hooks(hooks);
};
