function hide () {
    document.getElementById("popup").style.display = "none";
}

function show (header,text, experience) {
    document.querySelector("#popup > article > h3").innerHTML = header;
    document.querySelector("#popup > article > p").innerHTML = text;
    document.querySelector("#popup > article > ul").innerHTML = experience.map(x => '<li>' + x + '</li>').join('');
    document.getElementById("popup").style.display = "block";
}