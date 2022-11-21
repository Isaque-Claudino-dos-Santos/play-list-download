import express, { Express } from 'express';
import { APP_PORT } from './ts-env';
import bodyParser from 'body-parser';
const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(APP_PORT, () => {
  console.log('Open host in' + `http://localhost:${APP_PORT}`);
});

export default app;
