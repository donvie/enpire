// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const countryTbl = sequelizeClient.define('country_tbl', {
    country_code: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
      autoIncrement: false
    },
    country_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country_pcode: {
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
  countryTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return countryTbl;
};
