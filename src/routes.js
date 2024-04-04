import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer.js';

import SessionController from './app/controllers/SessionController.js';
import UserController from './app/controllers/UserController.js';
import ProductController from './app/controllers/ProductController.js';
import CategoryController from './app/controllers/CategoryController.js';

import authMiddleware from './app/middlewares/auth.js'

const upload = multer(multerConfig);

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware) // sera chamado por todas as rotas abaixo 
routes.post('/products', upload.single('file'), ProductController.store); // Usando o middleware multer para upload de arquivo
routes.get('/products', ProductController.index);

routes.post('/categories', CategoryController.store); 
routes.get('/categories', CategoryController.index);

export default routes;
