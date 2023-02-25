let song = " "; 

function Do(){
    song += " до"
    document.getElementById("song").innerText = song;
}
function Re(){
    song += " ре"
    document.getElementById("song").innerText = song;
}
function Mi(){
    song += " ми"
    document.getElementById("song").innerText = song;
}
function Fa(){
    song += " фа"
    document.getElementById("song").innerText = song;
}
function Sol(){
    song += " соль"
    document.getElementById("song").innerText = song;
}
function La(){
    song += " ля"
    document.getElementById("song").innerText = song;
}
function Si(){
    song += " си"
    document.getElementById("song").innerText = song;
}
function clearText(){
    song = " "
    console.log(song);
    document.getElementById("song").innerText = song;
}
