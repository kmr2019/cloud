customElements.define(
  "main-directory",
  class extends HTMLElement {
    static get observedAttributes() {
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
      let navi_index = this.shadowDOM.querySelector("main-directory-navi");

      var observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type == "attributes") {
            this.data = navi_index.getAttribute("index");
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
      console.log(name, old_value, new_value);
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
          :host {
            margin: 0;
            padding: 0;
          }

          .directory-container {
            width: 100%;
            height: 600px;
            margin: 0 auto;
          }
          
          .directory-contents {
            width: 90%;
            height: auto;
            margin: 0 auto;
            box-sizing: border-box;
          }

          @media (min-width: 576px) {
          }

          @media (min-width: 768px) {
          }

          @media (min-width: 992px) {
          }
        </style>

        <div class="directory-container">
          <div class="directory-contents">
            <main-directory-navi></main-directory-navi>
            <main-directory-contents list=${this.data}></main-directory-contents>
          </div>
        </div>
      `;
    }
  }
);
