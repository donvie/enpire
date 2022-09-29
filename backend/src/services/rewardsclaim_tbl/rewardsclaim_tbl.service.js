// Initializes the `rewardsclaim_tbl` service on path `/rewardsclaim-tbl`
const { RewardsclaimTbl } = require('./rewardsclaim_tbl.class');
const createModel = require('../../models/rewardsclaim_tbl.model');
const hooks = require('./rewardsclaim_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rewardsclaim_tbl', new RewardsclaimTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rewardsclaim_tbl');

  service.hooks(hooks);
};
