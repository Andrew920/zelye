const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "db",
    user: "root",
    password: "zelye",
    database: "zelye"
});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
sleep(20000).then(() => {
    conn.connect((err) => {
        if(err){
            console.log('Error connecting to Db ' + err);
            return;
          }
          console.log('Connection established');
    });
});

module.exports = conn;