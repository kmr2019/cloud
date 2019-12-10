const msg = {
  ko: {
    hello: "안녕하세요",
    bye: "잘가",
    introduce: "소개",
    service: "서비스",
    directory: "탐색기",
    "log-in": "로그인",
    email: "kmr2019@naver.com",
    license: "라이센스",
    copyright: "COPYRIGHT(C) 2019.JUNGWONLEE.ALL RIGHTS RESERVED.",
    logo: "제목",
    basicLogin: "베이직 로그인",
    basicId: "아이디 :",
    basicPassword: "비밀번호 :",
    basic: "베이직",
    idRemember: "아이디 기억하기",
    join: "회원가입",
    idFind: "아이디 비밀번호 찾기",
    loginButton: "로그인",
    tokenLogin: "토큰 로그인",
    token: "토큰 :",
    tokenRemember: "토큰 유지",
    tokenCreate: "토큰 생성",
    tokenb: "토큰",
    icons: "모아보기",
    fullIist: "전체목록",
    picture: "사진",
    video: "동영상",
    music: "음악",
    document: "문서",
    login: "로그인",
    add: "추가",
    recentfile: "최근 파일",
    all: "전체",
  },
  "ko-kr": {
    hello: "안녕하세요",
    bye: "잘가",
    introduce: "소개",
    service: "서비스",
    directory: "탐색기",
    login: "로그인",
    email: "kmr2019@naver.com",
    license: "license",
    copyright: "COPYRIGHT(C) 2019.JUNGWONLEE.ALL RIGHTS RESERVED.",
    logo: "제목",
    basicLogin: "베이직 로그인",
    basicId: "아이디 :",
    basicPassword: "비밀번호 :",
    basic: "베이직",
    idRemember: "아이디 기억하기",
    join: "회원가입",
    idFind: "아이디 비밀번호 찾기",
    loginButton: "로그인",
    tokenLogin: "토큰 로그인",
    token: "토큰 :",
    tokenRemember: "토큰 유지",
    tokenCreate: "토큰 생성",
    tokenb: "토큰",
    icons: "모아보기",
    fullIist: "전체목록",
    picture: "사진",
    video: "동영상",
    music: "음악",
    document: "문서",
    login: "로그인",
    add: "추가",
    all: "recent file"
    ,
    recentfile: "최근 파일"
  },
  en: {
    hello: "hello",
    bye: "bye bye",
    introduce: "introduce",
    service: "service",
    directory: "directory",
    login: "login",
    email: "kmr2019@naver.com",
    license: "license",
    copyright: "COPYRIGHT(C) 2019.JUNGWONLEE.ALL RIGHTS RESERVED.",
    logo: "logo",
    basicLogin: "BASIC LOGIN",
    basicId: "ID :",
    basicPassword: "PASSWORD",
    basic: "BASIC",
    idRemember: "ID remember",
    join: "JOIN",
    idFind: "ID PASSWORD FIND",
    loginButton: "LOGIN",
    tokenLogin: "TOKEN LOGIN",
    token: "TOKEN :",
    tokenRemember: "TOKEN REMEMVER",
    tokenCreate: "TOKEN CREATE",
    tokenb: "TOKEN",
    icons: "icons",
    fullIist: "full list",
    picture: "picture",
    video: "video",
    music: "music",
    document: "document",
    login: "LOGIN",
    add: "add"
    ,
    recentfile: "recent file",all: "ALL",
  }
};

const i18n = {
  get language() {
    return this._lang;
  },

  set language(lang) {
    if (!this._msg) {
      this._msg = {};
    }

    if (!this._msg[lang]) {
      // TODO: fetch로 변경 필요
      this._msg[lang] = msg[lang];
    }

    this._lang = lang;

    for (let element of document.querySelectorAll("p-wc")) {
      let text = element.getAttribute("text");

      if (text) element.setAttribute("text", text);
    }
  },

  get message() {
    return this._msg[this._lang];
  }
};

i18n.language = (navigator.language || navigator.userLanguage).toLowerCase();

customElements.define(
  "p-wc",
  class extends HTMLElement {
    static get observedAttributes() {
      //감시자
      return ["text"];
    }

    constructor() {
      // 생성자
      super();
      this.shadowDOM = this.attachShadow({ mode: "open" });
      console.log("constructed!");
    }

    connectedCallback() {
      // 커스텀 엘리먼트가 처음으로 다큐먼트의 DOM 에 연결되었을 때 호출
      console.log("connected!");
    }

    disconnectedCallback() {
      // 커스텀 엘리먼트가 다큐먼트의 DOM 으로부터 연결 해제되었을 때 호출
      console.log("disconnected!");
    }

    attributeChangedCallback(name, old_value, new_value) {
      switch (name) {
        case "text":
          this.text = i18n.message[new_value];
          render(this.template(), this.shadowDOM);
          break;
      }

      console.log(`Attribute: ${name} changed to ${this.text}`);
    }

    adoptedCallback() {
      // 커스텀 엘리먼트가 새로운 다큐먼트로 이동되었을 때 호출
      console.log("adopted!");
    }

    template() {
      return html`
        <link href="normalize.css" />
        <link href="skeleton.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap"
          rel="stylesheet"
        />
        <style>
          :host {
            padding: 0;
            margin: 0;
          }
          p {
            padding: 5px;
            margin: 0;
          }
        </style>

        <p>${this.text}</p>
      `;
    }
  }
);
