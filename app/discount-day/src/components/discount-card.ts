/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

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
            'business . .  price';
        }

        #price {
          grid-area: price;
          align-self: center;
          justify-self: flex-end;
        }

        .name-category {
          text-transform: capitalize;
        }

        .business {
          grid-area: business;
        }
      `,
    ];
  }

  @property({ type: String })
  business = '';

  @property({ type: String })
  category = '';

  @property({ type: String })
  discountName = '';

  @property({ type: Number })
  price: number = 4.9;

  // @property({ type: Object })
  // coords: { x: number; y: number } = { x: 0, y: 0 };

  private formatPrice = (price: number) =>
    new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);

  render() {
    return html`
      <div class="discount-card">
        <span class="name-category">
          ${when(
            this.discountName,
            () => html`${this.discountName}`,
            () => html`${this.category}`
          )}
        </span>

        <span class="business">${this.business}</span>
        <data id="price" value=${this.price}
          >${this.formatPrice(this.price)}</data
        >
      </div>
    `;
  }
}
