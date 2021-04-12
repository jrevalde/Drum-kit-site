/*var i = 0;

while (i < document.querySelectorAll(".drum").length)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {alert("got clicked g");} )
    i++;
}*/


/*the if statement version
var i = 0;

while (i < document.querySelectorAll(".drum").length)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
       
        if (this === document.querySelectorAll(".drum")[0])
        {
            var drum_sound = new Audio("sounds/crash.mp3");
            drum_sound.play();
        }

    } )
    i++;
}*/

//the switch case version

var i = 0;

while (i < document.querySelectorAll(".drum").length)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        let letter = this.innerHTML;

        switch(letter)
        {
            case "w":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;

            case "a":
                let kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;

            case "s":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;

            case "d":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;

            case "j":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;

            case "k":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;

            case "l":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;

            default:
        }

    } )
    i++;
}





