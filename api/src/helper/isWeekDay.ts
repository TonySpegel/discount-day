/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { ALL_DAYS  } from '../types/weekday.type.js';
import { WeekDayType  } from '../types/weekday.type.js';

export const isWeekDay = (day: WeekDayType): day is WeekDayType => {
  return ALL_DAYS.includes(day);
};
