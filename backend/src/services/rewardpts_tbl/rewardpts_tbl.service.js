// Initializes the `rewardpts_tbl` service on path `/rewardpts-tbl`
const { RewardptsTbl } = require('./rewardpts_tbl.class');
const createModel = require('../../models/rewardpts_tbl.model');
const hooks = require('./rewardpts_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rewardpts_tbl', new RewardptsTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rewardpts_tbl');

  service.hooks(hooks);
};
