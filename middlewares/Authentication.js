let { verifytoken } = require("../helpers/jwtToken");

const Authentication = (req, res, next) => {
  let token = req.headers.jwttoken

  verifytoken(token, async (err, decoded) => {
    if (err) {
      next({ message: `You must login first as user` });
    } else if (decoded) {
      if(decoded.exp > Date.now()/1000){
          req.decoded = decoded;
          next();
      } else {
        res.status(401).json({message: "Sesi anda telah berakhir. Mohon login kembali"});
      }
    }
  })
}

module.exports = {
    Authentication
}