/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-discount-card')
export class AppDiscountCard extends LitElement {
  static get styles() {
    return [
      css`
        .discount-card {
          border: 2px solid lightblue;
          padding: 16px;
          border-radius: 16px;

          display: grid;
          grid-template-areas:
            'symbol . . price'
            'store . .  price';
        }

        data {
          grid-area: price;
          justify-self: flex-end;
        }

        .store {
          grid-area: store;
        }
      `,
    ];
  }

  @property({ type: String })
  store = '';

  @property({ type: String })
  discountName = '';

  @property({ type: Number })
  price: number = 4.9;

  private formatPrice = (price: number) =>
    new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);

  render() {
    return html`
      <div class="discount-card">
        ${this.discountName}
        <span class="store">${this.store}</span>
        <data value=${this.price}>${this.formatPrice(this.price)}</data>
      </div>
    `;
  }
}
