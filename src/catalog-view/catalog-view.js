import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class CatalogView extends PolymerElement {
  static get template() {
    return html`
      [[name]]
      [[route.path]]
    `;
  }
  static get properties() {
    return {
      name: {
        type: String
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  constructor() {
    super();
  }
}

window.customElements.define('catalog-view', CatalogView);
