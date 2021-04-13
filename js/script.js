import typewriter from './typewriter.js';

window.onload = async () => {
    await typewriter("Jules Immerzeel", "header-name");
    typewriter("A Computer Science student", "header-subtext");

    let container = document.querySelector(".container").getBoundingClientRect();
    document.getElementById("modal").style.left = `${container.left}px`;
}