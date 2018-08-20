import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class DetailView extends PolymerElement {
  static get template() {
    return html`
      [[name]]
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

window.customElements.define('detail-view', DetailView);
