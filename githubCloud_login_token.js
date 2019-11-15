customElements.define(
  "login-token",
  class extends HTMLElement {
    static get observedAttributes() {}

    constructor() {
      super();

      this.shadowDOM = this.attachShadow({
        mode: "open"
      });
      render(this.template(), this.shadowDOM);
      console.log("token-constructed!");
    }

    connectedCallback() {
      console.log("token-connected!");
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
          @import "skeleton.css";

          :host {
            margin: 0;
            padding: 0;
          }

          .token-container {
            width: 100%;
            height: auto;
            padding: 20px;
            box-sizing: border-box;
          }

          .token-Information-box {
            width: 100%;
            height: auto;
            padding: 0 15px 15px;
            box-sizing: border-box;
          }

          .token-login-text-box {
            width: 100%;
            height: 50px;
          }

          .token-login-text-box > p-wc {
            margin: 0;
            font-weight: bold;
            font-size: 2em;
            line-height: 50px;
            text-align: center;
          }

          .token-Information-list {
            width: 100%;
            height: auto;
            margin: 0;
            padding: 15px 0 0;
            box-sizing: border-box;
          }

          .input-box {
            width: 100%;
            height: 40px;
            margin: 0;
            padding-left: 10px;
            border: 1px solid gray;
            border-radius: 5px;
            box-sizing: border-box;
            line-height: 40px;
            font-size: 1em;
            color: gray;
          }

          .token-remember-id-box {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            height: auto;
            padding: 0 15px;
            box-sizing: border-box;
          }

          .token-checkbox {
            width: 15px;
            height: 15px;
            margin: auto 0;
          }

          .token-remember-text-box {
            height: auto;
            margin: auto 0;
            margin-left: 5px;
          }

          .token-remember-text-box > p-wc {
            margin: auto 0;
            font-size: 0.7em;
            line-height: 21px;
            color: gray;
          }

          .token-join-id-password-find {
            width: 100%;
            height: auto;
            padding: 10px 15px;
            box-sizing: border-box;
          }

          .token-join-id-password-link > p-wc {
            font-weight: bold;
            font-size: 0.7em;
            line-height: 21px;
            color: gray;
          }

          .token-find {
            float: left;
          }

          .token-join {
            float: right;
          }

          .token-login-button-box {
            width: 100%;
            height: auto;
            padding: 15px;
            box-sizing: border-box;
          }

          .token-login-button {
            width: 100%;
            height: 40px;
            margin: 0;
            border: 1px solid gray;
            border-radius: 5px;
            background: gray;
            font-weight: bold;
            font-size: 20px;
            color: #eaeaea;
          }

          @media (max-width: 991px) {
            .token-container {
              padding: 15px;
            }

            .token-login-text-box {
              height: 45px;
            }

            .token-login-text-box > p-wc {
              font-size: 1.6em;
              line-height: 45px;
            }

            .input-box {
              height: 25px;
              font-size: 0.9em;
            }
          }

          @media (max-width: 767px) {
            .token-container {
              padding: 10px;
            }

            .token-login-text-box {
              height: 40px;
            }

            .token-login-text-box > p-wc {
              font-size: 1.4em;
              line-height: 40px;
            }

            .input-box {
              height: 23px;
              font-size: 0.8em;
            }
          }

          @media (max-width: 575px) {
            .input-box {
              font-size: 0.7em;
            }
          }
        </style>

        <div class="token-container">
          <form>
            <div class="token-Information-box">
              <div class="token-login-text-box">
                <p-wc text="tokenLogin"></p-wc>
              </div>

              <div class="token-Information-list">
                <input
                  type="text"
                  id="ID"
                  class="input-box"
                  autocomplete
                  autofocus
                  placeholder="token number"
                  required
                />
              </div>
            </div>

            <div class="token-remember-id-box">
              <input
                type="checkbox"
                id="remember"
                name="check"
                class="token-checkbox"
                value="check"
              />
              <label class="token-remember-text-box" for="remember">
                <p-wc text="tokenRemember">></p-wc>
              </label>
            </div>

            <div class="token-join-id-password-find">
              <a
                href="https://www.naver.com/"
                class="token-join-id-password-link"
                target="_blank"
              >
                <p-wc class="token-find" text="tokenCreate"></p-wc>
              </a>

              <a
                href="https://www.naver.com/"
                class="token-join-id-password-link"
                target="_blank"
              >
                <p-wc class="token-join" text="join"></p-wc>
              </a>
            </div>

            <div class="token-login-button-box">
              <input type="submit" class="token-login-button" value="LOGIN" />
            </div>
          </form>
        </div>
      `;
    }
  }
);
