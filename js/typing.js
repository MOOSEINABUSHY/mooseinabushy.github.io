var i = 0;
var txt = 'Jason Kwan';
var typingSpeed = 125;

function typingText() {
    if (i < txt.length) {
        document.getElementById("name").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typingText, typingSpeed);
    }
}
