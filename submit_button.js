customElements.define(
  "submit-button",
  class extends HTMLElement {
    static get observedAttributes() {
        return ["click"];
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
      let submit_button_click = this.shadowDOM.querySelector(".submit-button");

      submit_button_click.onclick = () => {
          this.setAttribute("click",1);
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

          .submit-button {
            display: flex;
            width: 100%;
            height: 45px;
            margin: 0;
            border: 1px solid #ff5a5a;
            border-radius: 30px;
            background: #ff5a5a;
          }

          .submit-button:hover{
              opacity:.8;
          }

          .submit-text {
            margin: auto;
            font-weight: bolder;
            font-size: 20px;
            font-family: "Noto Sans KR", sans-serif;
            color: white;
          }
        </style>

        <div class="submit-button">
          <p-wc class="submit-text" text="login"></p-wc>
        </div>
      `;
    }
  }
);
