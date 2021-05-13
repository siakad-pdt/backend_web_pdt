
const errValidator = (err) => {
  let errList = [];
  for (let e in err.errors) {
    errList.push(err.errors[e].message);
  }
  return errList.join(",");
};

module.exports = (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || "Internal Server Error";

  if (err.name === "ValidationError") {
    message = errValidator(err);
    status = 400;
    return res.status(status).json({ message, status });
  } else if(err.message === "Cannot read property 'salt' of undefined"){
    return res.status(400).json({Error: "Missing jwt to be decoded"});
  } else {
    console.log(err)
    return res.status(400).json({ message,...err });
  }
};
