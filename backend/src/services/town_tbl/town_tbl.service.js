// Initializes the `town_tbl` service on path `/town_tbl`
const { TownTbl } = require('./town_tbl.class');
const createModel = require('../../models/town_tbl.model');
const hooks = require('./town_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/town_tbl', new TownTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('town_tbl');

  service.hooks(hooks);
};
