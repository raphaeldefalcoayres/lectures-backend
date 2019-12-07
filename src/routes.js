import { Router } from 'express';

import UserController from './app/controllers/UserConroller';
import LectureController from './app/controllers/LectureController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ api: 'ok' });
});

routes.post('/users', UserController.store);
routes.post('/lectures', LectureController.store);

export default routes;
