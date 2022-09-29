// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const commtypeTbl = sequelizeClient.define('commtype_tbl', {
    comm_code: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
      autoIncrement: false
    },
    comm_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comm_mode: {
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
  commtypeTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return commtypeTbl;
};
