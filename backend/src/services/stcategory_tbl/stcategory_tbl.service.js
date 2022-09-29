// Initializes the `stcategory_tbl` service on path `/stcategory_tbl`
const { StcategoryTbl } = require('./stcategory_tbl.class');
const createModel = require('../../models/stcategory_tbl.model');
const hooks = require('./stcategory_tbl.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/stcategory_tbl', new StcategoryTbl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('stcategory_tbl');

  service.hooks(hooks);
};
