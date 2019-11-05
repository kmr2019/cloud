customElements.define('main-login',
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
    let login_button = this.shadowDOM.querySelectorAll(".login-button");
    let basic = this.shadowDOM.querySelector("login-basic");
    let token = this.shadowDOM.querySelector("login-token");
    token.style.display = "none";

    login_button.forEach((list) =>{
      list.onclick = ()=> {

        if(list.getAttribute("data-value") ==  "basic") {   //undeifined
          basic.style.display = "block";
          token.style.display = "none";
          login_button[0].style.background = "#EAEAEA";
          login_button[1].style.background = "white";
        } else {
          basic.style.display = "none";
          token.style.display = "block";
          login_button[0].style.background = "white";
          login_button[1].style.background = "#EAEAEA";
        }
      }
    });

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

    .login-container {
      display: flex;
      width: 100%;
      height: 800px;
      margin: 0 auto;
      box-sizing: border-box;
    }

    .login-box {
      width: 500px;
      height: auto;
      margin: auto;
      border: 1px solid #EAEAEA;
      box-shadow: 5px 5px 5px #EAEAEA;
    }

    .basic-login-box, .token-login-box {
      display: inline-block;
      width: 50%;
      height: 70px;
      border: 1px solid #EAEAEA;
      background: #EAEAEA;
      box-sizing: border-box;
      box-shadow: 3px 3px #EAEAEA;
    }

    .token-login-box {
      background: white;
    }

    .basic-login-box>p, .token-login-box>p {
      margin: 0;
      font-weight: bold;
      font-size: 1.5em;
      line-height: 70px;
      text-align: center;
      color: gray;
    }

    @media (max-width: 991px) { /* 태블릿 디바이스 (가로 해상도가 992px 보다 작은 화면에 적용) */
      .login-container {
        height: 700px;
      }

      .login-box {
        width: 400px;
      }

      .basic-login-box, .token-login-box {
        height: 60px;
      }

      .basic-login-box>p, .token-login-box>p {
        font-size: 1.3em;
        line-height: 60px;
      }
    }

    @media (max-width: 767px) { /* 가로모드 모바일 디바이스 (가로 해상도가 768px 보다 작은 화면에 적용) */
      .login-container {
        height: 600px;
      }

      .login-box {
        width: 350px;
      }

      .basic-login-box, .token-login-box {
        height: 50px;
      }

      .basic-login-box>p, .token-login-box>p {
        font-size: 1.1em;
        line-height: 50px;
      }
    }

    @media (max-width: 575px) { /* 세로모드 모바일 디바이스 (가로 해상도가 576px 보다 작은 화면에 적용) */
      .login-container {
        height: 550px;
      }

      .login-box {
        width: 330px;
      }

      .basic-login-box, .token-login-box {
        height: 45px;
      }

      .basic-login-box>p, .token-login-box>p {
        font-size: 1em;
        line-height: 45spx;
      }
    }
    </style>

    <div class="login-container">
      <div class="login-box">
        <div class="basic-login-box"> <p class="login-button" data-value="basic">BASIC</p> </div>
        <div class="token-login-box"> <P class="login-button"  data-value="token">TOKEN</P> </div>
        <login-basic></login-basic>
        <login-token></login-token>
      </div>
    </div>
    `;
  }
});
