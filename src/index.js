import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import * as bootstrap from 'bootstrap';
import '@popperjs/core';
import $ from 'jquery';
import personFacade from "./personFacade";

document.getElementById("all-content").style.display = "block"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/
//henter alle Personer
const personsTable = document.querySelector('#allPersonsTable');
personFacade.getAllPersons(personsTable);



//create person
function createPerson(){
  const firstname = document.getElementById("personFirstName").value;
  const lastname = document.getElementById("personLastName").value;
  const email = document.getElementById("personEmail").value;
  const hobbyName = document.getElementById("hobbyName").value;
  const hobbyCat = document.getElementById("hobbyCat").value;
  const hobbyType = document.getElementById("hobbyType").value;
  const hobbyWiki = document.getElementById("hobbyWiki").value;
  const phoneNum = document.getElementById("phoneNum").value;
  const phoneDes = document.getElementById("phoneDes").value;
  const street = document.getElementById("street").value;
  const city = document.getElementById("city").value;
  const zipcode = document.getElementById("zipcode").value;

  const cityInfo = {
    "zipcode" : zipcode,
    "city" : city
  }
  const address = {
    "street" : street,
    "cityInfo" : cityInfo
  }

  const phone = {
    "phonenumber" : phoneNum,
    "description" : phoneDes
  }
  const phoneList = [
      phone
  ]

  const hobby = {
    "name" : hobbyName,
    "category" : hobbyCat,
    "type" : hobbyType,
    "wikiLink" : hobbyWiki
  }
  const hobbyList = [
      hobby
  ]

  const person = {
    "firstname" : firstname,
    "lastname" : lastname,
    "email" : email,
    "phoneList" : phoneList,
    "hobbyList" : hobbyList,
    "address" : address
  }

  console.log(JSON.stringify(person));
  personFacade.createPerson(person)
}

//delete person
function deletePerson(){

}



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



