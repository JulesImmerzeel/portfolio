function hide () {
    document.getElementById("modal").style.display = "none";
}

function show (header,text, experience) {
    document.querySelector("#modal h3").innerHTML = header;
    document.querySelector("#modal p").innerHTML = text;
    document.querySelector("#modal ul").innerHTML = experience.map(x => '<li>' + x + '</li>').join('');
    document.getElementById("modal").style.display = "block";
}

