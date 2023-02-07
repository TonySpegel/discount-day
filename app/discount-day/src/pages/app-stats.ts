import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Task } from '@lit-labs/task';
import { get } from '../helper/fetch.js';

@customElement('app-stats')
export class AppStats extends LitElement {
  @state()
  private response: string = '';

  private _apiTask = new Task(
    this,
    () => get(`${import.meta.env.VITE_API_TEST}`),
    () => [this.response]
  );

  constructor() {
    super();
    console.log(import.meta.env.VITE_API_TEST);
  }

  render() {
    return html`
      <app-header></app-header>
      <main>
        ${this._apiTask.render({
          pending: () => html`<sl-spinner></sl-spinner>`,
          error: () => html`error`,
          complete: (response) => html`${response}`,
        })}
        <app-day-selection></app-day-selection>
      </main>
    `;
  }
}
