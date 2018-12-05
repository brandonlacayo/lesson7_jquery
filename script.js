/*
    Program Name: Recipe Display Application
    Author: Brandon Lacayo
    Date:   December 4, 2018
    Filename: script.js
*/

/* global $ */

//Displays the next element after the current target.
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display

//Attach the event listener to h3 elements to invoke display function when clicked.
$("h3").click(display);