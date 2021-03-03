var images = ['banner_atar', '250X110668568400', 'paz_250x110103131473'];
var i = 0;

function change() {
    var imgElement = document.getElementById("img");
    imgElement.src = "images/" + images[i] + ".jpg";
    i == images.length - 1 ? i = 0 : i++;
}

window.onload = function() {
    setInterval(change, 1500);
};