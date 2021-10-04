var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3kQAZHgzH6SAix'}).base('app7PiRH6J2bC4tS9');

base('Table 1').select({}).eachPage(gotPageOfProjects,gotAllProjects); 

const projects= [];

function gotPageOfProjects(records,fetchNextPage){
    // console.log("gotPageOfProjects()");
    projects.push(...records);
    fetchNextPage();
}
// report an error 
function gotAllProjects(err){
    // console.log("gotAllProjects()");
    if(err){
       console.log("error loading projects");
        console.error(err);
        return;
    }
    //call functions to log and show the projects
    // consoleLogProjects();
   showProjects();
//    consoleLogProjects();
}

// loops through books and console logs them
// function consoleLogProjects(){
//     // console.log("consoleLogProjects()");
//     projects.forEach((project) => {
//         // console.log("project",project);
//     });
// }

//loop through projects and create an h2 element for each one and adds it to the page
function showProjects(){
   
    console.log("showProjects()");

    const projDisplay=document.getElementById("projDisplay");
projects.forEach((project) => {
  
// const projName= document.getElementById("projName");
//    const name = document.createElement("p");
// name.innerText=project.fields.Name;
// projName.appendChild(name);


// make id called  projDisplay, and class called proj-list, id project-detail

// create div and set its text and class
const projDiv=document.createElement("div");
projDiv.innerText=project.fields.Name;
projDiv.classList.add("proj-list");



//when user clicks the list, show call project and send book project to list element
projDiv.addEventListener("click", ()=> {

    showProject(project,projDiv);
});

projDisplay.appendChild(projDiv);
});
}
//show detail info for a project and highlight active project "spine/ list"

function showProject(project,projDiv){
    console.log("showProject()",project);

    //find project detail element
const projectDetail=document.getElementById("project-detail");
 
    //populate template with the data in the provided project
projectDetail.getElementsByClassName("name")[0].innerText=project.fields.Name;
projectDetail.getElementsByClassName("short-desc")[0].innerText=project.fields.shortdesc;
projectDetail.getElementsByClassName("long-desc")[0].innerText=project.fields.longdesc;
// projectDetail.getElementsByClassName("cover-image")[0].src=project.fields.pictures[0].url;
// projectDetail.getElementsByClassName("links")[0].href=project.fields.links;
// projectDetail.getElementsByClassName("creator")[0].innerText=project.fields.creator;
// projectDetail.getElementsByClassName("proj-year")[0].innerText=project.fields.projYear;
// projectDetail.getElementsByClassName("workName")[0].innerText=project.fields.workName;
// projectDetail.getElementsByClassName("work-desc")[0].innerText=project.fields.workDescription;
// projectDetail.getElementsByClassName("work-year")[0].innerText=project.fields.workYear;

//remove the .active class from any list of projects that have it
const projDisplay=document.getElementById("projDisplay");
const projLists=projDisplay.getElementsByClassName("active");
for( const projList of projLists){
    projList.classList.remove("active");
}
    projDiv.classList.add("active");
    projectDetail.classList.remove("hidden");




}