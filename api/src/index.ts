import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Express } from 'express';
import { BusinessDish } from './interfaces/business.interface.js';
import { getDish } from './controller/dayQuery.js';

const app: Express = express();
const port = 3000;

const allowedOrigins = ['http://localhost:3001'];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get<BusinessDish>('/day', getDish);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
