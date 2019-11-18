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
      let basic_text = this.shadowDOM.querySelector(".basic-login-text-box>p-wc");
      let token_text = this.shadowDOM.querySelector(".token-login-text-box>p-wc");
      token.style.display = "none";

      login_button.forEach(list => {
        list.onclick = () => {
          if (list.getAttribute("data-value") == "basic") {
            basic.style.display = "block";
            token.style.display = "none";
            basic_text.style.color = "#FF5A5A";
            token_text.style.color = "gray";
          } else {
            basic.style.display = "none";
            token.style.display = "block";
            basic_text.style.color = "gray";
            token_text.style.color = "#FF5A5A";
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
        <link href="normalize.css" />
        <link href="skeleton.css" />

        <style>
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
            box-sizing: border-box;
          }

          .login-box {
            width: 500px;
            height: auto;
            margin: auto;
            box-sizing: border-box;
          }

          .login-text-box {
            width: 100%;
            height: auto;
            padding: 0 35px;
            box-sizing: border-box;
          }

          .basic-login-text-box,
          .token-login-text-box {
            display: inline-block;
            width: auto;
            height: auto;
            padding: 0 10px;
            box-sizing: border-box; 
          }

          .basic-login-text-box > p-wc,
          .token-login-text-box > p-wc {
            margin: 0;
            font-weight: bold;
            font-size: 1em;
            text-align: center;
            color: #FF5A5A;
          }

          .token-login-text-box > p-wc {
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
            <div class="login-text-box">
              <div class="basic-login-text-box">
                <p-wc
                  class="login-button"
                  data-value="basic"
                  text="basic"
                ></p-wc>
              </div>
              <div class="token-login-text-box">
                <p-wc
                  class="login-button"
                  data-value="token"
                  text="tokenb"
                ></p-wc>
              </div>
            </div>
            <login-basic></login-basic>
            <login-token></login-token>
          </div>
        </div>
      `;
    }
  }
);
