

customElements.define('directory-contents-icons',
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

    .directory-icons-container {
      width: 100%;
      height: auto;
      box-sizing: border-box;
    }

    .directory-icons-contents {
      display: flex;
      flex-wrap: wrap;
      overflow-y: scroll;
      width: 100%;
      height: auto;
      border: 1px solid #EAEAEA;
      box-sizg: border-box;
      box-shadow: 3px 3px #EAEAEA;
    }

    .directory-icons-contents>div {
      width: 16%;
      height: 16%;

      border: 1px solid #EAEAEA;
      box-sizing: border-box;
    }
    </style>

    <div class="directory-icons-container">
      <div class="directory-icons-contents">
        <div>ewg</div>
        <div>ewewg</div>
        <div>egewe</div>
        <div>eweewe</div>
        <div>eewggwewg</div>
        <div>ewgew</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    `;
  }
});
