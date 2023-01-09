/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { NameDishInterface } from '../interfaces/name-dish.interface';
import { Task } from '@lit-labs/task';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { get } from '../helper/fetch.js';
import { styles } from '../styles/shared-styles';
import { weekDayState } from '../states/week-day.state';
import { use } from 'lit-shared-state';

@customElement('app-discount')
export class AppDiscount extends LitElement {
  static get styles() {
    return [
      styles,
      css`
        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          border: 2px solid lightblue;
          margin-bottom: 20px;
        }
      `,
    ];
  }

  private _apiTask = new Task(
    this,
    () =>
      get<NameDishInterface[]>(
        `http://localhost:3000/day/${this.state.weekDay}`
      ),
    () => [this.state.weekDay]
  );

  @use() state = weekDayState;

  render() {
    return html`
      <app-header></app-header>
      <main>
        Tag: ${this.state.weekDay}
        ${this._apiTask.render({
          pending: () => html`<sl-spinner></sl-spinner>`,
          error: () => html`error`,
          complete: (discounts: NameDishInterface[]) =>
            html`<ul>
              ${discounts.map(
                (discount) =>
                  html`
                    <li>
                      <app-discount-card
                        store=${discount.name}
                        discountName=${discount.dish_name}
                      ></app-discount-card>
                    </li>
                  `
              )}
            </ul>`,
        })}
        <app-day-selection></app-day-selection>
      </main>
    `;
  }
}
