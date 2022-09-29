// Initializes the `commtype_tbl` service on path `/commtype_tbl`
const { CommtypeTbl } = require('./commtype_tbl.class');
const createModel = require('../../models/commtype_tbl.model');
const hooks = require('./commtype_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/commtype_tbl', new CommtypeTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('commtype_tbl');

  service.hooks(hooks);
};
