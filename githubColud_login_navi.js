customElements.define(
  "login-navi",
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
      console.log("constructed!");
    }

    connectedCallback() {
      let navi = this.shadowDOM.querySelectorAll(".login-text-box");
      let text = this.shadowDOM.querySelectorAll(".login-button");

      this.setAttribute("index", 0);
      text[0].style.color = "#FF5A5A";

      navi.forEach(list => {
        list.onclick = () => {
          if (list.getAttribute("data-value") == "basic") {
            text[0].style.color = "#FF5A5A";
            text[1].style.color = "gray";
            this.setAttribute("index", 0);
          } else {
            text[0].style.color = "gray";
            text[1].style.color = "#FF5A5A";
            this.setAttribute("index", 1);
          }
        };
      });

      console.log("connected!");
    }

    disconnectedCallback() {
      console.log("disconnected!");
    }

    attributeChangedCallback(name, old_value, new_value) {
      console.log(`Attribute: ${name} changed to ${new_value}`);
    }

    adoptedCallback() {
      console.log("adopted!");
    }

    template() {
      return html`
        <link href="normalize.css" />
        <link href="skeleton.css" />

        <style>
          .login-box {
            width: 100%;
            height: auto;
            padding: 15px;
            box-sizing: border-box;
          }

          .login-text-box {
            display: inline-block;
            width: auto;
            height: auto;
            margin-right: 15px;
            box-sizing: border-box;
          }

          .login-button {
            font-weight: bold;
            font-size: 1em;
            color: gray;
          }
        </style>

        <div class="login-box">
          <div class="login-text-box" data-value="basic">
            <p-wc class="login-button" text="basic"></p-wc>
          </div>
          <div class="login-text-box" data-value="token">
            <p-wc class="login-button" text="tokenb"></p-wc>
          </div>
        </div>
      `;
    }
  }
);
