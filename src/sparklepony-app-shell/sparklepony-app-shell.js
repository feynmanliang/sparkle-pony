import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-tabs/paper-tabs.js';

import '../catalog-view/catalog-view.js';
import '../detail-view/detail-view.js';

/**
 * @customElement
 * @polymer
 */
class SparkleponyAppShell extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <app-location route="{{route}}"></app-location>
      <app-route route="{{route}}"
                 pattern="/:page"
                 data="{{routeData}}"
                 tail="{{subRoute}}">
      </app-route>
      <app-route route="{{subRoute}}"
                 pattern="/:id"
                 data="{{idData}}">
      </app-route>

      <app-header-layout>
        <app-header reveals>
          <app-toolbar>
            <div class="navItem leftItem">
              <paper-icon-button icon="menu" drawer-toggle alt="Toggle navigation menu"></paper-icon-button>
            </div>
            <div class="spacer">
              <h1>Sparkle Pony</h1>
            </div>
            <div class="navItem">
              <paper-icon-button icon="shopping-cart" aria-label="Shopping cart"></paper-icon-button>
              <paper-icon-button icon="more-vert" aria-label="More options"></paper-icon-button>
            </div>
          </app-toolbar>
          <paper-tabs>
            <dom-repeat items="{{sections}}">
              <template>
                <paper-tab>
                  <a href="#[[item]]">[[item]]</a>
                </paper-tab>
              </template>
            </dom-repeat>
          </paper-tabs>
        </app-header>


        <iron-pages selected="[[routeData.page]]" attr-for-selected="name" fallback-selection="catalog">
          <catalog-view name="catalog"
                        route="[[subRoute]]"
                        items="[[items]]"
                        featured-item="[[featuredItems.0]]"></catalog-view>
          <detail-view name="detail"
                       route="[[subRoute]]"
                       item="[[_getDetailItem(items, idData.id)]]">
          </detail-view>
        </iron-pages>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      sections: {
        type: Array,
        value() {
          return [
            'tops',
            'bottoms',
            'accesories'
          ]
        },
      },
      items: {
        type: Array,
      },
      featuredItems: {
        type: Array,
      }
    }
  }

  _getDetailItem(items, id) {
    if (items) {
      return items[id];
    }
  }
}

window.customElements.define('sparklepony-app-shell', SparkleponyAppShell);
