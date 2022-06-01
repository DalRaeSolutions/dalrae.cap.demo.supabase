/* eslint-disable no-unused-vars */
const cds = require('@sap/cds');

module.exports = (req, res, next) => {

  //res.status(401).end('No user info');
  
  if (res?.locals?.user) {
    const { email } = res.locals.user;
    console.log('[auth] logged in as:', email);
    req.user = new cds.User({ ...res.locals.user, id: email });
    next()
  } else {
    console.log('[auth]', !!res.locals.user)
    res.status(401).end('No user info');
  }
}