// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const rewardsclaimTbl = sequelizeClient.define('rewardsclaim_tbl', {
    pk: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    reward_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reward_pts: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    reward_by: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reward_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reward_item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: false
    },
    processed_by: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tag: {
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
  rewardsclaimTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return rewardsclaimTbl;
};
