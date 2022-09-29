// Initializes the `tapbidsrewards_tbl` service on path `/tapbidsrewards-tbl`
const { TapbidsrewardsTbl } = require('./tapbidsrewards_tbl.class');
const createModel = require('../../models/tapbidsrewards_tbl.model');
const hooks = require('./tapbidsrewards_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tapbidsrewards_tbl', new TapbidsrewardsTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tapbidsrewards_tbl');

  service.hooks(hooks);
};
