import app from './server';

import DowloadController from './controllers/DowloadController';

const dowloadController = new DowloadController();

app.get('/viewList', dowloadController.listMusics);

app.post('/dowload', dowloadController.dowload);
