// Initializes the `country_tbl` service on path `/country_tbl`
const { CountryTbl } = require('./country_tbl.class');
const createModel = require('../../models/country_tbl.model');
const hooks = require('./country_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/country_tbl', new CountryTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('country_tbl');

  service.hooks(hooks);
};
