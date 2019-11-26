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
      let remember_text = this.shadowDOM.querySelector(
        ".basic-remember-id-text"
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

      let login_button = this.shadowDOM.querySelector("submit-button");

      login_button.onclick = async () => {
        if (await prompt("hello", "test")) {
          console.log("confirm true");
        } else {
          console.log("confirm false");
        }
      };

      let submit_click = this.shadowDOM.querySelector("submit-button");

      var observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type == "attributes") {
            this.click_data = submit_click.getAttribute("click");

            if (this.click_data == 1) {
              this.shadowDOM.querySelector(".basic-contents>form").submit();
            }

            render(this.template(), this.shadowDOM);
          }
        });
      });

      observer.observe(submit_click, {
        attributes: true
      });
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
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap"
          rel="stylesheet"
        />
        <style>
          :host {
            margin: 0;
            padding: 0;
          }

          .basic-contents {
            width: 100%;
            height: auto;
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
            height: auto;
            padding: 15px;
            box-sizing: border-box;
          }

          .basic-login-text-box > p-wc {
            margin: 0;
            font-weight: bold;
            font-size: 1.3em;
            text-align: center;
            color: white;
          }

          .basic-Information-list {
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

          .input-box:nth-child(1) {
            margin-bottom: 15px;
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
            padding: 15px;
            box-sizing: border-box;
          }

          .basic-remember-id-text {
            margin: auto 0;
            padding-right: 10px;
            font-weight: bold;
            font-size: 0.7em;
            line-height: 20px;
            color: gray;
          }

          .basic-remember-button {
            margin: auto 0;
          }

          .basic-join-id-password-find {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: auto;
            padding: 0 15px;
            box-sizing: border-box;
          }
          .basic-join-id-password-find > a {
            text-decoration: none;
          }

          .basic-join-id-password-link > p-wc {
            font-weight: bold;
            font-size: 0.7em;
            line-height: 20px;
            color: gray;
          }

          .basic-login-button-box {
            width: 100%;
            height: auto;
            padding: 15px;
            box-sizing: border-box;
          }
        </style>

        <div class="basic-contents">
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
              <login-remember-button
                class="basic-remember-button"
              ></login-remember-button>
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
              <submit-button></submit-button>
            </div>
          </form>
        </div>
      `;
    }
  }
);
