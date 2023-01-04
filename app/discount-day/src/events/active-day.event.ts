/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { WeekDayType } from '../../../../shared/types/weekday.type.js';

export class ActiveDayEvent extends Event {
  static readonly eventName = 'active-day-event' as const;

  constructor(public activeDay: WeekDayType) {
    super(ActiveDayEvent.eventName, {
      bubbles: true,
      cancelable: false,
      composed: true,
    });
  }
}
