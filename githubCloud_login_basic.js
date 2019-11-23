customElements.define(
  "login-basic",
  class extends HTMLElement {
    static get observedAttributes() {}

    constructor() {
      super();

      this.shadowDOM = this.attachShadow({
        mode: "open"
      });
      render(this.template(), this.shadowDOM);
      console.log("basic-constructed!");
    }

    connectedCallback() {
      let count = 0;
      let remember_button = this.shadowDOM.querySelector(
        ".basic-remember-id-button"
      );
      let remember_button_move = this.shadowDOM.querySelector(
        ".basic-remember-id-button-move"
      );
      let remember_text = this.shadowDOM.querySelector(
        ".basic-remember-id-text"
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

      let login_button = this.shadowDOM.querySelector(".basic-login-button");
      
      login_button.onclick = async () => {
        if (await prompt("hello","test")) {
          console.log("confirm true");
        } else {
          console.log("confirm false");
        }
      };
      console.log("basic-connected!");
    }

    disconnectedCallback() {
      console.log("disconnected!");
    }

    attributeChangedCallback(name, old_value, new_value) {
      console.log(`Attribute: ${name} changed to ${this.text}`);
    }

    adoptedCallback() {
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

          .basic-container {
            width: 100%;
            height: auto;
            padding: 20px 30px;
            box-sizing: border-box;
          }

          .basic-Information-box {
            width: 100%;
            height: auto;
            padding: 0 15px;
            box-sizing: border-box;
          }

          .basic-login-text-box {
            width: 100%;
            height: 50px;
          }

          .basic-login-text-box > p-wc {
            margin: 0;
            font-weight: bold;
            font-size: 1em;
            line-height: 50px;
            text-align: center;
            color: white;
          }

          .basic-Information-list {
            width: 100%;
            height: auto;
            margin: 0;
            padding: 15px 0 0;
            box-sizing: border-box;
          }

          .input-box {
            width: 100%;
            height: 50px;
            margin-bottom: 10px;
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

          .basic-remember-id-box {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            height: auto;
            padding: 0 15px;
            box-sizing: border-box;
          }

          .basic-remember-id-button {
            position: relative;
            width: 40px;
            height: auto;
            border-radius: 20px;
            background: gray;
          }

          .basic-remember-id-button-move {
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

          .basic-remember-id-text {
            margin: auto 0;
            padding-right: 10px;
            font-weight: bold;
            font-size: 0.7em;
            line-height: 20px;
            color: gray;
          }

          .basic-join-id-password-find {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: auto;
            padding: 10px 15px 0;
            box-sizing: border-box;
          }
          .basic-join-id-password-find > a {
            text-decoration: none;
          }

          .basic-join-id-password-link > p-wc {
            font-weight: bold;
            font-size: 0.7em;
            line-height: 21px;
            color: gray;
          }

          .basic-login-button-box {
            width: 100%;
            height: auto;
            padding: 15px;
            box-sizing: border-box;
          }

          .basic-login-button {
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
            .basic-container {
              padding: 15px;
            }

            .basic-login-text-box {
              height: 45px;
            }

            .basic-login-text-box > p-wc {
              font-size: 1.6em;
              line-height: 45px;
            }

            .input-box {
              height: 25px;
              font-size: 0.9em;
            }
          }

          @media (max-width: 767px) {
            .basic-container {
              padding: 10px;
            }

            .basic-login-text-box {
              height: 40px;
            }

            .basic-login-text-box > p-wc {
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

        <div class="basic-container">
          <form>
            <div class="basic-Information-box">
              <div class="basic-login-text-box">
                <p-wc text="basicLogin"></p-wc>
              </div>

              <div class="basic-Information-list">
                <input
                  type="email"
                  id="ID"
                  class="input-box"
                  autocomplete
                  autofocus
                  placeholder="user id"
                  required
                />

                <input
                  type="password"
                  id="PASSWORD"
                  class="input-box"
                  placeholder="password"
                  autocomplete="off"
                  required
                />
              </div>
            </div>

            <div class="basic-remember-id-box">
              <p-wc class="basic-remember-id-text" text="idRemember">></p-wc>

              <div class="basic-remember-id-button">
                <div class="basic-remember-id-button-move"></div>
              </div>
            </div>

            <div class="basic-join-id-password-find">
              <a
                href="https://www.naver.com/"
                class="basic-join-id-password-link"
                target="_blank"
              >
                <p-wc class="basic-find" text="idFind"></p-wc>
              </a>

              <a
                href="https://www.naver.com/"
                class="basic-join-id-password-link"
                target="_blank"
              >
                <p-wc class="basic-join" text="join"></p-wc>
              </a>
            </div>

            <div class="basic-login-button-box">
              <input type="submit" class="basic-login-button" value="LOGIN" />
            </div>
          </form>
        </div>
      `;
    }
  }
);
