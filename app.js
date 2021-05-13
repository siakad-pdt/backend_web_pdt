const express = require("express")
const logger = require("morgan")
const app = express();
const server = require("http").Server(app)
const mainRoute = require("./routes");

//DB Connection
require("./configuration/dbConfig")();

//Security
const whitelist = [
    "localhost:3000",
    "localhost:3001"
];

app.use(function(req, res, next) {
  if(whitelist.includes(req.headers.origin)){
    res.header("Access-Control-Allow-Origin", req.headers.origin);
  } else {
    console.log(`connection from ${req.headers.origin} (*not*) rejected`)
    // return res.status(403).json({
    //   status: 403,
    //   message: 'Unauthorized Access', // ni bikin ga bisa nembak dari postman
    // })
  }
  res.header("Access-Control-Allow-Headers", "X-Requested-With,origin,authorization,accept,client-sent-security-token");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Expose-Headers", "Content-Security-Policy, Location");
  next();
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

app.use(logger('dev'));
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: false}));

app.use(mainRoute);
app.use(require("./middlewares/errHandler"));

//Setup Server
server.listen("8080", () => {
    console.log(`Server running at 8080`)
});