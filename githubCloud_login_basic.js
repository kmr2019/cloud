window.alert = txt => {
  let dv= document.createElement("div");
  dv.innerHTML+=`<alert-custom data="${txt}"></alert-custom>`;
  document.body.appendChild(dv.firstChild);
};

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
      let login_button = this.shadowDOM.querySelector(".basic-login-button");
      login_button.onclick = () => {
        window.alert("hello");
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

          .basic-container {
            width: 100%;
            height: auto;
            padding: 20px;
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
            font-size: 2em;
            line-height: 50px;
            text-align: center;
          }

          .basic-Information-list {
            width: 100%;
            height: auto;
            margin: 0;
            padding: 15px 0 0;
            box-sizing: border-box;
          }

          .input-box {
            margin-bottom: 10px;
            width: 100%;
            height: 40px;
            padding-left: 10px;
            border: 1px solid gray;
            border-radius: 5px;
            box-sizing: border-box;
            line-height: 40px;
            font-size: 1em;
            color: gray;
          }

          .basic-remember-id-box {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            height: auto;
            padding: 0 15px;
            box-sizing: border-box;
          }

          .basic-checkbox {
            width: 15px;
            height: 15px;
            margin: auto 0;
          }

          .basic-remember-text-box {
            height: auto;
            margin: auto 0;
            padding-left: 5px;
          }

          .basic-remember-text-box > p-wc {
            margin: auto 0;
            font-size: 0.7em;
            line-height: 21px;
            color: gray;
          }

          .basic-join-id-password-find {
            width: 100%;
            height: auto;
            padding: 10px 15px;
            box-sizing: border-box;
          }

          .basic-join-id-password-link > p-wc {
            font-weight: bold;
            font-size: 0.7em;
            line-height: 21px;
            color: gray;
          }

          .basic-find {
            float: left;
          }

          .basic-join {
            float: right;
          }

          .basic-login-button-box {
            width: 100%;
            height: auto;
            padding: 15px;
            box-sizing: border-box;
          }

          .basic-login-button {
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
              <input
                type="checkbox"
                id="remember"
                name="check"
                class="basic-checkbox"
                value="check"
              />
              <label class="basic-remember-text-box" for="remember">
                <p-wc text="idRemember">></p-wc>
              </label>
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
