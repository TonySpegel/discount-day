/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { BusinessDish } from '../interfaces/business.interface.js';
import { Request, Response } from 'express';
import { WeekDayType } from '../types/weekday.type.js';
import { currentDay } from '../helper/currentDay.js';
import { isWeekDay } from '../helper/isWeekDay.js';

import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  host: 'localhost',
  database: 'lwd',
  user: 'postgres',
  password: 'postgres',
  port: 5432,
});

const dayQueryNew = (day: string): string => `
  SELECT
      business_2.name AS business,
      business_2.coordinates AS coords,
      category.name as category,
      discount_list.price AS price
  FROM discount_week AS dw
      INNER JOIN business_2
      ON business_2.business_id = dw.business_id
      INNER JOIN discount_list
      ON discount_list.discount_id = dw.discount_${day}
      INNER JOIN category
      ON discount_list.category_id = category.category_id
`;

export const getDishNew = (request: Request, response: Response) => {
  const { weekDay } = request.params;
  const day = isWeekDay(weekDay as WeekDayType) ? weekDay : currentDay();

  pool.query<BusinessDish>(
    dayQueryNew(day),
    [],
    (error: any, results: { rows: BusinessDish[] }) => {
      if (error) {
        return console.error('Error executing query', error.stack);
      }

      response.status(200).json(results.rows);
    }
  );
};
