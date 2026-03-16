const mentors = [
{
name:"Rahul Sharma",
skill:"frontend",
title:"Frontend Developer",
experience:"7 years",
company:"Google",
price30:49,
price60:89,
rating:"4.9",
image:"https://randomuser.me/api/portraits/men/32.jpg",
tags:["React","JavaScript"]
},
{
name:"Sneha Kapoor",
skill:"uiux",
title:"UI/UX Designer",
experience:"6 years",
company:"Adobe",
price30:49,
price60:89,
rating:"5.0",
image:"https://randomuser.me/api/portraits/women/45.jpg",
tags:["Figma","Prototyping"]
},
{
name:"Amit Patel",
skill:"backend",
title:"Backend Engineer",
experience:"8 years",
company:"Microsoft",
price30:49,
price60:89,
rating:"4.8",
image:"https://randomuser.me/api/portraits/men/65.jpg",
tags:["Node.js","AWS"]
}
]


const mentorGrid = document.getElementById("mentorGrid")

function loadMentors(list){

mentorGrid.innerHTML=""

list.forEach(m => {

mentorGrid.innerHTML += `

<div class="mentor-card" data-skill="${m.skill}">

<img class="mentor-img" src="${m.image}">

<div class="mentor-info">

<div class="mentor-name">${m.name}</div>

<div class="rating">⭐ ${m.rating}</div>

<div class="mentor-role">${m.title}</div>

<div class="mentor-company">${m.company} • ${m.experience}</div>

<div class="tags">

${m.tags.map(t=>`<span class="tag">${t}</span>`).join("")}

</div>

<div class="price">₹${m.price30} / 30 min</div>

<div class="card-buttons">

<button onclick="openPopup('${m.name}','${m.title}','${m.experience}','${m.tags.join(",")}')">
View
</button>

<button onclick="bookSession('${m.name}',${m.price30},${m.price60})">
Book Now
</button>

</div>

</div>

</div>

`

})

}


loadMentors(mentors)



/* BOOK SESSION */

function bookSession(name,price30,price60){

localStorage.setItem("mentor",name)
localStorage.setItem("price30",price30)
localStorage.setItem("price60",price60)

window.location.href="booking.html"

}



/* SEARCH */

const searchInput = document.getElementById("searchInput")

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value = this.value.toLowerCase()

let filtered = mentors.filter(m =>
m.name.toLowerCase().includes(value) ||
m.title.toLowerCase().includes(value) ||
m.tags.join(" ").toLowerCase().includes(value)
)

loadMentors(filtered)

})

}



/* FILTERS */

function filterMentors(skill){

if(skill==="all"){
loadMentors(mentors)
return
}

let filtered = mentors.filter(m => m.skill === skill)

loadMentors(filtered)

}



/* POPUP */

function openPopup(name,role,exp,skills){

document.getElementById("mentorPopup").style.display="flex"

document.getElementById("popupName").innerText=name
document.getElementById("popupRole").innerText=role
document.getElementById("popupExp").innerText=exp
document.getElementById("popupSkills").innerText=skills

}

function closePopup(){

document.getElementById("mentorPopup").style.display="none"

}