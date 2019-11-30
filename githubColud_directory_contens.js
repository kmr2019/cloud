const file_list = [
  "박준렬 연애 목록.xls",
  "choi.jpg",
  "사업 성공.pdf",
  "image.css",
  "index.html",
  "최종 ppt.ppt",
  "park.jpg",
  "탈모탈출.pdf"
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
      file_list.push("123.ppt");

      console.log(`Attribute: ${name} changed to ${new_value}`);
      let full_list_compomentes = this.shadowDOM.querySelector(
        "directory-full-list"
      );

      if (new_value == 1) {
        //  new_value == 0 으로 하면 else 부분에서 두번 접근
        if (new_value == old_value) {
        } else {
          full_list_compomentes.style.display = "grid";

          file_list.forEach(data => {
            this.count++;
            full_list_compomentes.setAttribute("list", data);
          });

          full_list_compomentes.setAttribute("count", this.count); // 물어보기
        }
      } else {
        this.count = 0;
        full_list_compomentes.style.display = "none";
      }
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

          @media (max-width: 991px) {
          }

          @media (max-width: 767px) {
          }

          @media (max-width: 575px) {
          }
        </style>

        <directory-full-list></directory-full-list>
      `;
    }
  }
);
