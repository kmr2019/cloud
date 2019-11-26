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
      let remember_text = this.shadowDOM.querySelector(
        ".token-remember-id-text"
      );

      let navi_index = this.shadowDOM.querySelector("login-remember-button");

      var observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type == "attributes") {
            this.data = navi_index.getAttribute("index");

            if (this.data == 0) {
              remember_text.style.color = "white";
            } else {
              remember_text.style.color = "gray";
            }
            render(this.template(), this.shadowDOM);
          }
        });
      });

      observer.observe(navi_index, {
        attributes: true
      });

      let submit_click = this.shadowDOM.querySelector("submit-button");

      var observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type == "attributes") {
            this.click_data = submit_click.getAttribute("click");

            if(this.click_data == 1) {
              this.shadowDOM.querySelector(".token-contents>form").submit();
            }
            
            render(this.template(), this.shadowDOM);
          }
        });
      });

      observer.observe(submit_click, {
        attributes: true
      });
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

          .token-contents {
            width: 100%;
            height: auto;
            box-sizing: border-box;
          }

          .token-Information-box {
            width: 100%;
            height: auto;
            padding: 0 15px;
            box-sizing: border-box;
          }

          .token-login-text-box {
            width: 100%;
            height: auto;
            padding: 15px;
            box-sizing: border-box;
          }

          .token-login-text-box > p-wc {
            margin: 0;
            font-weight: bold;
            font-size: 1.3em;
            text-align: center;
            color: white;
          }

          .token-Information-list {
            width: 100%;
            height: auto;
            margin: 0;
            box-sizing: border-box;
          }

          .input-box {
            width: 100%;
            height: 45px;
            padding: 10px 15px;
            border: 1px solid gray;
            border-radius: 30px;
            box-sizing: border-box;
            background: gray;
            opacity: 0.5;
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
            padding: 15px;
            box-sizing: border-box;
          }

          .token-remember-id-text {
            margin: auto 0;
            padding-right: 10px;
            font-weight: bold;
            font-size: 0.7em;
            line-height: 20px;
            color: gray;
          }

          .token-remember-button {
            margin: auto 0;
          }

          .token-join-id-password-find {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: auto;
            padding: 0 15px;
            box-sizing: border-box;
          }

          .token-join-id-password-find > a {
            text-decoration: none;
          }

          .token-join-id-password-link > p-wc {
            font-weight: bold;
            font-size: 0.7em;
            line-height: 20px;
            color: gray;
          }

          .token-login-button-box {
            width: 100%;
            height: auto;
            padding: 15px;
            box-sizing: border-box;
          }

        </style>

        <div class="token-contents">
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
              <login-remember-button class="token-remember-button"></login-remember-button>
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
              <submit-button text="login"></submit-button>
            </div>
          </form>
        </div>
      `;
    }
  }
);
