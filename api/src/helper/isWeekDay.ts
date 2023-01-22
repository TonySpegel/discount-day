/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { ALL_DAYS, WeekDayType } from '../../../shared/types/weekday.type.js';

export const isWeekDay = (day: WeekDayType): day is WeekDayType => {
  return ALL_DAYS.includes(day);
};
