// Initializes the `users_tbl` service on path `/users-tbl`
const { UsersTbl } = require('./users_tbl.class');
const createModel = require('../../models/users_tbl.model');
const hooks = require('./users_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/users_tbl', new UsersTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users_tbl');

  service.hooks(hooks);
};
