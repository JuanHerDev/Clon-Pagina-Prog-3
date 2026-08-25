const preciosUl = document.getElementById("preciosUl")

async function loadPrices() {
    const res = await fetch("prices.json");
    const prices = await res.json();

    prices.forEach((p) => {
        preciosUl.innerHTML +=
        `<li><span>${p.name}</span><span>$ ${p.price}</span> </li>`
    })
}

document.addEventListener("DOMContentLoaded", () => {
    loadPrices();
});

const audio = document.getElementById("song");
const playButton = document.getElementById("playButton");

audio.volume = 0.8;

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "⏸ Pause";
    } else {
        audio.pause();
        playButton.textContent = "▶ Play";
    }
});