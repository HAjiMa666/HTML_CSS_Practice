const btn = document.querySelector("button");
const jokecontent = document.querySelector(".container div");
btn.addEventListener("click", generateJoke)

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    jokecontent.textContent = data.joke;
}

