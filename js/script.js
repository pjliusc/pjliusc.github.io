document.getElementById("media").style.display='none';
document.getElementById("projects").style.display='none';


const projectbutton = document.getElementById("project_button")
projectbutton.addEventListener("click", function() {
    projectbutton.classList.add("active")
    mediabutton.classList.remove("active")
    document.getElementById("media").style.display='none';
    document.getElementById("projects").style.display='';
});



const mediabutton = document.getElementById("media_button")
mediabutton.addEventListener("click", function() {
    projectbutton.classList.remove("active")
    mediabutton.classList.add("active")
    document.getElementById("projects").style.display='none';
    document.getElementById("media").style.display='';
});