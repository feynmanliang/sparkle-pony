import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * @customElement
 * @polymer
 */

class FeaturedItem extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          height: 420px;
          position: relative;
          font-size: 0.8em;
          padding-top: 40px;
        }

        .pic {
          width: 40%;
          height: 100%;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          transition: opacity 0.5s;
          display: inline-block;
        }

        .author img {
          border-radius: 50%;
          width: 30px;
          height: 30px;
          vertical-align: middle;
          margin-right: 10px;
        }

        .author {
          font-size: 11px;
        }

        .title {
          font-family: 'Abril Fatface', cursive;
          color: var(--paper-teal-900);
          font-size: 7em;
          line-height: 0.85;
          margin-top: 2rem;
          margin-bottom: 4rem;
        }

        .detail {
          position: absolute;
          top: 20px;
          right: 40px;
          width: 60%;
        }

        .description {
          float: right;
          width: 300px;
          position: relative;
        }

        .description p::before {
          background-color: var(--paper-cyan-a200);
          content: "";
          width: 100px;
          height: 6px;
          position: absolute;
          top: -6px;
        }

        .price {
          position: absolute;
          top: 0px;
          right: 0px;
          background-color: var(--paper-pink-50);
          padding: 20px;
          font-size: 1.2em;
          font-weight: bold;
        }
      </style>

      <div class="pic" style="background-image: url([[item.imageUrl]]);"></div>
      <div class="detail">
        <div class="title">[[item.title]]</div>

        <div class="description">
          <p class="quote">[[item.quote]]</p>
          <div class="author">
            <img src="[[item.storeAvatarUrl]]" />
            [[item.storeName]]
          </div>
        </div>
      </div>
      <span class="price">[[item.price]]</span>
    `;
  }

  static get properties() {
    return {
      item: {
        type: Object
      }
    };
  }

}

window.customElements.define('featured-item', FeaturedItem);