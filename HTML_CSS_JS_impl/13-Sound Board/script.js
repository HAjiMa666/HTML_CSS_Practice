const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.querySelector("#buttons");
const audios = document.querySelectorAll("audio");
sounds.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.setAttribute("class", "btn");
    btn.textContent = item;
    btn.addEventListener("click", () => {
        // 利用排他思想,在播放前,将其他播放的音乐暂停,并且把时间设置为0
        audios.forEach(item => {
            item.pause();
            item.currentTime = 0;
        })
        audios[index].play()
    })
    buttons.append(btn);
})