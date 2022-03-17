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

//get specifik person
document.getElementById("findPersonButton").addEventListener("click", event => findPerson());

//create person
document.getElementById("addAPersonButton").addEventListener("click", event => createPerson());

//delete person
document.getElementById("deletePersonByIdButton").addEventListener("click", event => deletePerson());

//edit person
document.getElementById("editPersonButton").addEventListener("click", event => editPerson());



//create person func
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

//delete person func
function deletePerson(){
const id = document.getElementById("deletePersonText").value;

personFacade.deletePersonById(id).then(person =>{
  document.getElementById("deletePersonByIdDiv").innerHTML = `
    <h5 style = "margin-top:20px">>Den person der er blevet slettet</h5>
      <table>
        <tr><td>Id:</td><td>${person.id}</td></tr>
        <tr><td>Fornavn:</td><td>${person.firstname}</td></tr>
        <tr><td>Efternavn:</td><td>${person.lastname}</td></tr>
        <tr><td>Email:</td><td>${person.email}</td></tr>
      </table>
    `
  console.log(person)
  })
    .catch(error => errorHandling(error))
}

//edit person func
function editPerson(){
  const id = document.getElementById("editPersonId").value;
  const fn = document.getElementById("editPersonFN").value;
  const ln = document.getElementById("editPersonLN").value;
  const person = {
    "id" : id,
    "firstname" : fn,
    "lastname" : ln
  }
  personFacade.editPerson(id, person);
}

function findPerson(){
  const id = document.getElementById("findPersonText").value;
  personFacade.getPersonById(id).then(person =>{
    document.getElementById("findPersonDiv").innerHTML =
      `<h5 style = "margin-top:20px">Her er personen</h5>
       <table>
        <tr><td>Id:</td><td>${person.id}</td></tr>
        <tr><td>Fornavn:</td><td>${person.firstname}</td></tr>
        <tr><td>Efternavn:</td><td>${person.lastname}</td></tr>
        <tr><td>Email:</td><td>${person.email}</td></tr>
        <tr><td>Telefon nummer:</td><td>${person.phoneList[0].phonenumber}</td></tr>
        <tr><td>Telefon beskrivelse:</td><td>${person.phoneList[0].description}</td></tr>
        <tr><td>Adresse</td>:</td><td>${person.address.street}</td></tr>
        <tr><td>By:</td><td>${person.address.cityInfo.city}</td></tr>
        <tr><td>Postnummer:</td><td>${person.address.cityInfo.zipcode}</td></tr>
        <tr><td>Hobby navn:</td><td>${person.hobbyList[0].name}</td></tr>
        <tr><td>Hobby link:</td><td>${person.hobbyList[0].wikiLink}</td></tr>
        <tr><td>Hobby kategori:</td><td>${person.hobbyList[0].category}</td></tr>
        <tr><td>Hobby type:</td><td>${person.hobbyList[0].type}</td></tr>
       </table>`

  })
}


function errorHandling(err){
  if (err.status){
    err.fullError.then(e => {
      $("#errorMessage").text(e.msg);
    })
  }
  else{
    $("#errorMessage").text("Network error. The user API is not responding.");
  }
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



