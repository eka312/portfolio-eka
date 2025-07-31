import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// ✅ Logging semua ENV ke terminal
console.log("ENV CHECK:");
console.log("DATABASE_URL:", process.env.DATABASE_URL);
// console.log("DB_NAME:", process.env.DB_NAME);
// console.log("DB_USER:", process.env.DB_USER);
// console.log("DB_PASS:", process.env.DB_PASS);
// console.log("DB_HOST:", process.env.DB_HOST);
// console.log("DB_PORT:", process.env.DB_PORT);

// const db = new Sequelize(
//   process.env.DB_NAME,     
//   process.env.DB_USER, 
//   process.env.DB_PASS,   
//   {
//     host: process.env.DB_HOST,  
//     port: process.env.DB_PORT,
//     dialect: "postgres",
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     }
//   }
// );

const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});



export default db;
