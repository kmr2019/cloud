customElements.define(
  "main-directory",
  class extends HTMLElement {
    static get observedAttributes() {}

    constructor() {
      // 생성자
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
        attributes: true //configure it to listen to attribute changes
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
        </style>
        <main-directory-navi></main-directory-navi>
        <main-directory-contents list=${this.data}></main-directory-contents>
      `;
    }
  }
);
