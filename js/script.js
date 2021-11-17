// Get Elements from UI
//MATHEMATICAL SOLUTION
// Total number of surveys=number of times survey was taken
//Average Age = (sum of all ages)/(number of agesin survey)
//oldest person in survey ==max 


//define global variables
var surnameInput= document.getElementById("surname");
var firstnameInput=document.getElementById("firstname");
var contactInput=document.getElementById("contact");
var dateInput = document.getElementById("date");
var ageInput = document.getElementById("age");
var favouriteInput = document.getElementById("favourite");
var OKbutton= document.getElementById("OKbutton");
var submitBtn = document.getElementById('submitBtn');
var surveyForm = document.getElementById("surveyForm");
var eatout1 =document.getElementById("eatout");



//when the page loads
//check local storage for car data
//update form values using the car data
//Get Localstorage surveys if they existselse return empty 


const surveys = JSON.parse(localStorage.getItem("surveys")) || [];

const addSurvey=(surname, firstname, contact, date, age,favourites,choices ) => {
 


  surveys.push({surname,firstname,contact,date, age, favourites,choices});
  localStorage.setItem("Surveys",JSON.stringify(surveys));
  
};


 

//Page Redirect function
function indexRedirectFromSurvey() {
  alert("survey has been submitted");
  window.location.replace("index.html");
 
}

//Get the checkbox values
function getSelectedCheckboxValues(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  let values =[  ];
  checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
  });
  return values;
};

function getSelectedRadioValues(){
  const rbs = document.querySelectorAll('input[type="radio"]:checked');
            let selectedValues=[];
            
                rbs.forEach((rb)=> {
                    selectedValues.push(rb.value);
                  
                });
                return selectedValues ;
};


//if statement prevents error on other pages
if(surveyForm){                   
surveyForm.addEventListener("submit", function(event){
 
  event.preventDefault();
  indexRedirectFromSurvey()
// get values from the form inputs
const  newSurvey= addSurvey(
  firstnameInput.value,
  surnameInput.value,
  contactInput.value,
  dateInput.value,
  ageInput.value,
  getSelectedCheckboxValues('favourite'),
  getSelectedRadioValues('choices'),
);




// clear field 
firstnameInput.value="";
  surnameInput.value="";
  contactInput.value="";
  dateInput.value="";
  ageInput.value="";
  getSelectedCheckboxValues('favourite')="";
  getSelectedRadioValues('choices')="";
});

};





