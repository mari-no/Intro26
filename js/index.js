
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${thisYear} Marina Nosova`;
footer.appendChild(copyright);

let skills = [ "JavaScript", "HTML", "CSS", "GitHub","Agile & Scrum Frameworks","Project Planning & Execution",
	"Sprint & Release Management","Stakeholder Engagement","Resource Allocation & Budgeting","Risk Assessment & Mitigation",
	"Data analysis (SQL, NoSQL) & Data validation","Quality assurance","User Acceptance Testing (UAT)","Manual & Automated testing",
	"Process Improvement","Change Management","Performance Metrics & Reporting","Jira | Confluence | MS Project | Asana","Selenium WebDriver",
	"Cross-platform testing expertise: iOS, Android, Web, and POS environments","Splunk","XML","SOAP","REST API","Testlink",
	"Usability testing","Postman","Performance testing","Load testing","Defect analysis and management","Risk-based testing"]

let skillSection = document.querySelector("#Skills");
let skillsList = skillSection.querySelector("ul");
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