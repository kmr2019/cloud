
customElements.define(
  "main-directory-contents",
  class extends HTMLElement {
    static get observedAttributes() {
      return ["list"];
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
      console.log("connected!");
    }

    disconnectedCallback() {
      console.log("disconnected!");
    }

    attributeChangedCallback(name, old_value, new_value) {
      let string_file = JSON.stringify(file_list);

      let full_list_compomentes = this.shadowDOM.querySelector(
        "directory-full-list"
      );

      if (new_value == 1) {
        if (new_value == old_value) {
        } else {
          full_list_compomentes.style.display = "grid";
          full_list_compomentes.setAttribute("list", string_file);
        }
      } else {
        full_list_compomentes.style.display = "none";
      }
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

          @media (max-width: 991px) {
          }

          @media (max-width: 767px) {
          }

          @media (max-width: 575px) {
          }
        </style>

        <directory-icons></directory-icons>
        <directory-full-list></directory-full-list>
      `;
    }
  }
);
