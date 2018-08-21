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
          display: flex;
          background-color: white;
          height: 100%;
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
