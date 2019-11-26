customElements.define(
  "main-login",
  class extends HTMLElement {
    static get observedAttributes() {}

    constructor() {
      super();

      this.shadowDOM = this.attachShadow({
        mode: "open"
      });
      render(this.template(), this.shadowDOM);
      console.log("constructed!");
    }

    connectedCallback() {
      let navi_index = this.shadowDOM.querySelector("login-navi");

      var observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type == "attributes") {
            this.data = navi_index.getAttribute("index");

            if (this.data == 0) {
              this.shadowDOM.querySelector("login-basic").style.display = "block";
              this.shadowDOM.querySelector("login-token").style.display = "none";
            } else {
              this.shadowDOM.querySelector("login-basic").style.display = "none";
              this.shadowDOM.querySelector("login-token").style.display = "block";
            }

            render(this.template(), this.shadowDOM);
          }
        });
      });

      observer.observe(navi_index, {
        attributes: true
      });

      console.log("connected!");
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
            --background: white;
            --box-background: white;
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --background: black;
              --box-background: #4b4b4b;
            }
          }

          .login-container {
            display: flex;
            width: 100%;
            height: 600px;
            margin: 0 auto;
          }

          .login-contents {
            width: 90%;
            height: auto;
            margin: auto;
          }

          @media (min-width: 576px) {
            .login-contents {
              width: 500px;
            }
          }

          @media (min-width: 768px) {
          }

          @media (min-width: 992px) {
          }
        </style>

        <div class="login-container">
          <div class="login-contents">
            <login-navi></login-navi>
            <login-basic></login-basic>
            <login-token></login-token>
          </div>
        </div>
      `;
    }
  }
);
