function hide () {
    document.getElementById("modal").style.display = "none";
}

function show (header,text, experience) {
    document.querySelector("#modal > article > h3").innerHTML = header;
    document.querySelector("#modal > article > p").innerHTML = text;
    document.querySelector("#modal > article > ul").innerHTML = experience.map(x => '<li>' + x + '</li>').join('');
    document.getElementById("modal").style.display = "block";
}