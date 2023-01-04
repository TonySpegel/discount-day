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

const dayQuery = (day: string): string => `
  SELECT
	  business.name, 
	  dish.name as dish_name
  FROM business
  INNER JOIN dish
  ON dish.dish_id = business.discount_dish_${day}
`;

export const getDish = (request: Request, response: Response) => {
  const { weekDay } = request.params;
  const day = isWeekDay(weekDay as WeekDayType) ? weekDay : currentDay();

  pool.query<BusinessDish>(
    dayQuery(day),
    [],
    (error: any, results: { rows: BusinessDish[] }) => {
      if (error) {
        return console.error('Error executing query', error.stack);
      }

      response.status(200).json(results.rows);
    }
  );
};
