customElements.define(
  "confirm-custom",
  class extends HTMLElement {
    static get observedAttributes() {
      return ["data", "btn"];
    }

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
      let button_index = this.shadowDOM.querySelectorAll(".confirm-button");

      button_index.forEach(list => {
        list.onclick = () => {
          if (list.getAttribute("value") == "확인") {
            this.setAttribute("btn", 1);
            render(this.template(), this.shadowDOM);
            document.body.removeChild(this);
          } else {
            this.setAttribute("btn", 0);
            render(this.template(), this.shadowDOM);
            document.body.removeChild(this);
          }
          
        };
      });
    }

    disconnectedCallback() {
      console.log("disconnected!");
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
      //여기서 값 읽혀
    }

    adoptedCallback() {
      // 커스텀 엘리먼트가 새로운 다큐먼트로 이동되었을 때 호출
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

          .confirm-container {
            display: flex;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            z-index: 10;
            background-color: rgba(0, 0, 0, 0.3);
          }

          .confirm-all-box {
            position: relative;
            width: 300px;
            min-height: 150px;
            margin: auto;
            border: 1px solid #666;
            background: #fff;
          }

          .confirm-title-box {
            width: 100%;
            height: 30px;
            padding-left: 10px;
            box-sizing: border-box;
            background: #949494;
          }

          .confirm-title-text {
            width: 100%;
            height: auto;
            font-weight: bold;
            font-size: 1em;
            line-height: 30px;
            color: white;
          }

          .confirm-contents-box {
            width: 100%;
            height: auto;
          }
          .confirm-text-box {
            width: 100%;
            height: auto;
            padding: 20px 20px;
            box-sizing: border-box;
          }
          .confirm-text {
            width: 100%;
            height: auto;
            font-weight: bold;
            font-size: 0.8em;
            text-align: center;
            color: black;
          }

          .confirm-button-box {
            display: flex;
            width: 100%;
            height: auto;
          }

          .confirm-button {
            width: 30%;
            margin: auto;
          }
        </style>

        <div class="confirm-container">
          <div class="confirm-all-box">
            <div class="confirm-title-box">
              <p-wc class="confirm-title-text" text="join"></p-wc>
            </div>

            <div class="confirm-contents-box">
              <div class="confirm-text-box">
                <p-wc class="confirm-text" text="${this.data}"></p-wc>
              </div>

              <div class="confirm-button-box">
                <input type="button" class="confirm-button" value="확인" />
                <input type="button" class="confirm-button" value="취소" />
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
);
