const mysql=require('mysql2');
require('dotenv').config();

const pool = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USERNAME,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,
    ssl: {
      rejectUnauthorized: true
    }
  });

  pool.connect(function(err) {
    if (err) throw err;
    console.log("Succesfully connected to PlanetScale!");
    process.exit(0)
  });

module.exports=pool;
