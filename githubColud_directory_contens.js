const array = [
  "wegwegwe.xls",
  "qwq.jpg",
  "wegegwewvvwegwe.pdf",
  "wegvwewewegwe.css",
  "wegwewegwe.html",
  "wegwefqw.ppt",
  "wwgewg.jpg",
  "wewgege.html",
  "qwqwww.pdf",
  "ewgweegwe.css",
  "ewgewwe.xls"
];

const extension = {
  xls: "images/xls.png",
  jpg: "images/jpg.png",
  javascript: "images/javascript.png",
  css: "images/css.png",
  pdf: "images/pdf.png",
  html: "images/html.png",
  png: "images/png,png",
  ppt: "images/ppt.png"
};

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
      console.log(`Attribute: ${name} changed to ${new_value}`);
      let navi_index = new_value;
      let update = this.shadowDOM.querySelector(".directory-wrapper");

      array.forEach(test => {
        let farthing = test.split(".");
        this.extension = extension[farthing[1]];
        update.innerHTML += `<div class='directory-grid-item'><img src='${this.extension}' class='directory-img-size'></div>`;
      });
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

          .directory-container {
            width: 100%;
            height: 500px;
            margin: 30px 0;
          }

          .directory-contents {
            width: 100%;
            height: 500px;
            max-width: 1080px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #eaeaea;
            box-sizing: border-box;
            box-shadow: 3px 3px #eaeaea;
          }

          .directory-wrapper {
            display: grid;
            overflow-y: scroll;
            grid-template-columns: auto auto auto auto auto;
            grid-gap: 10px;
            width: 100%;
            height: 460px;
            box-sizing: border-box;
          }

          .directory-grid-item {
            padding: 20px;
            border: 1px solid #eaeaea;
            text-align: center;
          }

          .directory-img-size {
            width: 50px;
            height: auto;
          }

          @media (max-width: 991px) {
            /* 테블릿 모바일 디바이스 */
            .directory-container {
              height: auto;
            }
          }

          @media (max-width: 767px) {
            /* 가로모드 모바일 디바이스 */
            .directory-container {
              height: 400px;
            }
          }

          @media (max-width: 575px) {
            /* 세로모드 모바일 디바이스 */
            .directory-container {
              height: 350px;
            }
          }
        </style>

        <div class="directory-container">
          <div class="directory-contents">
            <div class="directory-wrapper"></div>
          </div>
        </div>
      `;
    }
  }
);
