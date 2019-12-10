customElements.define(
  "directory-file-view",
  class extends HTMLElement {
    static get observedAttributes() {
      return ["list", "type"];
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
      let file_list_box = this.shadowDOM.querySelector(".file-item-box");

      if (name == "type") {
        this.type = new_value;

        if (new_value != old_value) {
          file_list_box.innerHTML = ``;
        }
      } else if (name == "list") {
        let file_list = JSON.parse(new_value);
      } else {
      }

      this.date = new Date();
      this.year = this.date.getUTCFullYear();
      this.month = this.date.getMonth();
      this.day = this.date.getDay();
      this.hour = this.date.getHours();
      this.minute = this.date.getMinutes();

      file_list.some(list => {
        this.farthing = list.split(".");
        this.extension = extension[this.farthing[1]];

        if (this.type == "picture") {
          if (
            !(
              this.farthing[1] == "png" ||
              this.farthing[1] == "jpg" ||
              this.farthing[1] == "jpeg" ||
              this.farthing[1] == "svg" ||
              this.farthing[1] == "gif"
            )
          ) {
            return false;
          }
        } else if (this.type == "document") {
          if (
            !(
              this.farthing[1] == "pdf" ||
              this.farthing[1] == "xls" ||
              this.farthing[1] == "ppt" ||
              this.farthing[1] == "html" ||
              this.farthing[1] == "css"
            )
          ) {
            return false;
          }
        }

        if (
          this.farthing[1] == "png" ||
          this.farthing[1] == "jpg" ||
          this.farthing[1] == "jpeg" ||
          this.farthing[1] == "svg" ||
          this.farthing[1] == "gif"
        ) {
          this.extension = `images/${this.farthing[0]}.${this.farthing[1]}`;
        }

        file_list_box.innerHTML += `<div class='file-item'>
      <img src='${this.extension}' class='file-img'>
      <p class='file-route'>${this.farthing[0]}</p>
      <p class='file-date'>${this.year}-${this.month + 1}-${this.day + 1} ${
          this.hour
        }:${this.minute}</p>
    </div>`;
      });

      let file_item = this.shadowDOM.querySelectorAll(".file-item");

      file_item.forEach(list => {
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

          .file-container {
            overflow-y: auto;
            width: 100%;
            height: 600px;
            box-sizing: border-box;
            margin-top: 190px;
            border-radius: 30px 30px 0 0;
            background: white;
          }

          .file-text-box {
            width: 100%;
            height: auto;
            box-sizing: border-box;
            padding: 10px 20px 0;
          }

          .file-text-box > p-wc {
            font-weight: bold;
            color: gray;
          }

          .file-item-box {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 10px;
            width: 100%;
            height: auto;
            box-sizing: border-box;
            padding: 5px 15px;
          }

          .file-item {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: auto;
            box-sizing: border-box;
            padding: 10px;
            border: 1px solid #f9f9f9;
            border-radius: 15px;
            background: #f9f9f9;
          }

          .file-img {
            display: block;
            width: 25px;
            height: 25px;
            margin: 0 auto 5px;
          }

          .file-route,
          .file-date {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            box-sizing: border-box;
            margin: 0;
            font-weight: bold;
            font-size: 0.7em;
            text-align: center;
            color: gray;
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

          @media (min-width: 576px) {
          }

          @media (min-width: 768px) {
          }

          @media (min-width: 992px) {
          }
        </style>

        <div class="file-container">
          <div class="file-text-box">
            <p-wc text="${this.type}"></p-wc>
          </div>
          <div class="file-item-box"></div>
        </div>
      `;
    }
  }
);
