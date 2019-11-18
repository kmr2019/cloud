customElements.define(
  "main-directory-navi",
  class extends HTMLElement {
    static get observedAttributes() {
      //감시자
      return ["index"];
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
      let icon = this.shadowDOM.querySelectorAll(".navi-icon");
      icon[0].style.background = "#EAEAEA";
      this.setAttribute("index", 0);

      icon.forEach(list => {
        list.onclick = () => {
          if (list.getAttribute("data-value") == "icons") {
            icon[0].style.background = "#EAEAEA";
            icon[1].style.background = "white";
            this.setAttribute("index", 0);
            //this.test = 0;
          } else {
            icon[0].style.background = "white";
            icon[1].style.background = "#EAEAEA";
            this.setAttribute("index", 1);
            //this.test = 1;
          }
          //this.setAttribute("test",this.test);
        };
      });
      console.log("connected!");
    }

    disconnectedCallback() {
      console.log("disconnected!");
    }

    attributeChangedCallback(name, old_value, new_value) {
      console.log(name, old_value, new_value);
      console.log(`Attribute: ${name} changed to ${this.test}`);
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

          .navi-container {
            width: 100%;
            height: 50px;
            margin-top: 30px;
          }

          .navi-contents {
            width: 90%;
            height: 50px;
            max-width: 1080px;
            margin: 0 auto;
            border: 1px solid #eaeaea;
            box-shadow: 3px 3px #eaeaea;
          }

          .navi-list-box {
            display: flex;
            width: 100%;
            height: 50px;
          }

          .navi-icon {
            width: 35px;
            height: 35px;
            margin: auto 0 auto 20px;
            padding: 0;
            border: 1px solid #eaeaea;
            background: white;
            box-shadow: 3px 3px #eaeaea;
          }

          @media (max-width: 991px) {
            /* 태블릿 디바이스 (가로 해상도가 992px 보다 작은 화면에 적용) */
            .navi-container {
              height: 45px;
            }

            .navi-contents {
              height: 45px;
            }

            .navi-list-box {
              height: 45px;
            }

            .navi-icon {
              width: 35px;
              height: 35px;
            }
          }

          @media (max-width: 767px) {
            /* 가로모드 모바일 디바이스 (가로 해상도가 768px 보다 작은 화면에 적용) */
            .navi-container {
              height: 40px;
            }

            .navi-contents {
              height: 40px;
            }

            .navi-list-box {
              height: 40px;
            }

            .navi-icon {
              width: 30px;
              height: 30px;
            }
          }

          @media (max-width: 575px) {
            /* 세로모드 모바일 디바이스 (가로 해상도가 576px 보다 작은 화면에 적용) */
            .navi-container {
              height: 35px;
            }

            .navi-contents {
              height: 35px;
            }

            .navi-list-box {
              height: 35px;
            }

            .navi-icon {
              width: 25px;
              height: 25px;
            }
          }
        </style>

        <div class="navi-container">
          <div class="navi-contents">
            <div class="navi-list-box">
              <button class="navi-icon" data-value="icons"></button>
              <button class="navi-icon" data-value="details"></button>
            </div>
          </div>
        </div>
      `;
    }
  }
);
