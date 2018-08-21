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
        :host {
          --app-grid-columns: 2;
          --app-grid-item-height: 30vmax;
          --app-grid-gutter: 15px;
        }
        .app-grid {
          background-color: #f3f3f3;
          font-size: 0.7em;
        }

        item-card::after {
          content: "";
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
          /* create a layer to only invalidate this layer for :hover */
          transform: translateZ(0);
        }

        item-card:hover::after {
          opacity: 1;
        }
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
