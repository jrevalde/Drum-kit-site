/*var i = 0;

while (i < document.querySelectorAll(".drum").length)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {alert("got clicked g");} )
    i++;
}*/

var i = 0;

while (i < document.querySelectorAll(".drum").length)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        var drum_sound = new Audio('sounds/crash.mp3');
        drum_sound.play();
    } )
    i++;
}





