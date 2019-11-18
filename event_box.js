document.body.style.background = "url('images/background.jpeg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

window.alert = txt => {
    let dv= document.createElement("div");
    dv.innerHTML+=`<alert-custom data="${txt}"></alert-custom>`;
    document.body.appendChild(dv.firstChild);
  };

  window.confirm = txt => {
    let dv= document.createElement("div");
    dv.innerHTML+=`<confirm-custom data="${txt}"></confirm-custom>`;
    document.body.appendChild(dv.firstChild);
  };

  window.prompt = (txt) => {
    let dv= document.createElement("div");
    dv.innerHTML+=`<prompt-custom data="${txt}"></prompt-custom>`;
    document.body.appendChild(dv.firstChild);
  };