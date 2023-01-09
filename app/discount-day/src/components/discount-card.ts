/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-discount-card')
export class AppDiscountCard extends LitElement {
  @property({ type: String })
  store = '';

  @property({ type: String })
  discountName = '';

  render() {
    return html`
      <div>
        ${this.discountName}
        <br />
        ${this.store}
      </div>
    `;
  }
}
