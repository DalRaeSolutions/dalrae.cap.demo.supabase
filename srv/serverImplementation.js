/* eslint-disable no-unused-vars */
const cookieSession = require('cookie-session');
const express = require('express');

module.exports = async (app) => {
  app.use(cookieSession({
    name: 'supacookie',
    keys: ['key1', 'key2']
  }))

  app.use(express.json());

  app.post('/auth/cookie', (req, res) => {
    req.session = req.body?.user ? req.body : null;
    res.status(201).json(req.session || {});
  })
}
