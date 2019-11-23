document.body.style.background = "url('images/background.jpeg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

alert = txt => {
  let dv = document.createElement("div");
  dv.innerHTML += `<alert-custom data="${txt}"></alert-custom>`;
  document.body.appendChild(dv.firstChild);
};

function confirm(txt) {
  let dv = document.createElement("div");
  dv.innerHTML += `<confirm-custom data="${txt}"></confirm-custom>`;
  document.body.appendChild(dv.firstChild);
  
  return new Promise(resolve => {
    let confirm_custom = document.querySelector("confirm-custom");

    var observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type == "attributes") {
          this.value = confirm_custom.getAttribute("btn");

          if (this.value == 1) {
            resolve(true);
           
          } else {
            resolve(false); 
          }
        }
      });
    });
    
    observer.observe(confirm_custom, {
      attributes: true
    });
  });
}


prompt = (txt,input) => {
  let dv = document.createElement("div");
  dv.innerHTML += `<prompt-custom data="${txt}" input="${input}"></prompt-custom>`;
  document.body.appendChild(dv.firstChild);

  return new Promise(resolve => {
    let prompt_custom = document.querySelector("prompt-custom");

    var observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type == "attributes") {
          this.value = prompt_custom.getAttribute("btn");
          this.input = prompt_custom.getAttribute("input");

          if (this.value == 1) {
            console.log(this.input);
            resolve(true);
           
          } else {
            console.log(this.input);
            resolve(false); 
            
          }
        }
      });
    });
    
    observer.observe(prompt_custom, {
      attributes: true
    });
  });
};

