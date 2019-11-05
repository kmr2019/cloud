
customElements.define('directory-contents-details',
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


    </style>


    `;
  }
});
