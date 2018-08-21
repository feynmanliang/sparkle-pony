import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class DetailView extends PolymerElement {
  static get template() {
    return html`
      Details for [[item.title]]
    `;
  }

  static get properties() {
    return {
      item: {
        item: Object,
      },
    };
  }
}

window.customElements.define('detail-view', DetailView);
