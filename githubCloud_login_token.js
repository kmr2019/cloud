customElements.define(
  "login-token",
  class extends HTMLElement {
    static get observedAttributes() {}

    constructor() {
      super();

      this.shadowDOM = this.attachShadow({
        mode: "open"
      });
      render(this.template(), this.shadowDOM);
      console.log("token-constructed!");
    }

    connectedCallback() {
      console.log("token-connected!");
    }

    disconnectedCallback() {
      console.log("disconnected!");
    }

    attributeChangedCallback(name, old_value, new_value) {
      console.log(`Attribute: ${name} changed to ${this.text}`);
    }

    adoptedCallback() {
      // 커스텀 엘리먼트가 새로운 다큐먼트로 이동되었을 때 호출
      console.log("adopted!");
    }

    template() {
      return html`
    <style>
    :host {
      margin: 0;
      padding: 0;
    }

    .token-container {
      width: 100%;
      height: auto;
      padding: 20px;
      box-sizing: border-box;
    }

    .token-Information-box {
      width: 90%;
      height: 100px;
      margin: 0 auto;
    }

    .token-login-text-box {
      width: 100%;
      height: 50px;
    }

    .token-login-text-box>p-wc {
      margin: 0;
      font-weight: bold;
      font-size: 2em;
      line-height: 50px;
      text-align: center;
    }

    .token-Information-list {
      width: 100%;
      height: 50px;
      margin: 0;
    }

    .token-Information-list>form {
      display: flex;
      width: 100%;
      height: 50px;
      box-sizing: border-box;
    }

    .token-label-text {
      margin: auto 0;
      float: left;
      width: 30%;
      margin-right: 2%;
    }

    .token-label-text>p-wc {
      width:100%;
      margin: 0;
      font-weight: bold;
      font-size: 1.2em;
      line-height: 30px;
      color: gray;
      text-align: right;
    }

    .input-box {
      margin: auto 0;
      float: left;
      width: 68%;
      height: 30px;
      padding: 0px;
      border-style: none;
      border-bottom: 1px solid gray;
      font-size: 1em;
      color: gray;
    }

    .token-remember-id-box {
      width: 90%;
      height: 15px;
      margin: 5px auto;
    }

    .token-remember-id-box>form{
      display: flex;
      justify-content: flex-end;
    }

    .token-checkbox {
      width: 15px;
      height: 15px;
      margin: auto 0;
    }

    .token-remember-text-box {
      width:auto;
      margin-left: 5px;
    }

    .token-remember-text-box>p-wc {
      margin: 0;
      font-size: .7em;
      line-height: 15px;
      color: gray;
    }

    .token-join-id-password-find {
      width: 90%;
      height: 20px;
      margin: 0 auto;
    }

    .token-join-id-password-link {
      list-style: none;
    }

    .token-join-id-password-link>p-wc {
      display: inline-block;
      margin: 0;
      padding: 0;
      font-weight: bold;
      font-size: .7em;
      line-height: 20px;
      color: gray;
    }

    .token-find {
      float: left;
    }

    .token-join {
      float: right;
    }

    .token-login-button-box {
      width: 90%;
      height: auto;
      margin: 25px auto 0;
    }

    .token-login-button {
      width: 100%;
      height: 40px;
      padding: 0;
      border: 1px solid gray;
      background: gray;
    }

    .token-login-button>p-wc {
      margin: 0px;
      font-weight: bold;
      font-size: 20px;
      line-height: 40px;
      color: #EAEAEA;
      text-align: center;
    }

    @media (max-width: 991px) { 
      .token-container {
        padding: 15px;
      }

      .token-Information-box {
        height: 90px;
      }

      .token-login-text-box {
        height: 45px;
      }

      .token-login-text-box>p-wc {
        font-size: 1.6em;
        line-height: 45px;
      }

      .token-Information-list {
        height: 45px;
      }

      .token-Information-list>form {
        height: 45px;
      }

      .token-label-text>p {
        font-size: 1em;
        line-height: 25px;
      }

      .input-box {
        height: 25px;
        font-size: .9px;
      }

      .token-login-button-box {
        margin: 20px auto 0;
      }
    }

    @media (max-width: 767px) { 
      .token-container {
        padding: 10px;
      }

      .token-Information-box {
        height: 80px;
      }

      .token-login-text-box {
        height: 40px;
      }

      .token-login-text-box>p-wc {
        font-size: 1.4em;
        line-height: 40px;
      }

      .token-Information-list {
        height: 45px;
      }

      .token-Information-list>form {
        height: 45px;
      }

      .token-label-text>p {
        font-size: .9em;
        line-height: 23px;
      }

      .input-box {
        height: 23px;
        font-size: .8px;
      }

      .token-login-button-box {
        margin: 15px auto 0;
      }
    }

    @media (max-width: 575px) { 
      .token-label-text>p {
        font-size: .8em;
      }

      .token-box {
        font-size: .7em;
      }
    }
    </style>

    <div class="token-container">
      <div class="token-Information-box">
        <div class="token-login-text-box"> <p-wc text="tokenLogin"></p-wc> </div>
        <div class="token-Information-list">
          <form>
            <label class="token-label-text" for="ID"> <p-wc text="token"></p-wc> </label>
            <input type="email" id="ID" class="input-box" autocomplete autofocus
            placeholder="example@example.com" required>
          </form>
        </div>
      </div>

      <div class="token-remember-id-box">
        <form>
          <input type="checkbox" id="remember" name="check" class="token-checkbox" value="check">
          <label class="token-remember-text-box" for="remember"> <p-wc text="tokenRemember"></p-wc> </label>
        </form>
      </div>

      <div class="token-join-id-password-find">
        <a href="https://www.naver.com/" class="token-join-id-password-link" target="_blank"> <p-wc class="token-find" text="tokenCreate"></p-wc> </a>
        <a href="https://www.naver.com/" class="token-join-id-password-link" target="_blank"> <p-wc class="token-join" text="join"></p-wc> </a>
      </div>

      <div class="token-login-button-box">
        <button class="token-login-button"><p-wc text="login"></p-wc></button>
      </div>
    </div>
    </style>


    `;
    }
  }
);
