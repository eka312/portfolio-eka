import {Sequelize} from  "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Proyek = db.define('proyeks',{
    gambar: DataTypes.STRING,
    judul: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
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