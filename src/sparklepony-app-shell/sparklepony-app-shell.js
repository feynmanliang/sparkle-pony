import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-styles/typography.js';
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

        .navItem {
          width: 88px;
        }

        .leftItem [icon] {
          display: none;
        }

        .main-title{
          @apply --layout-flex;
          @apply --layout-horizontal;
          @apply --layout-center-justified;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--paper-teal-900);
        }

        paper-tabs {
          background-color: rgb(255, 255, 255, 0.95);
          --paper-tabs-selection-bar-color: var(--paper-cyan-a200);
        }

        paper-tab {
          --paper-tab-ink: var(--paper-cyan-a200);
        }

        paper-tab a {
          @apply --layout-vertical;
          @apply --layout-center;
          @apply --layout-center-justified;
          text-decoration: none;
          text-transform: uppercase;
          font-weight: 500;
          color: #7c7c7c;
        }

        app-header:not([shadow]) {
          border-bottom: 1px solid #ddd;
        }
      </style>

      <app-location route="{{route}}" use-hash-as-path></app-location>
      <app-route route="{{route}}"
                 pattern=":section"
                 data="{{sectionData}}"
                 tail="{{subRoute}}">
      </app-route>
      <app-route route="{{subRoute}}"
                 pattern="/:id"
                 data="{{idData}}"
                 active="{{onDetailPage}}">
      </app-route>

      <app-header-layout>
        <app-header slot="header" effects="waterfall" condenses reveals>
          <app-toolbar>
            <div class="navItem leftItem">
              <paper-icon-button icon="menu" drawer-toggle alt="Toggle navigation menu"></paper-icon-button>
            </div>
            <div class="main-title">Sparkle Pony</div>
            <div class="navItem">
              <paper-icon-button icon="shopping-cart" aria-label="Shopping cart"></paper-icon-button>
              <paper-icon-button icon="more-vert" aria-label="More options"></paper-icon-button>
            </div>
          </app-toolbar>
          <paper-tabs selected="[[selectedTab]]"
                      fallback-selection="0"
                      scrollable
                      hide-scroll-buttons
                      sticky>
            <dom-repeat items="{{sections}}">
              <template>
                <paper-tab>
                  <a href="#[[item]]">[[item]]</a>
                </paper-tab>
              </template>
            </dom-repeat>
          </paper-tabs>
        </app-header>


        <iron-pages selected="[[page]]" attr-for-selected="name" fallback-selection="catalog">
          <catalog-view name="catalog"
                        section="[[sectionData.section]]"
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
            'accesories',
            'other stuff',
          ]
        },
      },
      items: {
        type: Array,
      },
      page: {
        type: String,
        computed: '_computePage(onDetailPage)',
        reflectToAttribute: true,
      },
      selectedTab: {
        type: Number,
        computed: '_computeSelectedTab(sections, sectionData.section)',
      },
      onDetailPage: Boolean,
      featuredItems: {
        type: Array,
      }
    }
  }

  ready() {
    super.ready();
    if (!this.route.path) {
      this.set('route.path', 'tops');
    }
  }

  _getDetailItem(items, id) {
    if (items) {
      return items[id];
    }
  }

  _computePage(onDetailPage) {
    return onDetailPage ? 'detail' : 'catalog';
  }

  _computeSelectedTab(sections, section) {
    return sections.indexOf(section);
  }
}

window.customElements.define('sparklepony-app-shell', SparkleponyAppShell);
