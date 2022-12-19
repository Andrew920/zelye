const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "db",
    user: "root",
    password: "zelye",
    database: "zelye"
});

conn.connect((err) => {
    if(err){
        console.log('Error connecting to Db');
        return;
      }
      console.log('Connection established');
});

module.exports = conn;