// Initializes the `commision_tbl` service on path `/commision_tbl`
const { CommisionTbl } = require('./commision_tbl.class');
const createModel = require('../../models/commision_tbl.model');
const hooks = require('./commision_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/commision_tbl', new CommisionTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('commision_tbl');

  service.hooks(hooks);
};
