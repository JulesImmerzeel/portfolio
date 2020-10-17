window.onload = function skillAnimation() {
    console.log('skillAnimation loaded');

    const skills = document.getElementsByClassName('progress-done')
    for(let skill of skills) {
        skill.style.width = skill.getAttribute('data-done') + '%';
        skill.style.opacity = 1;
    }
}
