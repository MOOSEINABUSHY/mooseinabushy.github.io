var i = 0;
var txt = '3D Environment Artist. Cat Owner.';
var typingSpeed = 60;

function typingText() {
    if (i < txt.length) {
        document.getElementById("type").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typingText, typingSpeed);
    }
}
