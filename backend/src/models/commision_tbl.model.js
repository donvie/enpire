// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const commisionTbl = sequelizeClient.define('commision_tbl', {
    comm_pk: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: false
    },
    comm_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comm_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comm_from: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comm_to: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comm_val: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comm_month: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comm_year: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    comm_media: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    comm_loc: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    comm_user: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    comm_remarks: {
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
  commisionTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return commisionTbl;
};
