import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import * as bootstrap from 'bootstrap';
import '@popperjs/core';
import $ from 'jquery';

document.getElementById("all-content").style.display = "block"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For see persons */


/* JS For find persons */



/* JS For delete and create persons */


/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow)
{
  document.getElementById("velkommen_html").style = "display:block"

  document.getElementById("allePersoner_html").style = "display:none"
  document.getElementById("findPersoner_html").style = "display:none"
  document.getElementById("sletOpretPersoner_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt)
{
  const id = evt.target.id;
  switch (id)
  {
    case "allePersoner": hideAllShowOne("allePersoner_html"); break
    case "findPersoner": hideAllShowOne("findPersoner_html"); break
    case "sletOpretPersoner": hideAllShowOne("sletOpretPersoner_html"); break
    default: hideAllShowOne("velkommen_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("velkommen_html");



