/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { weekDay } from '../types/';

export class ActiveDayEvent extends Event {
  static readonly eventName = 'active-day-event' as const;

  constructor(public activeDay: weekDay) {
    super(ActiveDayEvent.eventName, {
      bubbles: true,
      cancelable: false,
      composed: true,
    });
  }
}
