const cds = require('@sap/cds');
const dev = process.env.NODE_ENV !== 'production';

module.exports = (req, res, next) => {
  if (dev || req?.session?.user) {
    req.user = new cds.User(req?.session?.user || {
      name: 'Jorg'
    });
    next()
  } else {
    res.status(401).end('No user info');
  }
}