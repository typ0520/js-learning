"use strict";
const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize-demo', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  port: 3306,
  // 字段以下划线（_）来分割（默认是驼峰命名风格）
  //underscored: true
});

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  }
});

const test = async () => {
  await User.sync({force: true})
  await User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
  await User.create({
    firstName: 'John2',
    lastName: 'Hancock2'
  });

  const users = await User.findAll()
  console.log(users)

  const user = await User.findOne()
  console.log(user)  
}
test()