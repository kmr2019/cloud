customElements.define(
  "prompt-custom",
  class extends HTMLElement {
    static get observedAttributes() {
      return ["text"];
    } // 이게 props 역할  값 들어오면

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
      console.log("testtesttest!");
    }

    disconnectedCallback() {
      console.log("disconnected!");
    }

    attributeChangedCallback(name, old_value, new_value) {
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
        <style>
          @import "normalize.css";
          @import "skeleton.css";

          :host {
            margin: 0;
            padding: 0;
          }

          .prompt-container {
            display: flex;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            z-index: 10;
            background-color: rgba(0, 0, 0, 0.3);
          }

          .prompt-all-box {
            position: relative;
            width: 300px;
            min-height: 150px;
            margin: auto;
            border: 1px solid #666;
            background: #fff;
          }

          .prompt-title-box {
            width: 100%;
            height: 30px;
            padding-left: 10px;
            box-sizing: border-box;
            background: #949494;
          }

          .prompt-title-text {
            width: 100%;
            height: auto;
            font-weight: bold;
            font-size: 1em;
            line-height: 30px;
            color: white;
          }

          .prompt-contents-box {
            width: 100%;
            height: auto;
          }
          .prompt-text-box {
            width: 100%;
            height: auto;
            padding: 20px 20px;
            box-sizing: border-box;
          }
          .prompt-text {
            width: 100%;
            height: auto;
            font-weight: bold;
            font-size: 0.8em;
            text-align: center;
            color: black;
          }

          .prompt-input-box {
            width: 100%;
            height: auto;
            padding: 0 10px 20px;
            box-sizing: border-box;
          }

          .prompt-input {
            width: 100%;
            height: auto;
            margin: 0 auto;
            
          }

          .prompt-button-box {
            display: flex;
            width: 100%;
            height: auto;
          }

          .prompt-button {
            width: 30%;
            margin: auto;
          }
        </style>

        <div class="prompt-container">
          <div class="prompt-all-box">
            <div class="prompt-title-box">
              <p-wc class="prompt-title-text" text="join"></p-wc>
            </div>

            <div class="prompt-contents-box">
              <div class="prompt-text-box">
                <p-wc class="prompt-text" text="copyright"></p-wc>
              </div>

              <form>
                <div class="prompt-input-box">
                    <input type="text" class="prompt-input">
                </div>

                <div class="prompt-button-box">
                  <input type="button" class="prompt-button" value="확인" />
                  <input type="button" class="prompt-button" value="취소" />
                </div>
              </form>
            </div>
          </div>
        </div>
      `;
    }
  }
);
