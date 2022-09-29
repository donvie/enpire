

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      (context) => {
        context.data.date_created = new Date()
        context.data
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
