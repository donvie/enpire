// Initializes the `commsettings_tbl` service on path `/commsettings_tbl`
const { CommsettingsTbl } = require('./commsettings_tbl.class');
const createModel = require('../../models/commsettings_tbl.model');
const hooks = require('./commsettings_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/commsettings_tbl', new CommsettingsTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('commsettings_tbl');

  service.hooks(hooks);
};
