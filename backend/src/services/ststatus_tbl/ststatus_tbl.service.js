// Initializes the `ststatus_tbl` service on path `/ststatus_tbl`
const { StstatusTbl } = require('./ststatus_tbl.class');
const createModel = require('../../models/ststatus_tbl.model');
const hooks = require('./ststatus_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/ststatus_tbl', new StstatusTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ststatus_tbl');

  service.hooks(hooks);
};
