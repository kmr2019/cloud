customElements.define(
  "alert-custom",
  class extends HTMLElement {
    static get observedAttributes() {
      return ["data"];
    }

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({
        mode: "open"
      });
      render(this.template(), this.shadowDOM);
      console.log("constructor!");
    }

    connectedCallback() {
      let button_close = this.shadowDOM.querySelector(".alert-button");

      button_close.onclick = () => {
        document.body.removeChild(this);
      };
      console.log("connectedCallback!");
    }

    disconnectedCallback() {
      console.log("disconnectedCallback!");
    }

    attributeChangedCallback(name, old_value, new_value) {
      switch (name) {
        case "data":
          this.data = new_value;
          render(this.template(), this.shadowDOM);
          break;
      }
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

          .alert-container {
            display: flex;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            z-index: 10;
            background-color: rgba(0, 0, 0, 0.3);
          }

          .alert-all-box {
            position: relative;
            width: 300px;
            min-height: 150px;
            margin: auto;
            border: 1px solid #666;
            background: #fff;
          }

          .alert-title-box {
            width: 100%;
            height: 30px;
            padding-left: 10px;
            box-sizing: border-box;
            background: #949494;
          }

          .alert-title-text {
            width: 100%;
            height: auto;
            font-weight: bold;
            font-size: 1em;
            line-height: 30px;
            color: white;
          }

          .alert-contents-box {
            width: 100%;
            height: auto;
          }
          .alert-text-box {
            width: 100%;
            height: auto;
            padding: 20px 20px;
            box-sizing: border-box;
          }
          .alert-text {
            width: 100%;
            height: auto;
            font-weight: bold;
            font-size: 0.8em;
            text-align: center;
            color: black;
          }

          .alert-button-box {
            display: flex;
            width: 100%;
            height: auto;
          }

          .alert-button {
            width: 30%;
            margin: auto;
          }
        </style>

        <div class="alert-container">
          <div class="alert-all-box">
            <div class="alert-title-box">
              <p-wc class="alert-title-text" text="join"></p-wc>
            </div>

            <div class="alert-contents-box">
              <div class="alert-text-box">
                <p-wc class="alert-text" text="${this.data}"></p-wc>
              </div>

              <div class="alert-button-box">
                <input type="button" class="alert-button" value="OK" />
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
);
