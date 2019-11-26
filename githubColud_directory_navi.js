customElements.define(
  "main-directory-navi",
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
      let icon = this.shadowDOM.querySelectorAll(".navi-icon");
      icon[0].style.background = "#FF5A5A";
      this.setAttribute("index", 0);

      icon.forEach(list => {
        list.onclick = () => {
          if (list.getAttribute("data-value") == "icons") {
            icon[0].style.background = "#FF5A5A";
            icon[1].style.background = "gray";
            this.setAttribute("index", 0);
          } else {
            icon[0].style.background = "gray";
            icon[1].style.background = "#FF5A5A";
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
      console.log(name, old_value, new_value);
      console.log(`Attribute: ${name} changed to ${this.test}`);
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

          .navi-list-box {
            display: flex;
            width: 100%;
            height: auto;
            padding: 15px;
            box-sizing: border-box;
          }

          .navi-icon {
            width: 35px;
            height: 35px;
            margin: auto 15px auto 0;
            background: gray;
          }
        </style>
            <div class="navi-list-box">
              <button class="navi-icon" data-value="icons"></button>
              <button class="navi-icon" data-value="fullList"></button>
            </div>
        </div>
      `;
    }
  }
);
