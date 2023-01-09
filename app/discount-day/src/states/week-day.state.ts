/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { WeekDayType } from '../../../../shared/types/weekday.type';
import { currentDay } from '../../../../shared/helper/currentDay.js';
import { isWeekDay } from '../../../../shared/helper/isWeekDay.js';
import { parseUrlParam } from '../helper/parse-url.js';
import { state } from 'lit-shared-state';

@state()
class WeekDayState {
  public urlDayParam = parseUrlParam<WeekDayType>('day');

  public weekDay: WeekDayType =
    this.urlDayParam && isWeekDay(this.urlDayParam)
      ? this.urlDayParam
      : currentDay();
}

export const dayState = new WeekDayState();
