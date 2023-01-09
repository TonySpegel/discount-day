/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import { WeekDayInterface } from '../interfaces/';
import { WeekDayType } from '../../../../shared/types/weekday.type';
import { weekDayState } from '../states/week-day.state';
import { use } from 'lit-shared-state';

@customElement('app-day-selection')
export class AppDaySelection extends LitElement {
  static get styles() {
    return [
      css`
        .selected {
          color: red;
        }
      `,
    ];
  }

  @use() WeekDayState = weekDayState;

  @state()
  private weekDays: WeekDayInterface[] = [
    { name: 'monday', selected: false, weekIndex: 1 },
    { name: 'tuesday', selected: false, weekIndex: 2 },
    { name: 'wednesday', selected: false, weekIndex: 3 },
    { name: 'thursday', selected: false, weekIndex: 4 },
    { name: 'friday', selected: false, weekIndex: 5 },
    { name: 'saturday', selected: false, weekIndex: 6 },
    { name: 'sunday', selected: false, weekIndex: 0 },
  ];

  constructor() {
    super();
    this._selectDay(this.WeekDayState.weekDay);
  }

  private _selectDay = (day: WeekDayType): void => {
    this.weekDays = this.weekDays.map((weekDay) => {
      if (weekDay.name === day) {
        return { ...weekDay, selected: true };
      }

      return { ...weekDay, selected: false };
    });
  };

  private _updateUrlParam = (day: WeekDayType): void => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('day', day);

    const newRelativePathQuery = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    history.pushState(null, '', newRelativePathQuery);
  };

  render() {
    return html`<ul>
      ${map(
        this.weekDays,
        (weekday, _index) => html`
          <li
            @click=${() => {
              this.WeekDayState.weekDay = weekday.name;
              this._selectDay(weekday.name);
              this._updateUrlParam(weekday.name);
            }}
            class=${classMap({ selected: weekday.selected })}
          >
            ${weekday.name}
          </li>
        `
      )}
    </ul>`;
  }
}
