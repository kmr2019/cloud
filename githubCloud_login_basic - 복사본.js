customElements.define(
  "login-basic",
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
      console.log("basic-constructed!");
    }

    connectedCallback() {
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
            width: 90%;
            height: 150px;
            margin: 0 auto;
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
            height: 100px;
            margin: 0;
          }

          .basic-Information-list > form {
            display: flex;
            width: 100%;
            height: 50px;
            box-sizing: border-box;
          }

          .basic-label-text {
            margin: auto 0;
            float: left;
            width: 30%;
            margin-right: 2%;
          }

          .basic-label-text > p-wc {
            width: 100%;
            margin: 0;
            font-weight: bold;
            font-size: 1.2em;
            line-height: 30px;
            color: gray;
            text-align: right;
          }

          .input-box {
            margin: auto 0;
            float: left;
            width: 68%;
            height: 30px;
            padding: 0px;
            border-style: none;
            border-bottom: 1px solid gray;
            font-size: 1em;
            color: gray;
          }

          .basic-remember-id-box {
            width: 90%;
            height: 15px;
            margin: 5px auto;
          }

          .basic-remember-id-box > form {
            display: flex;
            justify-content: flex-end;
          }

          .basic-checkbox {
            width: 15px;
            height: 15px;
            margin: auto 0;
          }

          .basic-remember-text-box {
            width: auto;
            margin-left: 5px;
          }

          .basic-remember-text-box > p-wc {
            margin: 0;
            font-size: 0.7em;
            line-height: 15px;
            color: gray;
          }

          .basic-join-id-password-find {
            width: 90%;
            height: 20px;
            margin: 0 auto;
          }

          .basic-join-id-password-link {
            list-style: none;
          }

          .basic-join-id-password-link > p-wc {
            display: inline-block;
            margin: 0;
            padding: 0;
            font-weight: bold;
            font-size: 0.7em;
            line-height: 20px;
            color: gray;
          }

          .basic-find {
            float: left;
          }

          .basic-join {
            float: right;
          }

          .basic-login-button-box {
            width: 90%;
            height: auto;
            margin: 25px auto 0;
          }

          .basic-login-button {
            width: 100%;
            height: 40px;
            padding: 0;
            border: 1px solid gray;
            background: gray;
          }

          .basic-login-button > p-wc {
            margin: 0px;
            font-weight: bold;
            font-size: 20px;
            line-height: 40px;
            color: #eaeaea;
            text-align: center;
          }

          @media (max-width: 991px) {
            /* 태블릿 디바이스 (가로 해상도가 992px 보다 작은 화면에 적용) */
            .basic-container {
              padding: 15px;
            }

            .basic-Information-box {
              height: 140px;
            }

            .basic-login-text-box {
              height: 45px;
            }

            .basic-login-text-box > p-wc {
              font-size: 1.6em;
              line-height: 45px;
            }

            .basic-Information-list {
              height: 90px;
            }

            .basic-Information-list > form {
              height: 45px;
            }

            .basic-label-text {
              width: 25%;
            }

            .basic-label-text > p-wc {
              font-size: 1em;
              line-height: 25px;
            }

            .input-box {
              width: 73%;
              height: 25px;
              font-size: 0.9em;
            }

            .basic-login-button-box {
              margin: 20px auto 0;
            }
          }

          @media (max-width: 767px) {
            /* 가로모드 모바일 디바이스 (가로 해상도가 768px 보다 작은 화면에 적용) */
            .basic-container {
              padding: 10px;
            }

            .basic-Information-box {
              height: 130px;
            }

            .basic-login-text-box {
              height: 40px;
            }

            .basic-login-text-box > p-wc {
              font-size: 1.4em;
              line-height: 40px;
            }

            .basic-Information-list {
              height: 90px;
            }

            .basic-Information-list > form {
              height: 45px;
            }

            .basic-label-text {
              width: 20%;
            }

            .basic-label-text > p-wc {
              font-size: 0.9em;
              line-height: 23px;
            }

            .input-box {
              width: 78%;
              height: 23px;
              font-size: 0.8em;
            }

            .basic-login-button-box {
              margin: 15px auto 0;
            }
          }

          @media (max-width: 575px) {
            /* 세로모드 모바일 디바이스 (가로 해상도가 576px 보다 작은 화면에 적용) */
            .basic-label-text > p-wc {
              font-size: 0.8em;
            }

            .input-box {
              font-size: 0.7em;
            }
          }
        </style>

        <div class="basic-container">
          <div class="basic-Information-box">
            <div class="basic-login-text-box">
              <p-wc text="basicLogin"></p-wc>
            </div>
            <div class="basic-Information-list">
              <form>
                <label class="basic-label-text" for="ID">
                  <p-wc text="basicId"></p-wc>
                </label>
                <input
                  type="email"
                  id="ID"
                  class="input-box"
                  autocomplete
                  autofocus
                  placeholder="example@example.com"
                  required
                />
              </form>

              <form>
                <label class="basic-label-text" for="PASSWORD">
                  <p-wc text="basicPassword"></p-wc>
                </label>
                <input
                  type="password"
                  id="PASSWORD"
                  class="input-box"
                  placeholder="********"
                  autocomplete="off"
                  required
                />
              </form>
            </div>
          </div>

          <div class="basic-remember-id-box">
            <form>
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
            </form>
          </div>

          <div class="basic-join-id-password-find">
            <a
              href="https://www.naver.com/"
              class="basic-join-id-password-link"
              target="_blank"
            >
              <p-wc class="basic-find" text="idpassJoin"></p-wc>
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
            <button class="basic-login-button">
              <p-wc text="loginButton"></p-wc>
            </button>
          </div>
        </div>
      `;
    }
  }
);
