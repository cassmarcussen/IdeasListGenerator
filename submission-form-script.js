function alertFields(){
    let ideaName = document.getElementById("idea-name").value;
    let submitterName = document.getElementById("submitter-name").value;
    let ideaListSelect = document.getElementById("idea-list-select").value;
    let ideaDescription = document.getElementById("idea-description").value;
    alert("Idea Name: " + ideaName + "\nSubmitter Name: " + submitterName + "\nIdea List selected: " + ideaListSelect + "\nIdea Description: " + ideaDescription);
}