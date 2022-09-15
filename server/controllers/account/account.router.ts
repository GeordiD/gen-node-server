import express from 'express';
import passport from 'passport';
import { _accountController } from './account.controller';

export default express
  .Router()
  .post(
    '/login',
    passport.authenticate('login', { session: false }),
    _accountController.login
  )
  .post(
    '/login/refresh',
    passport.authenticate('refresh', { session: false }),
    _accountController.refresh
  );
