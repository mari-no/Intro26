

let messageSection = document.querySelector("#messages");
let messageList = messageSection.querySelector("ul");

let today = new Date();
let thisYear = today.getFullYear();
let footer = document.createElement('footer');
let copyright = document.createElement("p");
let body = document.querySelector("body");

let messageForm = document.querySelector('[name="leave_message"]');

messageForm.addEventListener("submit", function(event){
event.preventDefault();
let newMessage = document.createElement("li");
let usersName =  event.target.usersName.value;
let usersEmail = event.target.usersEmail.value;
let usersMessage = event.target.usersMessage.value;

console.log(usersName,usersEmail, usersMessage);

newMessage.innerHTML = `<a href = "mailto: ${usersEmail}">  ${usersName} </a>
                        <span> ${usersMessage} </span>`;
let editButton = document.createElement("button");
editButton.innerText = "edit";
editButton.type = "button";
editButton.addEventListener("click", function(){
    if (editButton.textContent === "edit")
        {let entry = editButton.parentNode;
        let editedText = entry.querySelector("span");
        console.log(editedText);
        const input = document.createElement("input");
        input.type = "text";
        input.value = editedText.textContent;
        entry.insertBefore(input, editedText);
        console.log(input);
        entry.removeChild(editedText);
        editButton.textContent = "save";
    }
    else if (editButton.textContent === "save"){
        let entry = editButton.parentNode;
        const input = entry.querySelector("input");
        console.log(input);
        const span = document.createElement("span");
        span.textContent = input.value;
        entry.insertBefore(span, input);
        entry.removeChild(input);
        editButton.textContent = "edit";
    } 
  
})

let removeButton = document.createElement("button");
removeButton.innerText =  "remove";
removeButton.type = "button";
removeButton.addEventListener("click", function(){
    let entry = removeButton.parentNode;
    entry.remove();
    hideMessages();
   
})
newMessage.appendChild(removeButton);
newMessage.appendChild(editButton);
messageList.appendChild(newMessage);
hideMessages();
event.target.reset();
})
let messagesList = document.querySelector("#messages ul"); 
let messages = document.getElementById("messages");
function hideMessages(){
    if (messagesList.childElementCount === 0){
    messages.style.display = "none";
}else{
    messages.style.display = "block";
}
}
hideMessages();
copyright.innerHTML = `&copy; ${thisYear} Marina Nosova`;
body.appendChild(footer);
footer.appendChild(copyright);

let skills = [ "JavaScript", "HTML", "CSS", "GitHub","Agile & Scrum Frameworks","Project Planning & Execution",
	"Sprint & Release Management","Stakeholder Engagement","Resource Allocation & Budgeting","Risk Assessment & Mitigation",
	"Data analysis (SQL, NoSQL) & Data validation","Quality assurance","User Acceptance Testing (UAT)","Manual & Automated testing",
	"Process Improvement","Change Management","Performance Metrics & Reporting","Jira | Confluence | MS Project | Asana","Selenium WebDriver",
	"Cross-platform testing expertise: iOS, Android, Web, and POS environments","Splunk","XML","SOAP","REST API","Testlink",
	"Usability testing","Postman","Performance testing","Load testing","Defect analysis and management","Risk-based testing"]

let skillsSection = document.querySelector("#skills");
let skillsList = skillsSection.querySelector("ul");
for (let i = 0; i<skills.length; i++){
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

let heading = document.querySelector("h1");

heading.style.cursor = "pointer";
heading.addEventListener("click", function () {
  if (heading.style.color === "red") {
        heading.style.color = "blue";
    } else {
        heading.style.color = "red";
    }
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
hamburger.addEventListener("click",() => {
    nav.classList.toggle("show");

})
function fetchData() {
        fetch ('https://api.github.com/users/mari-no/repos')
            .then(response => {
                if (!response.ok){
                    throw new Error('Request failed');

                }
                return response.json();

            })
            .then(repositories => {
                console.log(repositories);
                const projectSection = document.querySelector("#Projects");
                const projectList = projectSection.querySelector("ul");
         
                for (let i=0; i<repositories.length; i++){
                const project = document.createElement("li");
                const projectLink = document.createElement("a");
                projectLink.href = repositories[i].html_url;
                projectLink.innerText= repositories[i].name;
                projectLink.target = "_blank";
                if (repositories[i].description){
                project.innerText = `${repositories[i].name}:  ${repositories[i].description}`}
                else {
                    project.innerText =  repositories[i].name ;
                }
                projectList.appendChild(projectLink);
                projectList.appendChild(project);
              
}
            })
            .catch(error => {
                console.error("An error occured:", error)
            })
            
}
fetchData();
