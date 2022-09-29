// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const stinvoiceTbl = sequelizeClient.define('stinvoice_tbl', {
    invoice_no: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    trandate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tax: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    net: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    discount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true
    },
    processed_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paymode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stockist: {
      type: DataTypes.STRING,
      allowNull: true
    },
    proof: {
      type: DataTypes.STRING,
      allowNull: true
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    process_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    st_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    stprocess_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dcharge: {
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
  stinvoiceTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return stinvoiceTbl;
};
