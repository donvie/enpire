// Initializes the `sttype_tbl` service on path `/sttype_tbl`
const { SttypeTbl } = require('./sttype_tbl.class');
const createModel = require('../../models/sttype_tbl.model');
const hooks = require('./sttype_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sttype_tbl', new SttypeTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sttype_tbl');

  service.hooks(hooks);
};
