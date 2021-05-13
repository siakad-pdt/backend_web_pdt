const jwt = require("jsonwebtoken");
const secret = "qoReTSAlhKmB8jtWi3QS0c_ct1UCrKqdhrrQ2i9A5DPrUydWy5x2wsTiYYkwBo2atfn2pDGk2ViJDPotK8kzqW6nUrzRe2sqbf00tXcQ7Bv6E74Lwa2EIB_I16W241P3dl-vikIo1LWdJYPz6pKOOinxOyOeRYj-jYkQvjN4hIs";

function generateToken(payload) {
  return jwt.sign(payload, secret, {expiresIn: "2h"});
}

function generateLoginToken(payload) {
  return jwt.sign(payload, secret);
}

function verifytoken(token, cb) {
  return jwt.verify(token, secret, function (err, decoded) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, decoded);
    }
  });
}

function verifyWsToken({ TOKEN }) {
  return new Promise((resolve, reject) => {
    "use strict";
    try {
      let JWT = jwt.verify(TOKEN, secret);
      resolve(JWT);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  generateToken,
  verifytoken,
  generateLoginToken,
  verifyWsToken,
};
