import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

import '../catalog-view/catalog-view.js';

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
      <h2>Hello [[prop1]]!</h2>

      <app-location route="{{route}}"></app-location>
      <app-route
                    route="{{route}}"
                    pattern="/:page"
                    data="{{routeData}}"
                    tail="{{subroute}}">
      </app-route>

      <iron-pages selected="[[routeData.page]]" attr-for-selected="name" fallback-selection="tops">
        <catalog-view name="tops" route="[[subroute]]">a</catalog-view>
        <catalog-view name="bottoms" route="[[subroute]]">b</catalog-view>
        <catalog-view name="accesories" route="[[subroute]]">c</catalog-view>
      </iron-pages>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'sparklepony-app'
      }
    };
  }
}

window.customElements.define('sparklepony-app-shell', SparkleponyAppShell);
