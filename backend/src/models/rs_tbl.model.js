// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const rsTbl = sequelizeClient.define('rs_tbl', {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: false
    },
    pin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dateused: {
      type: DataTypes.DATE,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    batch: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stockist: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    creator: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    itemcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    credit: {
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
  rsTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return rsTbl;
};
