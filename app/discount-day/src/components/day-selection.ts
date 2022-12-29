/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import { WeekDayInterface } from '../interfaces/';
import { ActiveDayEvent } from '../events/';

@customElement('app-day-selection')
export class AppDaySelection extends LitElement {
  static get styles() {
    return [
      css`
        .today {
          color: red;
        }
      `,
    ];
  }

  @state()
  private todayWeekIndex = new Date(Date.now()).getDay();

  @state()
  private weekDays: WeekDayInterface[] = [
    { name: 'monday', today: true, weekIndex: 1 },
    { name: 'tuesday', today: false, weekIndex: 2 },
    { name: 'wednesday', today: false, weekIndex: 3 },
    { name: 'thursday', today: false, weekIndex: 4 },
    { name: 'friday', today: false, weekIndex: 5 },
    { name: 'saturday', today: false, weekIndex: 6 },
    { name: 'sunday', today: false, weekIndex: 0 },
  ];

  private _setActiveDay(weekIndex: number): void {
    this.weekDays = this.weekDays.map((weekDay) => {
      if (weekDay.weekIndex === weekIndex) {
        return { ...weekDay, today: true };
      }

      // Reset today state
      return { ...weekDay, today: false };
    });
  }

  constructor() {
    super();
    this._setActiveDay(this.todayWeekIndex);
  }

  render() {
    return html`<ul>
      ${map(
        this.weekDays,
        (weekday, _index) => html`
          <li
            @click=${() => {
              this._setActiveDay(weekday.weekIndex);
              window.dispatchEvent(new ActiveDayEvent(weekday.name));
            }}
            class=${classMap({ today: weekday.today })}
          >
            ${weekday.name}
          </li>
        `
      )}
    </ul>`;
  }
}

