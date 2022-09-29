// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const stinvoicedetailsTbl = sequelizeClient.define('stinvoicedetails_tbl', {
    pk: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    invoice_no: {
      type: DataTypes.STRING,
      allowNull: true
    },
    itemcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unitcost: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mcredits: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rcredits: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    scredits: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    new: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_content: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ncredits: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    new_credits: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jmtg_credits: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    royal_credts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    promo_credits: {
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
  stinvoicedetailsTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return stinvoicedetailsTbl;
};
