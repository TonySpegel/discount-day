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
        :host {
          --base-gap: 16px;
        }

        ul {
          list-style-type: none;
          padding: 0;
          display: flex;
          gap: var(--base-gap);
          flex-direction: column;
        }
      `,
    ];
  }

  private _apiTask = new Task(
    this,
    () =>
      get<NameDishInterface[]>(
        `http://rhea.lan:3000/day/${this.state.weekDay}`
      ),
    () => [this.state.weekDay]
  );

  @use() state = weekDayState;

  render() {
    return html`
      <app-header></app-header>
      <main>
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
