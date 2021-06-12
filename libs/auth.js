const cds = require('@sap/cds');

module.exports = (req, res, next) => {
  if (req?.session?.user) {
    req.user = new cds.User(req?.session?.user)
    next()
  } else {
    res.status(401).end();
  }
}