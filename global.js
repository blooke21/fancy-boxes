$(document).ready(function () {

    function randomNumber(num) {
        return Math.floor(Math.random() * num)
    }

    var boxOne = (randomNumber(3) * .25) + .25;

    $(":root").css({ "--boxOne": boxOne, "--boxTwo": boxTwo, "--boxThree": boxThree })

    $(".box-container").each(function () { //loads inside-box to random corner
        var ranLocation = randomNumber(4);
        var width = ($(this).width() - $(this).find(".inside-box").width() + 2);
        var height = ($(this).height() - $(this).find(".inside-box").height() + 2);
        console.log("width: " + width + "\nheight: " + height)

        // 0 = box will be on top-left
        // 1 = box will be on top-right
        // 2 = bottom-left
        // 3 = bottom-right
        if (ranLocation == 1) {
            $(this).find(".inside-box").css("margin-left", width)
            console.log("top-right")
        } else if (ranLocation == 2) {
            $(this).find(".inside-box").css("margin-top", height)
            console.log("bottom-left")
        } else if (ranLocation == 3) {
            $(this).find(".inside-box").css("margin-left", width)
            $(this).find(".inside-box").css("margin-top", height)
            console.log("bottom-right")
        } else {
            console.log("top-left")
        }
    })


});