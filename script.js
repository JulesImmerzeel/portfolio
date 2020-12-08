import typewriter from './typewriter.js';

window.onload = async () => {
    skillAnimation();
    await typewriter("Jules Immerzeel", "header-name");
    typewriter("A Computer Science student", "header-subtext");
}


function hide() {
    document.getElementById("popup").style.opacity = "0";
}

function show(header,text, experience) {
    document.querySelector("#popup > article > h3").innerHTML = header;
    document.querySelector("#popup > article > p").innerHTML = text;
    document.querySelector("#popup > article > ul").innerHTML = experience.map(x => '<li>' + x + '</li>').join('');
    document.getElementById("popup").style.opacity = "100";
}

function skillAnimation() {
    const skills = document.getElementsByClassName('progress-done');
    for(let skill of skills) {
        skill.style.width = skill.getAttribute('data-done') + '%';
        skill.style.opacity = 1;
    }
}