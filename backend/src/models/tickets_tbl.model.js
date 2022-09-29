// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const ticketsTbl = sequelizeClient.define('tickets_tbl', {
    pk: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: true,
      autoIncrement: true
    },
    log_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    encash_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    encash_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    item: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unit_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    encash_remarks: {
      type: DataTypes.STRING,
      allowNull: true
    },
    batch: {
      type: DataTypes.STRING,
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
  ticketsTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return ticketsTbl;
};
