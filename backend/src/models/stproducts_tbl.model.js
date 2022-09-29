// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const stproductsTbl = sequelizeClient.define('stproducts_tbl', {
    pk: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: true,
      autoIncrement: true
    },
    itemcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    itemname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    srp: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mprice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    sprice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    gprice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    avail_qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    l0: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    l1: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    l2: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    l3: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    credit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prodtype: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false
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
  stproductsTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return stproductsTbl;
};
