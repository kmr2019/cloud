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

const month = {};

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
      let full_list = this.shadowDOM.querySelector(".directory-full-list");
      let icons = this.shadowDOM.querySelector(".directory-icons");

      let date = new Date();
      let year = date.getUTCFullYear();
      let month = date.getMonth();
      let day = date.getDay();
      let hour = date.getHours();
      let minute = date.getMinutes();

      //let reverse_list = array.reverse();

      if (navi_index == 1) {
        icons.innerHTML = ` `;
        full_list.style.display = "grid";
        icons.style.display = "none";

        array.reverse().forEach(data => {
          this.farthing = data.split(".");
          this.extension = extension[this.farthing[1]];
          full_list.innerHTML += `<div class='directory-grid-item'>
                                 <img src='${
                                   this.extension
                                 }' class='directory-img'>
                                 <p class='directory-file-route'>${
                                   this.farthing[0]
                                 }</p>
                                 <p class='directory-file-date'>${year}-${month +
            1}-${day} ${hour}:${minute}</p>
                               </div>`;
        });
      } else {
        full_list.innerHTML = ` `;
        full_list.style.display = "none";
        icons.style.display = "grid";

        icons.innerHTML += ` <div class='directory-grid-item'>
                             <img src='images/picture.png' class='directory-img'>
                             <p-wc class='directory-icons-name' text='picture'></p-wc>  
                           </div>
        `;
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
            margin: 20px 0 40px;
          }

          .directory-contents {
            display: relative;
            width: 100%;
            height: 500px;
            max-width: 1080px;
            margin: 0 auto;
          }

          .directory-contents-clone {
            position: absolute;
            z-index: -10;
            width: 100%;
            height: 500px;
            max-width: 1080px;
            margin: 0 auto;
            box-sizing: border-box;
            background: gray;
            opacity: 0.2;
          }

          .directory-full-list {
            display: grid;
            grid-template-columns: auto auto auto auto auto;
            grid-gap: 10px;
            overflow-y: scroll;
            width: 100%;
            height: 480px;
            padding: 20px 20px 0;
            box-sizing: border-box;
          }

          .directory-grid-item {
            width: auto;
            height: auto;
            padding: 20px;
            border: 1px solid gray;
          }

          .directory-img {
            display: block;
            width: 45px;
            height: 45px;
            margin: 0 auto;
          }

          .directory-icons {
            display: grid;
            grid-template-columns: auto;
            grid-gap: 10px;
            overflow-y: scroll;
            width: 100%;
            height: 480px;
            padding: 20px 20px 0;
            box-sizing: border-box;
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

          .directory-file-route,
          .directory-file-date,
          .directory-icons-name {
            width: 100%;
            height: auto;
            margin: 0;
            padding-top: 10px;
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
            <div class="directory-contents-clone"></div>
            <div class="directory-icons"></div>
            <div class="directory-full-list"></div>
          </div>
        </div>
      `;
    }
  }
);
