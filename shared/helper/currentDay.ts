/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { WeekDayType } from '../types/weekday.type';

export const currentDay = (): WeekDayType =>
  new Date(Date.now())
    .toLocaleDateString('en-US', { weekday: 'long' })
    .toLowerCase() as WeekDayType;
