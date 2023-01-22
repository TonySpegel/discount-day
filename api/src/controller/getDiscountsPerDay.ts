/**
 * Copyright © 2022/2023 Tony Spegel
 */

import dotenv from 'dotenv';
import path from 'path';
import pg from 'pg';
import { Request, Response } from 'express';

import { DiscountCardInterface } from '../interfaces/business.interface';
import { WeekDayType } from '../types/weekday.type.js';
import { currentDay } from '../helper/currentDay.js';
import { isWeekDay } from '../helper/isWeekDay.js';
import { fileURLToPath } from 'url';

const { Pool } = pg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = dotenv.config({ path: path.join(__dirname, '..', '.env') });

const pool = new Pool({
  host: env.parsed?.PG_HOST || 'default',
  database: env.parsed?.PG_DATABASE || 'default',
  user: env.parsed?.PG_USER || 'default',
  password: env.parsed?.PG_PASSWORD || 'default',
  port: Number(env.parsed?.PG_PORT) || 1234,
});

const dayQuery = (day: string): string => `
  SELECT
      business_2.name AS business,
      business_2.coordinates AS coords,
      category.name AS category,
      discount_list.name AS name,
      discount_list.price AS price,
      discount_list.discount_id AS ID
  FROM business_weekday_discount AS bwd
      INNER JOIN business_2
      ON business_2.business_id = bwd.business_id
      INNER JOIN discount_list
      ON discount_list.discount_id = bwd.discount_id
    INNER JOIN category
      ON discount_list.category_id = category.category_id
  WHERE bwd.week_day = '${day}'
  ORDER BY price
`;

/**
 * Returns rows of DiscountCardInterface
 */
export const getDiscountsPerDay = (
  request: Request,
  response: Response<DiscountCardInterface[]>
) => {
  const { weekDay } = request.params;
  const day = isWeekDay(weekDay as WeekDayType) ? weekDay : currentDay();

  pool?.query<DiscountCardInterface>(
    dayQuery(day),
    [],
    (error: any, results: { rows: DiscountCardInterface[] }) => {
      if (error) {
        return console.error('Error executing query', error.stack);
      }

      response.status(200).json(results.rows);
    }
  );
};
