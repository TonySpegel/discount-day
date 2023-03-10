/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { Task } from '@lit-labs/task';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { use } from 'lit-shared-state';
import { version } from '../../package.json';

import { DiscountCardInterface } from '../../../../shared/interfaces/discount-card.interface';
import { dayState, WeekDayState } from '../states/week-day.state';
import { get } from '../helper/fetch.js';
import { styles } from '../styles/shared-styles';

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
          display: flex;
          flex-direction: column;
          gap: var(--base-gap);
          padding: 0;
          list-style-type: none;
        }

        #version {
          position: fixed;
          bottom: 32px;
          left: 32px;
        }
      `,
    ];
  }

  private _apiTask = new Task(
    this,
    () =>
      get<DiscountCardInterface[]>(
        `http://localhost:3000/day/${this.state.weekDay}`
      ),
    () => [this.state.weekDay]
  );

  @use() state: WeekDayState = dayState;

  constructor() {
    super();
    const endPoint = import.meta.env.VITE_SCRR;
    console.log({ endPoint });
  }

  render() {
    return html`
      <app-header></app-header>
      <main>
        ${this._apiTask.render({
          pending: () => html`<sl-spinner></sl-spinner>`,
          error: () => html`error`,
          complete: (discounts: DiscountCardInterface[]) =>
            html`<ul>
              ${discounts.map(
                (discount) =>
                  html`
                    <li>
                      <app-discount-card
                        discountName=${discount.name}
                        business=${discount.business}
                        category=${discount.category}
                        price=${discount.price}
                      ></app-discount-card>
                    </li>
                  `
              )}
            </ul>`,
        })}
        <app-day-selection></app-day-selection>
        <span id="version">${version}</span>
      </main>
    `;
  }
}
