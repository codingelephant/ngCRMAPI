'use strict';

module.exports = (sequelize, DataTypes) => {

  var Account = sequelize.define('Account', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    company_name: DataTypes.STRING,
    address: DataTypes.STRING,
    type: DataTypes.INTEGER,
    remarks: DataTypes.TEXT,
    referer: DataTypes.STRING,
    status: DataTypes.INTEGER,
  }, 
  
  {
    tableName:'accounts',
    timestamps: true,
   // createdAt: 'created_at',
   // updatedAt: 'updated_at',
  });

  return Account;
};
