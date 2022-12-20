const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "db",
    user: "root",
    password: "zelye",
    database: "zelye"
});

conn.connect((err) => {
    while(err){
        console.log('Error connecting to Db ' + err);
    }
    // if(err){
    //     console.log('Error connecting to Db ' + err);
    //     return;
    //   }
    console.log('Connection established');
});

module.exports = conn;