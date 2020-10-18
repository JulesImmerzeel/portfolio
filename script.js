window.onload = function skillAnimation() {

    const skills = document.getElementsByClassName('progress-done')
    for(let skill of skills) {
        skill.style.width = skill.getAttribute('data-done') + '%';
        skill.style.opacity = 1;
    }
}
