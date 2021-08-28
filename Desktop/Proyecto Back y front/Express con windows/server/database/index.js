import dbConfig from "../config/database";
import  Sequelize  from "sequelize";
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect:  dbConfig.dialect,
    
});

const db = {};
db.sequelize = sequelize;
db.user = require("../models/user")(sequelize, Sequelize);
db.homework = require("../models/homework")(sequelize, Sequelize);

module.exports = db