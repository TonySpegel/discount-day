/**
 * Copyright © 2022/2023 Tony Spegel
 */

import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import helmet from 'helmet';
import path from 'path';
import type { ParamsDictionary } from 'express-serve-static-core';
import { fileURLToPath } from 'url';

import { DiscountCardInterface } from '../../shared/interfaces/discount-card.interface';
import { getDiscountsPerDay } from './controller/getDiscountsPerDay.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = dotenv.config({ path: __dirname + '/.env' });

const app: Express = express();
const port = env.parsed?.PORT || 1234;
const allowedOrigins = env.parsed?.ALLOWED_ORIGINS.split(',');

app.use(helmet());
app.use(cors({ origin: allowedOrigins }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get<ParamsDictionary, DiscountCardInterface[]>('/day', getDiscountsPerDay); // current day
app.get<ParamsDictionary, DiscountCardInterface[]>(
  '/day/:weekDay',
  getDiscountsPerDay
); // /?day=friday

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
