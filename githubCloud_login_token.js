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
      let count = 0;
      let remember_button = this.shadowDOM.querySelector(
        ".token-remember-id-button"
      );
      let remember_button_move = this.shadowDOM.querySelector(
        ".token-remember-id-button-move"
      );
      let remember_text = this.shadowDOM.querySelector(
        ".token-remember-id-text"
      );

      remember_button.onclick = () => {
        if (count == 0) {
          count++;
          remember_button_move.style.animation =
            "remember-button-ani-right .5s forwards";
          remember_text.style.color = "white";
        } else {
          count--;
          remember_button_move.style.animation =
            "remember-button-ani-left .5s forwards";
          remember_text.style.color = "gray";
        }
      };
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
        <link href="normalize.css" />
        <link href="skeleton.css" />

        <style>
          :host {
            margin: 0;
            padding: 0;
          }

          .token-container {
            width: 100%;
            height: auto;
            padding: 20px 30px;
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
            font-size: 1em;
            line-height: 50px;
            text-align: center;
            color: white;
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
            height: 50px;
            margin: 0;
            padding-left: 20px;
            border: 1px solid gray;
            border-radius: 30px;
            box-sizing: border-box;
            background: gray;
            opacity: 0.4;
            font-size: 1em;
            color: white;
          }

          .input-box:focus {
            outline: none;
          }

          .input-box::placeholder {
            color: white;
          }

          .token-remember-id-box {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            height: auto;
            padding: 0 15px;
            box-sizing: border-box;
          }

          .token-remember-id-button {
            position: relative;
            width: 40px;
            height: auto;
            border-radius: 20px;
            background: gray;
          }

          .token-remember-id-button-move {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 20px;
            background: white;
          }

          @keyframes remember-button-ani-right {
            0% {
              left: 0px;
            }
            100% {
              left: 20px;
            }
          }

          @keyframes remember-button-ani-left {
            0% {
              left: 20px;
            }
            100% {
              left: 0px;
            }
          }

          .token-remember-id-text {
            margin: auto 0;
            padding-right: 10px;
            font-weight: bold;
            font-size: 0.7em;
            line-height: 20px;
            color: gray;
          }


          .token-join-id-password-find {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: auto;
            padding: 10px 15px 0;
            box-sizing: border-box;
          }

          .token-join-id-password-find > a {
            text-decoration: none;
          }

          .token-join-id-password-link > p-wc {
            font-weight: bold;
            font-size: 0.7em;
            line-height: 21px;
            color: gray;
          }

          .token-login-button-box {
            width: 100%;
            height: auto;
            padding: 15px;
            box-sizing: border-box;
          }

          .token-login-button {
            width: 100%;
            height: 50px;
            margin: 0;
            border: 1px solid #FF5A5A;
            border-radius: 30px;
            background: #FF5A5A;
            font-weight: bold;
            font-size: 20px;
            color: white;
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
              <p-wc class="token-remember-id-text" text="tokenRemember">></p-wc>

              <div class="token-remember-id-button">
                <div class="token-remember-id-button-move"></div>
              </div>
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
