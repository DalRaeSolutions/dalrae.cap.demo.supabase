/* eslint-disable no-unused-vars */
const cookieParser = require('cookie-parser');
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('http://localhost:59921', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSJ9.vI9obAHOGyVVKa3pD--kJlyxp-Z2zV9UUMAhKpNLAcU');

module.exports = async (app) => {
  app.use(express.json());

  /**
   * 1. Enable cookie parser
   */
  //app.use(cookieParser());


  /**
   * 2. Show cookie output
   */
  // app.use(async ({ cookies, ...req }, res, next) => {
  //   if (!cookies) return next();

  //   const token = cookies['sb-access-token'];
  //   console.log(token);

  //   next();
  // })

  /**
   * Validate cookie and pass the results on to other middleware
   */
  // app.use(async ({cookies, ...req}, res, next) => {
  //   const token = cookies['sb-access-token'];
  //   const {data: user, error } = await supabase.auth.api.getUser(token);
  //   res.locals = { user, error };

  //   next();
  // })

  // app.get('/auth/me', (req, res) => {
  //   res.status(200).json(res?.locals?.user)
  // });

  // app.get('/auth/cookies', (req, res) => {
  //   res.clearCookie('sb-access-token', { domain: 'localhost', httpOnly: true, secure: true });
  //   res.clearCookie('sb-refresh-token', { domain: 'localhost', httpOnly: true, secure: true });
  //   res.status(200).json({success: true})
  // });
}
