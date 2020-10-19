function focusEvent(className) {
    const elements = document.getElementsByClassName(className);
    for(let element of elements){
        element.addEventListener("click", () => {element.style.backgroundColor = 'pink'});
        console.log('success')
    }
}


window.onload = function skillAnimation() {

    const skills = document.getElementsByClassName('progress-done');
    for(let skill of skills) {
        skill.style.width = skill.getAttribute('data-done') + '%';
        skill.style.opacity = 1;
    }

    focusEvent('progress-done')
    focusEvent('event')
}


