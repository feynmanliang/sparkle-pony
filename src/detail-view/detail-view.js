import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class DetailView extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          font-size: 0.8em;
        }

        .pic {
          display: inline-block;
          flex-basis: 400px;
        }

        .pic img {
          max-width: 400px;
          float: right;
        }

        .details {
          display: inline-block;
          flex-basis: 400px;
        }

        .title {
          font-family: 'Abril Fatface', cursive;
          color: var(--paper-teal-900);
          font-size: 3em;
          line-height: 0.85;
          margin-bottom: 2rem;
        }

        .buy-controls {
          @apply --layout-horizontal;
          @apply --layout-center-center;
        }

        .spacer {
          content: '';
          height: 1px;
          width: 100%;
          background-color: #eee;
          order: 2;
        }

        .author .storeName {
          font-weight: 700;
          margin: 10px 0px;
        }
      </style>

      <div class="pic">
        <img src="[[item.imageUrl]]" alt="Image for [[item.title]]" />
      </div>
      <div class="details">
        <div class="title">
          [[item.title]]
        </div>
        <div class="description">
          [[item.description]]
        </div>
        <div class="buy-controls">
          <select>
            <option value="1">Quantity 1</option>
            <option value="2">Quantity 2</option>
            <option value="3">Quantity 3</option>
            <option value="4">Quantity 4</option>
            <option value="5">Quantity 5</option>
          </select>
          <paper-icon-button icon="shopping-cart" aria-label="Add to cart"></paper-icon-button>
        </div>
        <div class="spacer"></div>
        <div class="author">
          <div class="storeName">
            [[item.storeName]]
          </div>
          <div class="storeDescription">
            [[item.storeDescription]]
          </div>
        </div>
      </div>
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
