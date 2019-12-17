function getFormatDate(date) {
  var year = date.getFullYear();
  var month = 1 + date.getMonth();
  month = month >= 10 ? month : `0${month}`;
  var day = date.getDate();
  day = day >= 10 ? day : `0${day}`;
  var hour = date.getHours();
  hour = hour >= 10 ? hour : `0${hour}`;
  var minute = date.getMinutes();
  minute = minute >= 10 ? minute : `0${minute}`;
  return `${year}-${month}-${day}-${hour}-${minute}`;
}

customElements.define(
  "directory-file-view",
  class extends HTMLElement {
    static get observedAttributes() {
      return ["type"];
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
      this.date = new Date();
      this.date_string = getFormatDate(this.date);

      file_list.forEach(list => {
        list.time = this.date_string;
        list.url = list.name;
        list.upload = false;
        list.extension = list.name.split(".")[1];
      });
    }

    disconnectedCallback() {
      console.log("disconnected!");
    }

    attributeChangedCallback(name, old_value, new_value) {
      let file_list_box = this.shadowDOM.querySelector(".file-item-box");
      let file_length = file_list.length;
      this.type = new_value;

      if (new_value != old_value || new_value == old_value) {
        file_list_box.innerHTML = ``;
      }

      var drop = this.shadowDOM.querySelector(".file-container");

      drop.ondragover = e => {
        e.preventDefault();
      };

      drop.ondrop = e => {
        e.preventDefault();
        var data = e.dataTransfer;
        this.date = new Date();

        if (data.items) {
          for (var i = 0; i < data.items.length; i++) {
            if (data.items[i].kind == "file") {
              this.push_file = data.items[i].getAsFile();

              this.reader = new FileReader();
              this.reader.readAsDataURL(this.push_file); // 해당 파일 읽어옴

              this.reader.onload = () => {
                file_list.push({
                  name: this.push_file.name,
                  time: getFormatDate(this.date),
                  url: this.reader.result,
                  upload: true,
                  extension: this.push_file.name.split(".")[1]
                });

                file_list.forEach(list => {
                  console.log(list.name);
                });

                if (file_length != file_list.length) {
                  this.setAttribute("type", this.type);
                }
              };
            }
          }
        } else {
          // File API 사용
          for (var i = 0; i < data.files.length; i++) {
            console.log(data.files[i].name);
          }
        }
      };

      file_list.some(list => {
        if (
          list.upload &&
          (list.extension == "png" ||
            list.extension == "jpg" ||
            list.extension == "jpeg" ||
            list.extension == "svg" ||
            list.extension == "gif")
        ) {
          this.url = list.url;
        } else if (
          list.upload &&
          !(
            list.extension == "png" ||
            list.extension == "jpg" ||
            list.extension == "jpeg" ||
            list.extension == "svg" ||
            list.extension == "gif"
          )
        ) {
          this.url = extension[list.extension];
        } else {
          this.farthing = list.url.split(".");
          this.url = extension[this.farthing[1]];
        }

        if (this.type == "document") {
          if (
            !(
              list.extension == "pdf" ||
              list.extension == "xls" ||
              list.extension == "ppt" ||
              list.extension == "pptx" ||
              list.extension == "html" ||
              list.extension == "css"
            )
          ) {
            return false;
          }
        } else if (this.type == "video") {
          if (!(list.extension == "avi")) {
            return false;
          }
        } else if (this.type == "picture") {
          if (
            !(
              list.extension == "png" ||
              list.extension == "jpg" ||
              list.extension == "jpeg" ||
              list.extension == "svg" ||
              list.extension == "gif"
            )
          ) {
            return false;
          } else {
            if (!list.upload) {
              this.url = `images/${list.name}`;
            } 
          }
        }

        if (this.type != "recentfile" && this.type != "add") {
          file_list_box.innerHTML += `<div class='file-item'>
      <img src='${this.url}' class='file-img'>
      <p class='file-route'>${list.name.split(".")[0]}</p>
      <p class='file-date'>${list.time}</p>
    </div>`;
        } else {
        }
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
            width: 100%;
            height: auto;
          }

          .file-text-box-border {
            position: sticky;
            top: 0;
            width: 100%;
            height: 50px;
            background: #e7e7e7;
          }

          .file-text-box {
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            padding: 10px 20px 0;
            border-radius: 30px 30px 0 0;
            background: white;
          }

          .file-text-box > p-wc {
            font-weight: bold;
            color: gray;
          }

          .file-item-box {
            background: white;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 10px;
            width: 100%;
            height: auto;
            box-sizing: border-box;
            padding: 15px;
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
          <div class="file-text-box-border">
            <div class="file-text-box">
              <p-wc text="${this.type}"></p-wc>
            </div>
          </div>
          <div class="file-item-box"></div>
        </div>
      `;
    }
  }
);
