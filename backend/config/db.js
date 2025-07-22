import {Sequelize} from  "sequelize";

const db = new Sequelize ('db_portfolio2','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;