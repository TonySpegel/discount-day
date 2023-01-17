/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import { use } from 'lit-shared-state';

import { currentDay } from '../../../../shared/helper/currentDay.js';
import { WeekDayType } from '../../../../shared/types/weekday.type';
import { WeekDayInterface } from '../interfaces/';
import { dayState, WeekDayState } from '../states/week-day.state';

import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';

@customElement('app-day-selection')
export class AppDaySelection extends LitElement {
  static get styles() {
    return [
      css`
        ol {
          display: grid;
          gap: 8px;
          grid-template-columns: repeat(3, 1fr);

          padding: 0;

          list-style-type: none;
          text-transform: capitalize;
        }

        .day {
          display: inline-block;
          box-sizing: border-box;

          border-radius: 8px;
          border: 1px solid var(--sl-color-purple-800);
          padding: 8px 16px;
          width: 100%;

          text-align: center;
        }

        .selected {
          background-color: var(--sl-color-purple-800);
          color: white;
        }
      `,
    ];
  }

  @use() day: WeekDayState = dayState;

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
    this._selectDay(this.day.weekDay);
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

  /**
   * Update the selected day in:
   * WeekDayState (shared), <day-selection>, URL-param 'day'
   */
  private _updateDay = (day: WeekDayType): void => {
    this.day.weekDay = day;
    this._selectDay(day);
    this._updateUrlParam(day);
  };

  render() {
    return html`
      <sl-dropdown>
        <sl-button slot="trigger" caret>Select a day</sl-button>
        <sl-menu>
          ${map(
            this.weekDays,
            (weekday) => html`
              <sl-menu-item
                @click=${() => this._updateDay(weekday.name)}
                class="${classMap({ selected: weekday.selected })}"
                value=${weekday.name}
                >${weekday.name}</sl-menu-item
              >
            `
          )}
        </sl-menu>
      </sl-dropdown>

      <span>or </span>
      <span @click=${() => this._updateDay(currentDay())}>today</span>
    `;
  }
}

/**
 * 
<ol>
  ${map(
    this.weekDays,
    (weekday) => html`
      <li>
        <a
          @click=${() => this._updateDay(weekday.name)}
          class="day ${classMap({ selected: weekday.selected })}"
          >${weekday.name}</a
        >
      </li>
    `
  )}
</ol>
 */
