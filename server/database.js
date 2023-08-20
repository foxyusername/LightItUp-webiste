const mysql=require('mysql2');
require('dotenv').config();

const pool = mysql.createConnection(process.env.DATABASE_URL);

  pool.connect(function(err) {
    if (err) throw err;
    console.log("Succesfully connected to PlanetScale!");
  });

module.exports=pool;
