/* eslint-disable no-unused-vars */
const cookieSession = require('cookie-session');
const express = require('express');
const httpOnly = process.env.NODE_ENV === 'production';
const secure = process.env.NODE_ENV === 'production';

module.exports = async (app) => {

  app.use(express.json());

  app.use(cookieSession({
    name: 'supacookie',
    secure,
    httpOnly,
    keys: ['key1', 'key2']
  }))

  app.post('/auth/cookie', (req, res) => {
    req.session = req.body?.user ? req.body : null;
    res.status(201).json(req.session || {});
  })

  app.get('/auth/me', (req, res) => {
    res.status(200).json({
      loggedIn: !!req?.session?.user,
      user: req?.session?.user
    })
  });
}
