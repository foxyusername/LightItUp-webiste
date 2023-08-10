const mysql=require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password: 'sql123sql',
    database: 'lightitup'
  });

module.exports=pool;
