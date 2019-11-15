customElements.define(
  "main-login",
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
      let login_button = this.shadowDOM.querySelectorAll(".login-button");
      let basic = this.shadowDOM.querySelector("login-basic");
      let token = this.shadowDOM.querySelector("login-token");
      let basic_button = this.shadowDOM.querySelector(".basic-login-box");
      let token_button = this.shadowDOM.querySelector(".token-login-box");
      token.style.display = "none";

      login_button.forEach(list => {
        list.onclick = () => {
          if (list.getAttribute("data-value") == "basic") {
            basic.style.display = "block";
            token.style.display = "none";
            basic_button.style.background = "#EAEAEA";
            token_button.style.background = "white";
          } else {
            basic.style.display = "none";
            token.style.display = "block";
            basic_button.style.background = "white";
            token_button.style.background = "#EAEAEA";
          }
        };
      });

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
        <style>
          @import "normalize.css";
        
          :host {
            --background: white;
            --box-background: white;
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --background: black;
              --box-background: #4b4b4b;
            }
          }

          .login-container {
            display: flex;
            width: 100%;
            height: 800px;
            margin: 0 auto;
            background-color: var(--background);
            box-sizing: border-box;
          }

          .login-box {
            width: 500px;
            height: auto;
            margin: auto;
            border: 1px solid #eaeaea;
            background-color: var(--box-background);
            box-shadow: 5px 5px 5px #eaeaea;
          }

          .basic-login-box,
          .token-login-box {
            display: inline-block;
            width: 50%;
            height: 70px;
            border: 1px solid #eaeaea;
            background: #eaeaea;
            box-sizing: border-box;
            box-shadow: 3px 3px #eaeaea;
          }

          .token-login-box {
            background: white;
          }

          .basic-login-box > p-wc,
          .token-login-box > p-wc {
            margin: 0;
            font-weight: bold;
            font-size: 1.5em;
            line-height: 70px;
            text-align: center;
            color: gray;
          }

          @media (max-width: 991px) {
            .login-container {
              height: 700px;
            }

            .login-box {
              width: 400px;
            }

            .basic-login-box,
            .token-login-box {
              height: 60px;
            }

            .basic-login-box > p-wc,
            .token-login-box > p-wc {
              font-size: 1.3em;
              line-height: 60px;
            }
          }

          @media (max-width: 767px) {
            .login-container {
              height: 600px;
            }

            .login-box {
              width: 350px;
            }

            .basic-login-box,
            .token-login-box {
              height: 50px;
            }

            .basic-login-box > p-wc,
            .token-login-box > p-wc {
              font-size: 1.1em;
              line-height: 50px;
            }
          }

          @media (max-width: 575px) {
            .login-container {
              height: 550px;
            }

            .login-box {
              width: 330px;
            }

            .basic-login-box,
            .token-login-box {
              height: 45px;
            }

            .basic-login-box > p-wc,
            .token-login-box > p-wc {
              font-size: 1em;
              line-height: 45spx;
            }
          }
        </style>

        <div class="login-container">
          <div class="login-box">
            <div class="basic-login-box">
              <p-wc class="login-button" data-value="basic" text="basic"></p-wc>
            </div>
            <div class="token-login-box">
              <p-wc
                class="login-button"
                data-value="token"
                text="tokenb"
              ></p-wc>
            </div>
            <login-basic></login-basic>
            <login-token></login-token>
          </div>
        </div>
      `;
    }
  }
);
