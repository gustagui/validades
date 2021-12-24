module.exports = {
    development: {
      username: "root",
      password: null,
      database: "validades",
      host: "localhost",
      dialect: "mysql"
    },
    test: {
      username: "root",
      password: null,
      database: "validades",
      host: "127.0.0.1",
      dialect: "mysql"
    },
    production: {
      username: "root",
      password: null,
      database: "validades",
      host: "mysql://be1d456ac82cd3:ad404816@us-cdbr-east-05.cleardb.net/heroku_506ea39d50d24bd?reconnect=true",
      dialect: "mysql"
    }
  }