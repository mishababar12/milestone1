// TypeScript code to toggle the visibility of the "Skills" section
// Get the skills section and the toggle button by their IDs
var skillsSection = document.getElementById("skills");
var toggleSkillsButton = document.getElementById("toggle-skills");
// Add an event listener to the button for toggling the visibility
toggleSkillsButton.addEventListener("click", function () {
    // Toggle the visibility of the skills section
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills Section";
    }
    else {
        skillsSection.style.display = "none";
        toggleSkillsButton.textContent = "Show Skills Section";
    }
});
// Initially, the Skills section is visible, so set the button text accordingly
toggleSkillsButton.textContent = "Hide Skills Section";
