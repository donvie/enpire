// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const packageTbl = sequelizeClient.define('package_tbl', {
    pk: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    package: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_package: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    perfume: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    oc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rbp_bronze: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rbp_silver: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rbp_gold: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rbp_platinum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    free_royalty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rbp_elite: {
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
  packageTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return packageTbl;
};
