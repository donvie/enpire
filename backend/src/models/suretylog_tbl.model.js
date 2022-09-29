// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const suretylogTbl = sequelizeClient.define('suretylog_tbl', {
    pk: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    tran_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    accountid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    lvl: {
      type: DataTypes.INTEGER,
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
  suretylogTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return suretylogTbl;
};
