// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const rbpTbl = sequelizeClient.define('rbp_tbl', {
    pk: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    share: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    max: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    node: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lvl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
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
  rbpTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return rbpTbl;
};
