// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tapbidsrewardsTbl = sequelizeClient.define('tapbidsrewards_tbl', {
    pk: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tap_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tap_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tap_points: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tap_picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tap_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tap_stop: {
      type: DataTypes.DATE,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
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
  tapbidsrewardsTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return tapbidsrewardsTbl;
};
