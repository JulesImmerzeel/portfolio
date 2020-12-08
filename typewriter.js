export default function typewriter(elementId, textToWrite) {

    const textArray = textToWrite.split('');
    let textOutputArray = [];

    for(let i = 0; i < textArray.length; i++) {
        textOutputArray.push(textArray[i]);
        document.getElementById(elementId).innerText = textOutputArray.join('');
    }
}