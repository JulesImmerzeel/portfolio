import typewriter from './typewriter.js';

window.onload = async () => {
    skillAnimation();
    await typewriter("Jules Immerzeel", "header-name");
    typewriter("A Computer Science student", "header-subtext");
}

function skillAnimation() {
    const skills = document.getElementsByClassName('progress-done');
    for(let skill of skills) {
        skill.style.width = skill.getAttribute('data-done') + '%';
        skill.style.opacity = 1;
    }
}