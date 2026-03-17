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
},

{
name:"Rohan Verma",
skill:"frontend",
title:"React Developer",
experience:"5 years",
company:"Flipkart",
price30:49,
price60:89,
rating:"4.7",
image:"https://randomuser.me/api/portraits/men/22.jpg",
tags:["React","Redux"]
},

{
name:"Neha Gupta",
skill:"uiux",
title:"Product Designer",
experience:"7 years",
company:"Zomato",
price30:49,
price60:89,
rating:"4.9",
image:"https://randomuser.me/api/portraits/women/68.jpg",
tags:["Figma","UX Research"]
},

{
name:"Karan Singh",
skill:"backend",
title:"Node.js Developer",
experience:"6 years",
company:"Paytm",
price30:49,
price60:89,
rating:"4.8",
image:"https://randomuser.me/api/portraits/men/41.jpg",
tags:["Node.js","MongoDB"]
},

{
name:"Anjali Mehta",
skill:"uiux",
title:"UX Strategist",
experience:"8 years",
company:"Amazon",
price30:49,
price60:89,
rating:"5.0",
image:"https://randomuser.me/api/portraits/women/12.jpg",
tags:["Design Systems","Research"]
},

{
name:"Vikram Joshi",
skill:"backend",
title:"System Engineer",
experience:"9 years",
company:"Infosys",
price30:49,
price60:89,
rating:"4.6",
image:"https://randomuser.me/api/portraits/men/55.jpg",
tags:["Java","Spring"]
},

{
name:"Simran Kaur",
skill:"frontend",
title:"Frontend Engineer",
experience:"5 years",
company:"Swiggy",
price30:49,
price60:89,
rating:"4.8",
image:"https://randomuser.me/api/portraits/women/33.jpg",
tags:["HTML","CSS","JS"]
},

{
name:"Aditya Rao",
skill:"backend",
title:"Cloud Engineer",
experience:"7 years",
company:"AWS",
price30:49,
price60:89,
rating:"4.9",
image:"https://randomuser.me/api/portraits/men/75.jpg",
tags:["AWS","Docker"]
}

]


const mentorGrid = document.getElementById("mentorGrid")


function loadMentors(list){

mentorGrid.innerHTML=""

list.forEach(m => {

mentorGrid.innerHTML += `

<div class="mentor-card">

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

<button class="view-btn" onclick="openPopup('${m.name}','${m.title}','${m.experience}','${m.tags.join(",")}')">
View
</button>

<button class="book-btn" onclick="bookSession('${m.name}',${m.price30},${m.price60})">
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

localStorage.setItem("mentorName",name)
localStorage.setItem("price30",price30)
localStorage.setItem("price60",price60)

window.location.href="booking.html"

}



/* SEARCH */

const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("keyup",function(){

let value = this.value.toLowerCase()

let filtered = mentors.filter(m =>
m.name.toLowerCase().includes(value) ||
m.title.toLowerCase().includes(value) ||
m.tags.join(" ").toLowerCase().includes(value)
)

loadMentors(filtered)

})



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