// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const rtinvoiceTbl = sequelizeClient.define('rtinvoice_tbl', {
    pk: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: false
    },
    trandate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ref_no: {
      type: DataTypes.STRING,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
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
    process_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qty: {
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
  rtinvoiceTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return rtinvoiceTbl;
};
