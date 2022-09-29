// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const commsettingsTbl = sequelizeClient.define('commsettings_tbl', {
    pk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    code: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false
    },
    setname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    l0: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    l1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    l2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    l3: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    l4: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    rp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    rp2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mt: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pv: {
      type: DataTypes.DECIMAL,
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
  commsettingsTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return commsettingsTbl;
};
