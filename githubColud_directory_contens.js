const extension = {
  xls:"xls.png",
  jpg:"jpg.png",
  js:"javascript.png",
  pdf:"pdf.png",
  css:"css.png",
  html:"html.png",
  png:"png,png",
  ppt:"ppt.png"
}

customElements.define('main-directory-contents',
class extends HTMLElement {

  static get observedAttributes() { //감시자
    // return ['text'];
  }

  constructor() { // 생성자
    super();

    this.shadowDOM = this.attachShadow({
      'mode': 'open'
    });
    render(this.template(), this.shadowDOM);
    console.log('constructed!');
  }

  connectedCallback() {
    console.log('connected!');
  }

  disconnectedCallback() {
    console.log('disconnected!');
  }

  attributeChangedCallback(name, old_value, new_value) {
    console.log(`Attribute: ${name} changed to ${this.text}`);
  }

  adoptedCallback() { // 커스텀 엘리먼트가 새로운 다큐먼트로 이동되었을 때 호출
    console.log('adopted!');
  }

  template() {
    return html `
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
      width: 90%;
      height: 500px;
      max-width: 1080px;
      margin: 0 auto;
      padding: 2%;
      border: 1px solid #EAEAEA;
      box-sizing: border-box;
      box-shadow: 3px 3px #EAEAEA;
    }

    @media (max-width: 991px) { /* 테블릿 모바일 디바이스 */
      .directory-container {
        height: 450px;
      }

      .directory-contents {
        height: 450px;
      }
    }

    @media (max-width: 767px) { /* 가로모드 모바일 디바이스 */
      .directory-container {
        height: 400px;
      }

      .directory-contents {
        height: 400px;
      }
    }

    @media (max-width: 575px) {  /* 세로모드 모바일 디바이스 */
      .directory-container {
        height: 350px;
      }

      .directory-contents {
        height: 350px;
      }
    }

    </style>

    <div class="directory-container">
      <div class="directory-contents">
        <directory-contents-icons></directory-contents-icons>
        <directory-contents-details></directory-contents-details>
      </div>
    </div>
    `;
  }
});
