customElements.define(
  "login-remember-button",
  class extends HTMLElement {
    static get observedAttributes() {
      return ["index"];
    }

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
        ".remember-button-box"
      );
      let remember_button_move = this.shadowDOM.querySelector(
        ".remember-button"
      );

      remember_button.onclick = () => {
        if (count == 0) {
          count++;
          remember_button_move.style.animation =
            "remember-button-ani-right .5s forwards";
          this.shadowDOM.querySelector(".remember-button-left").style.width =
            "60%";
          this.shadowDOM.querySelector(".remember-button-right").style.width =
            "40%";
            this.setAttribute("index",0);
        } else {
          count--;
          remember_button_move.style.animation =
            "remember-button-ani-left .5s forwards";
          this.shadowDOM.querySelector(".remember-button-left").style.width =
            "40%";
          this.shadowDOM.querySelector(".remember-button-right").style.width =
            "60%";
            this.setAttribute("index",1);
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

          .remember-button-box {
            position: relative;
            overflow: hidden;
            width: 30px;
            height: 15px;
            border-radius: 15px;
            background: gray;
          }

          .remember-button-left,
          .remember-button-right {
            display: inline-block;
            width: 50%;
            height: 15px;
          }

          .remember-button-left {
            width: 40%;
            background: #ff5a5a;
          }

          .remember-button-right {
            width: 60%;
            background: gray;
          }

          .remember-button {
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 20px;
            background: white;
          }

          @keyframes remember-button-ani-right {
            0% {
              left: 0px;
            }
            100% {
              left: 15px;
            }
          }

          @keyframes remember-button-ani-left {
            0% {
              left: 15px;
            }
            100% {
              left: 0px;
            }
          }
        </style>

        <div class="remember-button-box">
          <div class="remember-button"></div>
          <div class="remember-button-left"></div>
          <div class="remember-button-right"></div>
        </div>
      `;
    }
  }
);
