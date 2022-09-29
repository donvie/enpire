// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tapbids = sequelizeClient.define('tapbids_tbl', {
    pk: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: true,
      autoIncrement: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    taprewardid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    timestamps: false,
  },
  {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  tapbids.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return tapbids;
};
