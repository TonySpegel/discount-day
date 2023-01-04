/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { ActiveDayEvent } from '../events/active-day.event.js';
import { NameDishInterface } from '../interfaces/name-dish.interface';
import { Task } from '@lit-labs/task';
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { get } from '../helper/fetch.js';
import { parseUrlParam } from '../helper/parse-url.js';
import { styles } from '../styles/shared-styles';
import { WeekDayType } from '../../../../shared/types/weekday.type';
import { currentDay } from '../../../../shared/helper/currentDay.js';
import { isWeekDay } from '../../../../shared/helper/isWeekDay.js';


@customElement('app-discount')
export class AppDiscount extends LitElement {
  @state()
  private day: WeekDayType;

  private _apiTask = new Task(
    this,
    () => get<NameDishInterface[]>(`http://localhost:3000/day/${this.day}`),
    () => [this.day]
  );

  static get styles() {
    return [
      styles,
      css`
        td {
          border: 1px solid;
        }
      `,
    ];
  }

  constructor() {
    super();

    window.addEventListener(ActiveDayEvent.eventName, (e) => {
      this.day = (e as ActiveDayEvent).activeDay;
      console.log(this.day);
    });

    const urlDayParam = parseUrlParam<WeekDayType>('day');
    // When the day param is defined and its value is a valid day use this one, if not use the current day
    this.day =
      urlDayParam && isWeekDay(urlDayParam) ? urlDayParam : currentDay();
  }

  render() {
    return html`
      <app-header></app-header>
      <main>
        Tag: ${this.day}
        ${this._apiTask.render({
          pending: () => html`<sl-spinner></sl-spinner>`,
          error: () => html`error`,
          complete: (discounts: NameDishInterface[]) =>
            html`<table>
              ${discounts.map(
                (discount) =>
                  html`<tr>
                    <td>${discount.name}</td>
                    <td>${discount.dish_name}</td>
                  </tr>`
              )}
            </table>`,
        })}
        <app-day-selection></app-day-selection>
      </main>
    `;
  }
}

