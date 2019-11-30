customElements.define(
  "directory-full-list",
  class extends HTMLElement {
    static get observedAttributes() {
      return ["list", "count"];
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
      this.array_list = [];
      this.newValue = true;
      console.log("connected!");
    }

    disconnectedCallback() {
      console.log("disconnected!");
    }

    attributeChangedCallback(name, old_value, new_value) {
      let full_list = this.shadowDOM.querySelector(".directory-full-list");

      if (name == "count") {
        if (new_value > 15) {
          full_list.style.overflowY = "scroll";
        } else {
          full_list.style.overflowY = "visible";
        }
      } else {
        this.array_list.some(list => {
          if (list == new_value) {
            this.newValue = false;
          }
          return list == new_value;
        });

        if (this.newValue) {
          this.newValue = true;
          this.array_list.push(new_value);

          let date = new Date();
          let year = date.getUTCFullYear();
          let month = date.getMonth();
          let day = date.getDay();
          let hour = date.getHours();
          let minute = date.getMinutes();

          this.farthing = new_value.split(".");
          this.extension = extension[this.farthing[1]];

          if (
            this.farthing[1] == "png" ||
            this.farthing[1] == "jpg" ||
            this.farthing[1] == "jpeg" ||
            this.farthing[1] == "svg" ||
            this.farthing[1] == "gif"
          ) {
            this.extension = `images/${new_value}`;
          }

          full_list.innerHTML += `<div class='directory-full-list-item'>
                                         <img src='${
                                           this.extension
                                         }' class='directory-img'>
                                         <p class='directory-file-route'>${
                                           this.farthing[0]
                                         }</p>
                                         <p class='directory-file-date'>${year}-${month +
            1}-${day} ${hour}:${minute}</p>
                                       </div>`;
        }
      }

      let full_list_item = this.shadowDOM.querySelectorAll(
        ".directory-full-list-item"
      );

      full_list_item.forEach(list => {
        list.onmouseover = () => {
          list.children[0].style.animation = "expansion 1s forwards";
        };

        list.onmouseout = () => {
          list.children[0].style.animation = "reduction 1s forwards";
        };
      });

      render(this.template(), this.shadowDOM);
     /* console.log(`Attribute: ${name} ${old_value}changed to ${new_value}`);*/
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

          .directory-full-list {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-gap: 10px;
            width: 100%;
            height: 480px;
            padding: 20px;
            box-sizing: border-box;
          }

          .directory-full-list-item {
            width: auto;
            height: auto;
            padding: 20px;
            border: 1px solid gray;
            box-sizing: border-box;
          }

          .directory-img {
            display: block;
            width: 25px;
            height: 25px;
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

          .directory-file-route,
          .directory-file-date {
            width: 100%;
            height: auto;
            margin: 0;
            padding-top: 10px;
            font-weight: bold;
            font-size: 0.8em;
            text-align: center;
            color: gray;
          }

          @media (min-width: 576px) {
          }

          @media (min-width: 768px) {
          }

          @media (min-width: 992px) {
          }
        </style>

        <div class="directory-full-list"></div>
      `;
    }
  }
);
