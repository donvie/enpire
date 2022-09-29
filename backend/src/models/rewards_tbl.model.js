// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const rewardsTbl = sequelizeClient.define('rewards_tbl', {
    pk: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: true,
      autoIncrement: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reward_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reward_desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reward_pic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reward_pts: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    days_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    expiring: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    cat: {
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
  rewardsTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return rewardsTbl;
};
