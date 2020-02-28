const Router = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post('/box', BoxController.store);
routes.get('/boxes/:id', BoxController.show);
routes.get('/dashboard', BoxController.index)

routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);

module.exports =  routes;

