// Write all your JavaScript and JQuery code in this file! :)
/* START PROVIDED CODE */
function randomX() {
  return Math.random() * $(window).width();
}

function randomY() {
  return Math.random() * $(window).height();
}
$("#moveButton").on("click", function () {
    // $(this) refers to the element that was clicked
    $("#message").css("left",randomX())
    $("#message").css("top",randomY())
});



/* END PROVIDED CODE */

// Write your code below this line :)
