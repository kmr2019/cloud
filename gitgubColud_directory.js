const file_list = [
  {
    name: "박준렬 연애 목록.xls",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "choi.jpg",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "사업 성공.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "image.css",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "index.html",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "최종 ppt.ppt",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "park.jpg",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "탈모탈출.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트1.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트2.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트3.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트4.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트5.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트6.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트7.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트8.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트9.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트10.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트11.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트12.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트13.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트14.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트15.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트16.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트17.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트18.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트19.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  },
  {
    name: "테스트20.pdf",
    time: "",
    url: "",
    upload: "",
    extension:""
  }
];

const extension = {
  xls: "images/xls.png",
  javascript: "images/javascript.png",
  css: "images/css.png",
  pdf: "images/pdf.png",
  html: "images/html.png",
  pptx: "images/ppt.png",
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
            display: block;
            overflow-y: auto;
            width: 100%;
            height: calc(100% - 190px);
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

        <directory-icons></directory-icons>
        <directory-file-view></directory-file-view>
      `;
    }
  }
);
