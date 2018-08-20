import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class ItemCard extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>[[item.title]]!</h2>
    `;
  }
  static get properties() {
    return {
      item: {
        type: Object,
      }
    };
  }
}

window.customElements.define('item-card', ItemCard);
