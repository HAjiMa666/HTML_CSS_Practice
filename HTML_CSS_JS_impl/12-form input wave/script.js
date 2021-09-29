const emailLabel = document.querySelector("label[for='email']");
const pwdLabel = document.querySelector("label[for='pwd']");

const RegEXP = /\S/g;
replaceLabel(pwdLabel.textContent, RegEXP, pwdLabel);
replaceLabel(emailLabel.textContent, RegEXP, emailLabel);


function replaceLabel(content, RegEXP, inserEl) {
    const result = content.matchAll(RegEXP);
    inserEl.innerHTML = "";
    [...result].map((item, index) => {
        inserEl.insertAdjacentHTML("beforeend", `<span style="transition-delay:${index * 50}ms">${item}</span>`);
    })
}
