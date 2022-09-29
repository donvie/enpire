// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const usersTbl = sequelizeClient.define('users_tbl', {
    pk: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    new_password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unhashed: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contact_ccode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    province: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    city: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_stockist: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payoption_details: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    verified_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    verifycode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    verify_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    active_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    secret_q: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    secret_a: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_upgraded: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gcash: {
      type: DataTypes.STRING,
      allowNull: true
    },
    placement: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_terms: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_terms_click: {
      type: DataTypes.DATE,
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
  usersTbl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return usersTbl;
};
