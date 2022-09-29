

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      async context => {
        const id = context.data.taprewardid
        const reward = await context.app.service('tapbidsrewards_tbl').get(id)
        if (reward.tap_stop > new Date()) {
          context.data.date_created = new Date()
          context.data
        } else {
          throw new Error('Reward Ended!');
        }
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
