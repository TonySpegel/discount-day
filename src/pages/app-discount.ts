/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { Task } from '@lit-labs/task';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ActiveDayEvent } from '../events/active-day.event';
import { NameDishInterface } from '../interfaces/name-dish.interface';
import { styles } from '../styles/shared-styles';
import { weekDay } from '../types/weekday.type';

@customElement('app-discount')
export class AppDiscount extends LitElement {
  private dishes: NameDishInterface[] = [];
  private day: weekDay = 'monday';

  private _apiTask = new Task(
    this,
    () =>
      fetch(`http://localhost:3000/day`).then((response) => response.json()),
    () => this.dishes
  );

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    window.addEventListener(ActiveDayEvent.eventName, (e) => {
      this.day = (e as ActiveDayEvent).activeDay;
      console.log(this.day);
    });
  }

  render() {
    return html`
      <app-header></app-header>
      <main>
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

