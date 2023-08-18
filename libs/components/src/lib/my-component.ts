import {LitElement, html, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';

// Must use ?inline because ?inline prevents vite from inserting the styles in
// a <style> the <head>
import styles from './my-component.scss?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-component')
export class MyComponent extends LitElement {
  // This is safe to use if the sass styles are compiled statically and without
  // user input.
  static override styles = unsafeCSS(styles);

  /**
   * Copy for the read the docs hint.
   */
  @property()
  hint = 'Some hint';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  override render() {
    return html`
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="hint">${this.hint}</p>
    `;
  }

  private _onClick() {
    this.count++;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-component': MyComponent;
  }
}
