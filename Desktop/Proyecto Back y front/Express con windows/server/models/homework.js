module.exports = (sequelize, Sequelize) =>{
    const Homework = sequelize.define("homework", {
        nombreTarea: {
            type: Sequelize.STRING,
        }
    });
    return Homework;
};