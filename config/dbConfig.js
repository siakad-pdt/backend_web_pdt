const mysql = require("mysql2");

async function dbConnection(){
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: '',
        database: "backend_pdt"
    })
    
    connection.connect(err => {
        if(err){
            console.log(err)
        } else {
            console.log("Database has been connected!")
        }
    })
}

module.exports = dbConnection;