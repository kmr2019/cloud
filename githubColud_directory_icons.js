customElements.define(
  "directory-icons",
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
      let icons_event = this.shadowDOM.querySelectorAll(
        ".directory-icons-item"
      );
      let image_box = this.shadowDOM.querySelectorAll(
        ".directory-icons-item-image-box"
      );

      image_box[0].style.background = "#ff5a5a";
      this.setAttribute("index", "recentfile");

      icons_event.forEach(index => {
        index.onclick = () => {
          image_box.forEach(list => {
            list.style.background = "white";
          });

          index.children[0].style.background = "#ff5a5a";
          this.setAttribute("index", index.getAttribute("data-value"));
        };

        index.onmouseover = () => {
          index.children[0].children[0].style.animation =
            "expansion 1s forwards";
        };

        index.onmouseout = () => {
          index.children[0].children[0].style.animation =
            "reduction 1s forwards";
        };
      });
      console.log("connected!");
    }

    disconnectedCallback() {
      console.log("disconnected!");
    }

    attributeChangedCallback(name, old_value, new_value) {
      render(this.template(), this.shadowDOM);
      console.log(`Attribute: ${name} ${old_value}changed to ${new_value}`);
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

          .directory-icons-box {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-gap: 10px;
            top: 10px;
            width: 100%;
            height: auto;
            box-sizing: border-box;
            padding: 10px;
          }

          .directory-icons-item {
            width: auto;
            height: auto;
            box-sizing: border-box;
            padding: 10px;
          }

          .directory-icons-item-image-box {
            display: flex;
            width: 60px;
            height: 60px;
            margin: 0 auto 5px;
            border-radius: 15px;
            background: white;
          }

          .directory-img {
            width: 30px;
            height: 30px;
            margin: auto;
          }

          .directory-icons-name {
            width: 100%;
            height: auto;
            margin: 0 auto;
            box-sizing: border-box;
            font-weight: bold;
            font-size: 0.8em;
            text-align: center;
            color: black;
          }

          @keyframes expansion {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.2);
            }
          }

          @keyframes reduction {
            from {
              transform: scale(1.2);
            }
            to {
              transform: scale(1);
            }
          }
        </style>

        <div class="directory-icons-box">
          <div class="directory-icons-item" data-value="recentfile">
            <div class="directory-icons-item-image-box">
              <img src="images/all.png" class="directory-img" />
            </div>
            <p-wc class="directory-icons-name" text="recentfile"></p-wc>
          </div>
          <div class="directory-icons-item" data-value="picture">
            <div class="directory-icons-item-image-box">
              <img src="images/picture.png" class="directory-img" />
            </div>
            <p-wc class="directory-icons-name" text="picture"></p-wc>
          </div>
          <div class="directory-icons-item" data-value="video">
            <div class="directory-icons-item-image-box">
              <img src="images/video.png" class="directory-img" />
            </div>
            <p-wc class="directory-icons-name" text="video"></p-wc>
          </div>
          <div class="directory-icons-item" data-value="music">
            <div class="directory-icons-item-image-box">
              <img src="images/music.png" class="directory-img" />
            </div>
            <p-wc class="directory-icons-name" text="music"></p-wc>
          </div>
          <div class="directory-icons-item" data-value="document">
            <div class="directory-icons-item-image-box">
              <img src="images/document.png" class="directory-img" />
            </div>
            <p-wc class="directory-icons-name" text="document"></p-wc>
          </div>
          <div class="directory-icons-item" data-value="add">
            <div class="directory-icons-item-image-box">
              <img src="images/add.png" class="directory-img" />
            </div>
            <p-wc class="directory-icons-name" text="add"></p-wc>
          </div>
        </div>
      `;
    }
  }
);
