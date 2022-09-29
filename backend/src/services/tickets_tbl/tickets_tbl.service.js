// Initializes the `tickets_tbl` service on path `/tickets_tbl`
const { TicketsTbl } = require('./tickets_tbl.class');
const createModel = require('../../models/tickets_tbl.model');
const hooks = require('./tickets_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tickets_tbl', new TicketsTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tickets_tbl');

  service.hooks(hooks);
};
