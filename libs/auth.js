const cds = require('@sap/cds');
const dev = process.env.NODE_ENV !== 'production';

module.exports = (req, res, next) => {
  if (req?.session?.user) {
    const { email } = req.session.user;
    console.log('[sessions] logged in as:', email);
    req.user = new cds.User({ ...req.session.user, id: email });
    next()
  } else {
    res.status(401).end('No user info');
  }
}