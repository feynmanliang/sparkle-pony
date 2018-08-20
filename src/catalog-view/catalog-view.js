import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-grid/app-grid-style.js'

import '../item-card/item-card.js'
import '../featured-item/featured-item.js'

/**
 * @customElement
 * @polymer
 */
class CatalogView extends PolymerElement {
  static get template() {
    return html`
      <style include="app-grid-style">
      </style>

      <featured-item item="[[featuredItem]]"></featured-item>

      <div class="app-grid">
        <dom-repeat items="[[items]]">
          <template>
            <a href$="detail/[[item.id]]" class="item" aria-label$="More info about [[item.title]]">
              <item-card item="[[item]]"></item-card>
            </a>
          </template>
        </dom-repeat>
      </div>
    `;
  }

  static get properties() {
    return {
      items: {
        type: Array,
      },
      featuredItem: {
        type: Object,
      },
    };
  }
}

window.customElements.define('catalog-view', CatalogView);
