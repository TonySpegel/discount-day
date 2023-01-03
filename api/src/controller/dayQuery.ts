import { Request, Response } from 'express';
import { currentDay } from '../helper/currentDay.js';
import { BusinessDish } from '../interfaces/business.interface.js';

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

console.log(currentDay());

export const getDish = (request: Request, response: Response) => {
  const day = request.params.day || currentDay();
  console.log(day);

  pool.query<BusinessDish>(
    dayQuery(day),
    [],
    (error: any, results: { rows: BusinessDish[] }) => {
      if (error) {
        return console.error('Error executing query', error.stack)
      }

      response.status(200).json(results.rows);
    }
  );
};
