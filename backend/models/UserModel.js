import {Sequelize} from  "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    refresh_token: DataTypes.TEXT,
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();