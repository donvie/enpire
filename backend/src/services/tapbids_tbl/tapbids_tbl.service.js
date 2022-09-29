// Initializes the `tapbids_tbl` service on path `/tapbids-tbl`
const { TapbidsTbl } = require('./tapbids_tbl.class');
const createModel = require('../../models/tapbids_tbl.model');
const hooks = require('./tapbids_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tapbids_tbl', new TapbidsTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tapbids_tbl');

  service.hooks(hooks);
};
