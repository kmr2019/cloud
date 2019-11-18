const array = [
  "박준렬 연애 목록.xls",
  "최진우 사진.jpg",
  "사업 성공.pdf",
  "image.css",
  "index.html",
  "최종 ppt.ppt",
  "박준렬 엽사.jpg",
  "test.html",
  "최종 논문.pdf",
  "test.css",
  "박준렬 명언.xls"
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

      if (navi_index == 0) {
        array.forEach(data => {
          this.farthing = data.split(".");
          this.extension = extension[this.farthing[1]];
          update.innerHTML += `<div class='directory-grid-item'>
                                 <img src='${this.extension}' class='directory-img'>
                                 <p class='directory-file-route'>${this.farthing[0]}</p>
                               </div>`;
        });
      } else {
        update.innerHTML = ` `;
      }

      let grid_box = this.shadowDOM.querySelectorAll(".directory-grid-item");

      grid_box.forEach(list => {
        list.onmouseover = () => {
          list.children[0].style.animation = "expansion 1s forwards";
        };

        list.onmouseout = () => {
          list.children[0].style.animation = "reduction 1s forwards";
        };
      });
      render(this.template(), this.shadowDOM);
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
            grid-gap: 5px;
            width: 100%;
            height: 460px;
            box-sizing: border-box;
          }

          .directory-grid-item {
            padding: 30px;
            border: 1px solid #eaeaea;
          }

          .directory-img {
            display: block;
            width: 50px;
            height: 50px;
            margin: 0 auto;
          }

          @keyframes expansion {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.3);
            }
          }

          @keyframes reduction {
            from {
              transform: scale(1.3);
            }
            to {
              transform: scale(1);
            }
          }

          .directory-file-route {
            width: 100%;
            height: auto;
            margin: 0;
            padding: 10px 0 0;
            font-weight: bold;
            font-size: 0.8em;
            text-align: center;
            color: gray;
          }

          @media (max-width: 991px) {
          }

          @media (max-width: 767px) {
          }

          @media (max-width: 575px) {
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
