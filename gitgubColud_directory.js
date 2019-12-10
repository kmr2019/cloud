const file_list = [
  "박준렬 연애 목록.xls",
  "choi.jpg",
  "사업 성공.pdf",
  "image.css",
  "index.html",
  "최종 ppt.ppt",
  "park.jpg",
  "탈모탈출.pdf",
  "테스트1.pdf",
  "테스트2.pdf",
  "테스트3.pdf",
  "테스트4.pdf",
  "테스트5.pdf",
  "테스트6.pdf",
  "테스트7.pdf",
  "테스트8.pdf",
  "테스트9.pdf",
  "테스트10.pdf",
  "테스트11.pdf",
  "테스트12.pdf",
  "테스트13.pdf",
  "테스트14.pdf",
  "테스트15.pdf",
  "테스트16.pdf",
  "테스트17.pdf",
  "테스트18.pdf",
  "테스트19.pdf",
  "탈모20.pdf",
  "테스트21.pdf",
  "테스트22.pdf",
  "테스트23.pdf",
  "테스트24.pdf",
  "테스트25.pdf",
  "테스트26.pdf",
  "테스트27.pdf",
  "테스트28.pdf",
  "테스트29.pdf",
  "탈모30.pdf",
  "테스트31.pdf",
  "테스트32.pdf",
  "테스트33.pdf",
  "테스트34.pdf",
  "테스트35.pdf",
  "테스트36.pdf",
  "테스트37.pdf",
  "테스트38.pdf",
  "테스트39.pdf"
];

const extension = {
  xls: "images/xls.png",
  javascript: "images/javascript.png",
  css: "images/css.png",
  pdf: "images/pdf.png",
  html: "images/html.png",
  ppt: "images/ppt.png"
};

customElements.define(
  "main-directory",
  class extends HTMLElement {
    static get observedAttributes() {}

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({
        mode: "open"
      });
      render(this.template(), this.shadowDOM);
      console.log("constructed!");
    }

    connectedCallback() {
      let directory_icons = this.shadowDOM.querySelector("directory-icons");
      let directory_file_view_components = this.shadowDOM.querySelector(
        "directory-file-view"
      );

      var observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type == "attributes") {
            this.value = directory_icons.getAttribute("index");
            directory_file_view_components.setAttribute("type", this.value);
          }
        });
      });

      observer.observe(directory_icons, {
        attributes: true
      });

      let string_file = JSON.stringify(file_list);

      directory_file_view_components.setAttribute("list", string_file);
    }

    disconnectedCallback() {
      console.log("disconnected!");
    }

    attributeChangedCallback(name, old_value, new_value) {
      console.log(`Attribute: ${name} changed to ${new_value}`);
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

          .directory-container {
            width: 100%;
            height: 600px;
          }

          .directory-contents {
            overflow-y: auto;
            width: 100%;
            height: 600px;
            box-sizing: border-box;
            margin: 0 auto;
            background: #e7e7e7;
          }

          @keyframes full-list-position {
            from {
              top: 0px;
            }
            to {
              top: -100px;
            }
          }

          @media (min-width: 576px) {
          }

          @media (min-width: 768px) {
          }

          @media (min-width: 992px) {
          }
        </style>

        <div class="directory-container">
          <div class="directory-contents">
            <directory-icons></directory-icons>
            <directory-file-view></directory-file-view>
          </div>
        </div>
      `;
    }
  }
);
