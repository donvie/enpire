// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const accountsTbl = sequelizeClient.define('accounts_tbl', {
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
    sponsor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    placement: {
      type: DataTypes.STRING,
      allowNull: true
    },
    node: {
      type: DataTypes.STRING,
      allowNull: true
    },
    direct: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_lvl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lvl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exempt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    temp: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    mtenance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cash_bonus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    max_bonus: {
      type: DataTypes.DECIMAL,
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
  accountsTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return accountsTbl;
};
