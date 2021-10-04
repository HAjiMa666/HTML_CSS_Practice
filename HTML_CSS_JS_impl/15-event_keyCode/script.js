const tip = document.querySelector(".tip");
const body = document.querySelector("body");
//keyCode已被弃用,不应该在使用它
const keyBox = document.createElement("div");
keyBox.className = "keyBox";
window.addEventListener("keyup", (e) => {
    tip.style.display = "none";
    keyBox.innerHTML = `
    
        <div class="key">
        <small>event.key</small>
        <div class="box">
            ${e.key}
        </div>
        </div>

        <div class="key">
            <small>evnet.keyCode</small>
            <div class="box">
                ${e.code}            
            </div>
        </div>
    `
    body.append(keyBox);
})