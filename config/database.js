const mysql = require('mysql2');
const db = mysql.createConnection({    
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'NodeTests'
});
db.connect((err) => {
    if(err){
        console.log("An error occured when opening database");
    } else {
        console.log("Connected to MySQL")
    }
})
module.exports = db;