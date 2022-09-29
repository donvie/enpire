// Initializes the `raffleticket_tbl` service on path `/raffleticket_tbl`
const { RaffleticketTbl } = require('./raffleticket_tbl.class');
const createModel = require('../../models/raffleticket_tbl.model');
const hooks = require('./raffleticket_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/raffleticket_tbl', new RaffleticketTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('raffleticket_tbl');

  service.hooks(hooks);
};
