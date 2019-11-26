customElements.define(
  "main-header",
  class extends HTMLElement {
    static get observedAttributes() {}

    constructor() {
      super();

      this.shadowDOM = this.attachShadow({
        mode: "open"
      });
      render(this.template(), this.shadowDOM);
      console.log("constructed!");
    }

    connectedCallback() {
      let header_mobile_button = this.shadowDOM.querySelector(
        ".header-mobile-button"
      );
      let header_mobile_navi_container = this.shadowDOM.querySelector(
        ".header-mobile-navi-container"
      );

      let header_mobile_navi_box = this.shadowDOM.querySelector(
        ".header-mobile-navi-box"
      );

      let count = 1;

      header_mobile_button.onclick = () => {
        if (count % 2 != 0) {
          header_mobile_navi_container.style.display = "block";
          header_mobile_navi_box.style.animation = "navi-down 1s forwards";
        } else {
          header_mobile_navi_container.style.display = "none";
        }
        count++;
      };

      console.log("connected!");
    }

    disconnectedCallback() {
      console.log("disconnected!");
    }

    attributeChangedCallback(name, old_value, new_value) {
      render(this.template(), this.shadowDOM);
      console.log(`Attribute: ${name} changed to ${this.text}`);
    }

    adoptedCallback() {
      // 커스텀 엘리먼트가 새로운 다큐먼트로 이동되었을 때 호출
      console.log("adopted!");
    }
    ad222optedCallback() {
      // 커스텀 엘리먼트가 새로운 다큐먼트로 이동되었을 때 호출
      console.log("adopted!");
    }

    template() {
      return html`
        <link href="normalize.css" />
        <link href="skeleton.css" />

        <style>
          :host {
            --background: #4c4c4c;
            --text-color: white;
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --background: #4b4b4b;
            }
          }

          .header-container {
            display: flex;
            width: 100%;
            height: 60px;
            margin-top: 10px;
            padding: 10px;
          }

          .header-contents {
            width: 90%;
            height: auto;
            margin: auto;
          }

          .header-logo-box {
            float: left;
            width: 100px;
            height: 60px;
          }

          .header-logo-box > a {
            width: 100%;
            height: 60px;
          }

          .header-logo-img {
            width: 100%;
            height: 60px;
          }

          .header-navi-box {
            display: none;
          }

          .header-mobile-button-box {
            display: flex;
            float: right;
            width: auto;
            height: 60px;
          }

          .header-mobile-button {
            width: 40px;
            height: 40px;
            margin: auto 0;
            padding: 0;
            background: #eaeaea;
          }

          .header-mobile-navi-container {
            display: none;
            overflow: hidden;
            position: absolute;
            z-index: 10;
            width: 100%;
            height: 180px;
          }

          .header-mobile-navi-box {
            position: absolute;
            z-index: 20;
            width: 100%;
            height: 180px;
            margin: 0;
            padding: 0;
            list-style: none;
          }

          .header-mobile-navi-box > a {
            text-decoration: none;
          }

          .header-mobile-navi-list {
            display: flex;
            width: 100%;
            height: 45px;
            border-bottom: 1px solid gray;
            box-sizing: border-box;
            background: black;
          }

          .header-mobile-navi-list > p-wc {
            margin: auto;
            font-weight: bold;
            font-size: 0.8em;
            color: white;
          }

          @keyframes navi-down {
            0% {
              top: -100%;
            }
            100% {
              top: 0%;
            }
          }

          @media (min-width: 576px) {
            .header-mobile-button-box,
            .header-mobile_navi-container,
            .header-mobile-navi-box {
              display: none;
            }
            .header-contents {
              max-width: 1080px;
            }

            .header-navi-box {
              display: block;
              float: right;
              width: auto;
              height: 100%;
            }

            .header-navi-list {
              width: auto;
              margin: 0px;
              list-style: none;
            }

            .header-navi-list-item {
              display: inline-block;
              width: 90px;
              height: 100%;
            }

            .header-navi-list-item > p-wc {
              margin: 0;
              font-weight: bold;
              font-size: 1em;
              line-height: 60px;
              color: var(--text-color);
              text-align: center;
            }

            .header-navi-list-item > p-wc:hover {
              animation: navi-ani 0.4s forwards;
            }

            @keyframes navi-ani {
              from {
                color: white;
              }
              to {
                color: gray;
              }
            }
          }

          @media (min-width: 768px) {
            .header-navi-list-item {
              width: 120px;
            }
          }

          @media (min-width: 992px) {
          }
        </style>

        <div class="header-container">
          <div class="header-contents">
            <div class="header-logo-box">
              <a href="index.html">
                <img
                  src="images/logo.png"
                  class="header-logo-img"
                  alt="logo-img"
                />
              </a>
            </div>

            <div class="header-mobile-button-box">
              <button class="header-mobile-button"></button>
            </div>

            <div class="header-navi-box">
              <ul class="header-navi-list">
                <a>
                  <li class="header-navi-list-item">
                    <p-wc text="introduce"></p-wc>
                  </li>
                </a>
                <a>
                  <li class="header-navi-list-item">
                    <p-wc text="service"></p-wc>
                  </li>
                </a>
                <a href="githubCloud_main_directory.html">
                  <li class="header-navi-list-item">
                    <p-wc text="directory"></p-wc>
                  </li>
                </a>
                <a href="index.html">
                  <li class="header-navi-list-item">
                    <p-wc text="login"></p-wc>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div class="header-mobile-navi-container">
          <ul class="header-mobile-navi-box">
            <li class="header-mobile-navi-list">
              <p-wc text="introduce"></p-wc>
            </li>
            <li class="header-mobile-navi-list">
              <p-wc text="service"></p-wc>
            </li>
            <a href="githubCloud_main_directory.html"
              ><li class="header-mobile-navi-list">
                <p-wc text="directory"></p-wc>
              </li>
            </a>
            <a href="index.html">
              <li class="header-mobile-navi-list">
                <p-wc text="login"></p-wc>
              </li>
            </a>
          </ul>
        </div>
      `;
    }
  }
);
