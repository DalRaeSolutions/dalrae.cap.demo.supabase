/* eslint-disable no-unused-vars */
const cookieSession = require('cookie-session');
const express = require('express');

module.exports = async (app) => {
  console.log('adding sessions and cookies', process.env.NODE_ENV === 'production')
  app.use(cookieSession({
    name: 'supacookie',
    // secure: process.env.NODE_ENV === 'production',
    keys: ['key1', 'key2']
  }))

  app.use(express.json());

  app.post('/auth/cookie', (req, res) => {
    req.session = req.body?.user ? req.body : null;
    res.status(201).json(req.session || {});
  })

  app.get('/auth/me', (req, res) => {
    res.status(200).json({
      loggedIn: !!req?.session?.user,
      user: req?.session?.user
    })
  })
}
