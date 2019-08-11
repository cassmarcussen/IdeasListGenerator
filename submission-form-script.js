function submitButton(){
    alertFields();
    redirectToGeneratorPage();
}

//Get the filled out values and alert them
function alertFields(){
    
    let ideaName = document.getElementById("idea-name").value;
    let submitterName = document.getElementById("submitter-name").value;
    let ideaListSelect = document.getElementById("idea-list-select").value;
    let ideaDescription = document.getElementById("idea-description").value;
    alert("Idea Name: " + ideaName + "\nSubmitter Name: " + submitterName + "\nIdea List selected: " + ideaListSelect + "\nIdea Description: " + ideaDescription);
}

//Reroutes to the page where you will generate a random idea
function redirectToGeneratorPage(){
    window.location = "https://cassmarcussen.github.io/ideaslist/generate-idea-page.html";
}

//Clear all of the fields to fill out
function clearFields(){
    document.getElementById("idea-name").value = "";
    document.getElementById("submitter-name").value = "";
    document.getElementById("idea-list-select").value = "";
    document.getElementById("idea-description").value = "";
}