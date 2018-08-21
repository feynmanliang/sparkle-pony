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
          @apply --layout-vertical;
          background-color: white;
          height: 100%;

          @apply --layout-vertical;
          @apply --layout-center-center;
          position: relative;
          text-align: center;
          width: 100%;
          height: 100%;
          --paper-icon-button-ink-color: #31f0ef;
          color: #111;
        }

        .pic {
          width: 50%;
          height: 50%;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          transition: opacity 0.5s;
          margin-top: 40px;
        }

        .author {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          font-size: 11px;
        }

        .author img {
          display: inline;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }

        .link {
          font-family: 'Abril Fatface', cursive;
          color: var(--paper-teal-900);
          font-size: 2em;
        }

        .price {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 1em;
          font-weight: bold;
        }
      </style>
      <div class="pic" style="background-image: url([[item.imageUrl]]);"></div>
      <div class="link">[[item.title]]</div>
      <span class="price">[[item.price]]</span>

      <div class="author">
        <img src="[[item.storeAvatarUrl]]" />
        [[item.storeName]]
      </div>
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
