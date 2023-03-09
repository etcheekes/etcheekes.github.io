
function revealAboutText(){

    // reveal and hide text in about.html page

    let selectOptions = document.querySelector('#selectOptions');
    let instructVisitor = document.querySelector('#instruct-visitor');
    let programmingJourney = document.querySelector('#programming-journey');
    let decisionToProgram = document.querySelector('#decision-to-program');
    let education = document.querySelector('#education');

    // run upon initial page load or reloads
    if (selectOptions.value === "instruct-visitor"){
        instructVisitor.style.display = "block";
    }
    else {
        instructVisitor.style.display = "none";
    }
    if (selectOptions.value === "programming-journey"){
        programmingJourney.style.display = "block";
    }
    else {
        programmingJourney.style.display = "none";
    }
    if (selectOptions.value === "decision-to-program"){
        decisionToProgram.style.display = "block";
    }
    else {
        decisionToProgram.style.display = "none";
    }
    if (selectOptions.value === "education"){
        education.style.display = "block";
    }
    else {
        education.style.display = "none";
    }

    // add event listener

    selectOptions.addEventListener("change", function(){
        if (selectOptions.value === "instruct-visitor"){
            instructVisitor.style.display = "block";
        }
        else {
            instructVisitor.style.display = "none";
        }
        if (selectOptions.value === "programming-journey"){
            programmingJourney.style.display = "block";
        }
        else {
            programmingJourney.style.display = "none";
        }
        if (selectOptions.value === "decision-to-program"){
            decisionToProgram.style.display = "block";
        }
        else {
            decisionToProgram.style.display = "none";
        }
        if (selectOptions.value === "education"){
            education.style.display = "block";
        }
        else {
            education.style.display = "none";
        }

    });
};

function revealProjectText(){

    // reveal and hide text in index.html page

    let selectOptions = document.querySelector('#selectOptions');
    let instructVisitor = document.querySelector('#instruct-visitor');
    let innerWorkings = document.querySelector('#inner-workings');
    let technicalExperience = document.querySelector('#technical-experience');

    // run upon initial page load or reload

    // event listener for change
    if (selectOptions.value === "instruct-visitor"){
        instructVisitor.style.display = "block";
    }
    else {
        instructVisitor.style.display = "none";
    }
    if (selectOptions.value === "inner-workings"){
        innerWorkings.style.display = "block";
    }
    else {
        innerWorkings.style.display = "none";
    }
    if (selectOptions.value === "technical-experience"){
        technicalExperience.style.display = "block";
    }
    else {
        technicalExperience.style.display = "none";
    }

    selectOptions.addEventListener("change", function(){
        if (selectOptions.value === "instruct-visitor"){
            instructVisitor.style.display = "block";
        }
        else {
            instructVisitor.style.display = "none";
        }
        if (selectOptions.value === "inner-workings"){
            innerWorkings.style.display = "block";
        }
        else {
            innerWorkings.style.display = "none";
        }
        if (selectOptions.value === "technical-experience"){
            technicalExperience.style.display = "block";
        }
        else {
            technicalExperience.style.display = "none";
        }
    })
}


function alterIframeDimensions(){

    // if window is below X width then make google forms width smaller and add scrolling to the google form

    let iframe = document.querySelector('iframe');

    // check if initial screen size below 675
    if (window.innerWidth <= 675) {
        iframe.setAttribute('scrolling', 'yes');
        iframe.setAttribute('width', '340');
        iframe.setAttribute('height', '400');
    }
    else {
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('width', '640');
        iframe.setAttribute('height', '676');
    }
    

    // add event listener for screen size changes
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 675) {
            iframe.setAttribute('scrolling', 'yes');
            iframe.setAttribute('width', '340');
            iframe.setAttribute('height', '400');
            
        }
        else {
            iframe.setAttribute('scrolling', 'no');
            iframe.setAttribute('width', '640');
            iframe.setAttribute('height', '676');
        }
    })
};

function convertColsToRows(screenWidth){

    // change col class to row class so page is responsive to smaller screens

    // reference each element with the col class
    let elements = document.querySelectorAll('.col');

    // check if initial screen width below screenWidth value
    if (this.window.innerWidth < screenWidth){
        for (let i = 0; i < elements.length; i += 1){
            elements[i].className = "row"
        }
    }
    // make col if row
    else {
        for (let i = 0; i < elements.length; i += 1){
            if (elements[i].className === "row")
            elements[i].className = "col"
        }
    }

    // add event listener to each element to keep checking for any screen size change
    window.addEventListener('resize', function() {
        // if screen size is below x amount then change each col class to row
        if (this.window.innerWidth < screenWidth){
            for (let i = 0; i < elements.length; i += 1){
                elements[i].className = "row"
            }
        }
        // make col if row
        else {
            for (let i = 0; i < elements.length; i += 1){
                if (elements[i].className === "row")
                elements[i].className = "col"
            }
        }
    })
};

function toggleElementWithId(id, screenWidth){

    let toggled = document.querySelector(id);

    // if screen width lower than x number then reveal
    window.addEventListener('resize', function() {
        if (this.window.innerWidth < screenWidth){
            toggled.hidden = false;
        }
        else {
            toggled.hidden = true;
        }
    })
}