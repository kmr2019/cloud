customElements.define(
  "main-footer",
  class extends HTMLElement {
    static get observedAttributes() {
      //감시자
      // return ['text'];
    }

    constructor() {
      // 생성자
      super();

      this.shadowDOM = this.attachShadow({
        mode: "open"
      });
      render(this.template(), this.shadowDOM);
      console.log("constructed!");
    }

    connectedCallback() {
      console.log("connected!");
    }

    disconnectedCallback() {
      console.log("disconnected!");
    }

    attributeChangedCallback(name, old_value, new_value) {
      console.log(`Attribute: ${name} changed to ${this.text}`);
    }

    adoptedCallback() {
      // 커스텀 엘리먼트가 새로운 다큐먼트로 이동되었을 때 호출
      console.log("adopted!");
    }

    template() {
      return html`
        <link href="normalize.css" />
        <link href="skeleton.css" />

        <style>
          :host {
            margin: 0;
            padding: 0;
          }

          .footer-container {
            width: 100%;
            height: 100px;
          }

          .footer-contents {
            width: 90%;
            height: 100px;
            max-width: 1080px;
            margin: 0 auto;
            border-top: 1px solid #232323;
            text-align: center;
          }

          .footer-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            list-style: none;
          }

          .footer-list > li {
            margin: auto 0;
          }

          .footer-list-font {
            margin: 0;
            font-weight: bold;
            font-size: 1em;
            color: gray;
          }

          @media (max-width: 991px) {
            /* 태블릿 디바이스 (가로 해상도가 992px 보다 작은 화면에 적용) */
            .footer-list > li {
              width: 50%;
            }

            .footer-list-font {
              font-size: 0.9em;
            }
          }

          @media (max-width: 767px) {
            /* 가로모드 모바일 디바이스 (가로 해상도가 768px 보다 작은 화면에 적용) */
            .footer-list > li {
              width: 100%;
            }

            .footer-list-font {
              font-size: 0.8em;
            }
          }

          @media (max-width: 575px) {
            /* 세로모드 모바일 디바이스 (가로 해상도가 576px 보다 작은 화면에 적용) */
            .footer-list {
              font-size: 0.7em;
            }
          }
        </style>

        <div class="footer-container">
          <div class="footer-contents">
            <ul class="footer-list">
              <li><p-wc class="footer-list-font" text="email"></p-wc></li>

              <li><p-wc class="footer-list-font" text="license"></p-wc></li>

              <li><p-wc class="footer-list-font" text="copyright"></p-wc></li>

              <li><p-wc class="footer-list-font" text="logo"></p-wc></li>
            </ul>
          </div>
        </div>
      `;
    }
  }
);
