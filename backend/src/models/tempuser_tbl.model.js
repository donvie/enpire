// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tempuserTbl = sequelizeClient.define('tempuser_tbl', {
    pk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    username: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
      autoIncrement: false
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lname: {
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
  tempuserTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return tempuserTbl;
};
