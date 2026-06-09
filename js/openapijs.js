// working with the first search form Person look up


const BASE_URL = "https://www.swapi.tech/api/";
const errorMessage = document.querySelector("#error-message");
const personSearchPage = document.getElementById("character-results");
const personSearch = document.querySelector("#person_search_button");


    personSearch.addEventListener("click", function () {
         event.preventDefault();
        const inputedPersonName =
            document.getElementById("personName").value;
        if (inputedPersonName===null||inputedPersonName===""){
            personSearchPage.innerHTML = "";
            errorMessage.textContent = "Please input valid name.";
            document.getElementById("personName").value = "";
            return;
            personSearchPage.innerHTML = "";
            console.log('An error occurred:Please input valid name');
        }
        console.log("CLICK WORKS:", inputedPersonName);

        getPersonData(inputedPersonName);
    });

async function getPersonData(inputedPersonName){
    console.log("HELLO");
    try{
    console.log("Searching for:", inputedPersonName);
    const url = `${BASE_URL}people/?name=${inputedPersonName}`
     console.log(url);
    const person = await fetch(url);
  
     if (!person.ok) {
      throw new Error("Request failed");
      document.getElementById("personName").value = "";

    }
   
    const personData = await person.json();
if (personData.result===null||  personData.result.length === 0||personData.result===""){
    personSearchPage.innerHTML = "";
    errorMessage.textContent = "Character is not found. Try again.";
    document.getElementById("personName").value = "";
    console.log('An error occurred:Character is not found. Try again.');
    personSearchPage.innerHTML = "";
   return;
}
    errorMessage.textContent = ""; 
    console.log(personData.result);
    document.getElementById("personName").value = "";

    const personReceived = personData.result[0].properties;
    const birthYear = personReceived.birth_year;
    const description = personData.result[0].description;
    const name = personReceived.name;
    const gender = personReceived.gender;
    const height = personReceived.height;
    const mass = personReceived.mass;
    const hairColor = personReceived.hair_color;
console.log("Birthdate:",birthYear);
console.log("Description:", description);
console.log("Name:", name);
console.log("Gender:",gender);
console.log("Height:", height);
console.log("Weight:", mass);
console.log("Hair color:", hairColor);
personSearchPage.innerHTML = "";
let nameInfo = document.createElement("li");
nameInfo.innerHTML = name;
let descriptionInfo = document.createElement("li");
 descriptionInfo.innerHTML = description;
let birthYearInfo = document.createElement("li");
birthYearInfo.innerHTML = `Birthdate: ${birthYear}`;
let genderInfo = document.createElement("li");
 genderInfo.innerHTML = `Gender: ${gender}`;
let heightInfo = document.createElement("li");
 heightInfo.innerHTML = `Height: ${height}cm`;
let massInfo = document.createElement("li");
 massInfo.innerHTML = `Weight: ${mass}kg`;
let hairColorInfo = document.createElement("li");
 hairColorInfo.innerHTML =` Hair color: ${hairColor}`;
personSearchPage.appendChild(nameInfo);
personSearchPage.appendChild(descriptionInfo);
personSearchPage.appendChild(birthYearInfo);
personSearchPage.appendChild(genderInfo);
personSearchPage.appendChild(heightInfo);
personSearchPage.appendChild(massInfo);
personSearchPage.appendChild(hairColorInfo);
     
   
  } catch (error) {
   if(errorMessage){
    let errorMessage = document.querySelector("#error-message");
    errorMessage.innerHTML = "Something went wrong. Please try again.";
    console.error('An error occurred:', error);
    personSearchPage.innerHTML = "";
    document.getElementById("personName").value = "";


   }
  }
}

// working with the second search form Starship look up

const starshipSearchPage = document.getElementById("starship-results");
const starshipSearch = document.querySelector("#starship_search_button");

const errorMessageStar = document.querySelector("#error-message-star");
    starshipSearch.addEventListener("click", function () {
         event.preventDefault();
        const inputedStarshipName =
            document.getElementById("starshipName").value;
        if (inputedStarshipName===null||inputedStarshipName===""){
             starshipSearchPage.innerHTML = "";
            errorMessageStar.textContent = "Please input valid name.";
            document.getElementById("starshipName").value = "";
            
            console.log('An error occurred:Please input valid name');
            starshipSearchPage.innerHTML = "";
          
            return;
            
        }
       // console.log("CLICK WORKS:", inputedStarshipName);

        getStarshipData(inputedStarshipName);
    });

async function getStarshipData(inputedStarshipName){
    console.log("HELLO");
    try{
    console.log("Searching for:", inputedStarshipName);
    const url = `${BASE_URL}starships/?name=${inputedStarshipName}`
    console.log(url);
    const starship = await fetch(url);
  
     if (!starship.ok) {
      throw new Error("Request failed");
      document.getElementById("starshipName").value = "";

    }
   
    const starshipData = await starship.json();
if (starshipData.result===null||starshipData.result.length === 0||starshipData.result===""){
    starshipSearchPage.innerHTML = "";
    errorMessageStar.textContent = "Starship is not found. Try again.";
    document.getElementById("starshipName").value = "";
    console.log('An error occurred: Starship is not found. Try again.');
    starshipSearchPage.innerHTML = "";
    return;
   
 
}
    errorMessageStar.textContent = ""; 
    console.log(starshipData.result);
    document.getElementById("starshipName").value = "";

    starshipData.result.forEach(starship => {
    const properties = starship.properties;
    const description = starship.description;

    console.log(properties.name);
    console.log(properties.model);
    console.log(properties.max_atmosphering_speed);
    console.log(properties.crew);
    console.log(properties.length);
    console.log(properties.manufacturer);
   
});
starshipSearchPage.innerHTML = "";
const starshipResultsList = document.getElementById("starship-results");

starshipResultsList.innerHTML = ""; 

starshipData.result.forEach(starship => {
    const li = document.createElement("li");

     li.innerHTML = `
        <strong>${starship.properties.name}</strong><br>
        Model: ${starship.properties.model}<br>
        Crew: ${starship.properties.crew}<br>
        Class: ${starship.properties.starship_class}<br>
        Speed: ${starship.properties.max_atmosphering_speed}<br>
        Length: ${starship.properties.length}<br>
        Manufacturer: ${starship.properties.manufacturer}<br>
    `;

    starshipResultsList.appendChild(li);
});
   
  } catch (error) {
   if(errorMessage){
    let errorMessageStar = document.querySelector("#error-message-star");
    errorMessageStar.innerHTML = "Something went wrong. Please try again.";
    console.error('An error occurred:', error);
    starshipSearchPage.innerHTML = "";
    document.getElementById("starshipName").value = "";


   }
  }
}