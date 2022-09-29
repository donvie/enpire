// Initializes the `rewards_tbl` service on path `/rewards-tbl`
const { RewardsTbl } = require('./rewards_tbl.class');
const createModel = require('../../models/rewards_tbl.model');
const hooks = require('./rewards_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rewards_tbl', new RewardsTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rewards_tbl');

  service.hooks(hooks);
};
