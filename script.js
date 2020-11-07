// function focusEvent(className) {
//     const elements = document.getElementsByClassName(className);
//     for(let element of elements){
//         element.addEventListener("click", () => {element.style.backgroundColor = 'pink'});
//         console.log('success')
//     }
// }


window.onload = function skillAnimation() {

    const skills = document.getElementsByClassName('progress-done');
    for(let skill of skills) {
        skill.style.width = skill.getAttribute('data-done') + '%';
        skill.style.opacity = 1;
    }

    // focusEvent('progress-done')
    // focusEvent('event')
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