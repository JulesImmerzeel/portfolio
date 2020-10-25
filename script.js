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
    document.getElementById("popup").style.display = "none";
}

function show(text) {
    console.log("show")
    document.querySelector("#popup > article").innerHTML = text
    document.getElementById("popup").style.display = "flex";

}