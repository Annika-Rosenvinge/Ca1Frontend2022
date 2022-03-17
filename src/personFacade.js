//her sker alt koden for at finde, slette, redigere og oprette personer

const URL = "https://arosenvinge.dk/ca1/api/person";

function urlFunction(){
    fetch(URL)
        .then(handleHttpErrors)
        .then(data => console.log(data.name))
        .catch(error =>{
            if(error.status){
                error.fullError.then(e=> console.log(e.msg))
            }
            else{
                console.log("Network Error")
            }
        });
    }

function getStatus(){
    return fetch(URL + "/status")
    }

function createPerson(person){
    const options = makeOptions('POST', person);
    return fetch(URL + '/create', options).then(res => handleHttpErrors(res));
}

function getAllPersons(DOMElement){
    return fetch(URL + "/all")
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            //console.log(data.all);
            const allData = data.all;
            const personsInList = document.querySelector('#getUserTable');
            for (let persons of allData){
                //Alle personer bliver sat i en tabel der selv autogeneres
                //der bliver indsat en ny række for hver person, så de ikke overskrider hinanden
                let tr = DOMElement.insertRow(0);
                //her bliver hver celle udfyldt, rækken og den første celle skal have samme index, fordi js
                let c0 = tr.insertCell(0);
                let c1 = tr.insertCell(1);
                let c2 = tr.insertCell(2);
                let c3 = tr.insertCell(3);
                let c4 = tr.insertCell(4);
                let c5 = tr.insertCell(5);
                let c6 = tr.insertCell(6);
                let c7 = tr.insertCell(7);
                let c8 = tr.insertCell(8);
                let c9 = tr.insertCell(9);

                // nu skal hver celle have en værdi hver
                //dette kunne også have været sat hvor cellen initialiseres, men for overskueligheden, så er det her
                c0.innerHTML = persons.id;
                c1.innerHTML = persons.firstname;
                c2.innerHTML = persons.lastname;
                c3.innerHTML = persons.email;
                c4.innerHTML = persons.hobbyList[0].name;
                c5.innerHTML = persons.phoneList[0].phonenumber;
                c6.innerHTML = persons.phoneList[0].description;
                c7.innerHTML = persons.address.street;
                c8.innerHTML = persons.address.cityInfo.city;
                c9.innerHTML = persons.address.cityInfo.zipcode;

            }
        })
    }

function getPersonById(id){
    return fetch(URL + '/' + id).then(res => handleHttpErrors(res));
}

function deletePersonById(id){
    const options = makeOptions('DELETE', {id});
    return fetch(URL + '/delete/' + id, options).then(res => handleHttpErrors(res))
}

function editPerson(id, person){
    const options = makeOptions('PUT', person);
    return fetch(URL + '/update/' + id, options) .then(result => handleHttpErrors(result));
}

function makeOptions(){
    const options = {
        method: method,
        headers: {
            "Content-type" : "application/json",
            "Accept" : "application/json"
        }
    }
    if (body){
        options.body = JSON.stringify(body);
    }
    return options;
}

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

const personFacade ={
    getStatus,
    createPerson,
    getAllPersons,
    getPersonById,
    deletePersonById
}
export default personFacade;
