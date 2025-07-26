import {Sequelize} from  "sequelize";
import db from "../config/db.js";
import slugify from "slugify";

const {DataTypes} = Sequelize;

const Proyek = db.define('proyeks',{
    gambar: DataTypes.STRING,
    judul: DataTypes.STRING,
    slug: {
        type: DataTypes.STRING,
        unique: true
    },
    deskripsi: DataTypes.TEXT,
    tools:{
        type: DataTypes.TEXT,
        get() {
            const rawValue = this.getDataValue('tools');
            return rawValue ? JSON.parse(rawValue) : [];
        },
        set(value) {
            this.setDataValue('tools', JSON.stringify(value));
        }
    },
    url_demo: DataTypes.STRING,

},{
    freezeTableName:true
});

export default Proyek;

(async()=>{
    await db.sync();
})();