import express from 'express';
import { ExamplesController } from './examples.controller';

const controller = new ExamplesController();

export default express
  .Router()
  .post('/', controller.create.bind(controller))
  .get('/', controller.all.bind(controller))
  .get('/:id', controller.byId.bind(controller));
