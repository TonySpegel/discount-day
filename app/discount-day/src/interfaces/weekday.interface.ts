/**
 * Copyright © 2022/2023 Tony Spegel
 */


import { WeekDayType } from '../../../../shared/types/weekday.type';

export interface WeekDayInterface {
  name: WeekDayType;
  selected: boolean;
  weekIndex: number;
}
