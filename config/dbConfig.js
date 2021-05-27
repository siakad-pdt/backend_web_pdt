const mysql = require("mysql2");

async function dbConnection(){
//     const connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: '',
//         database: "backend_pdt"
//     })
//========================================================================LOCALHOST SETTING===================================================================
    const connection = mysql.createConnection({
        host: "us-cdbr-east-03.cleardb.com",
        user: "ba6ccd2c690c5e",
        password: '66d67011',
        database: "heroku_41726c0217cc5ee"
    })
//========================================================================DEPLOYMENT SETTINGS======================================================================
    
    connection.connect(err => {
        if(err){
            console.log(err)
        } else {
            console.log("Database has been connected!")
        }
    })
}

module.exports = dbConnection;
