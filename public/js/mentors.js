const mentors = [
{
name:"Rahul Sharma",
skill:"Frontend Developer",
experience:"7 years",
price30:49,
price60:89
},
{
name:"Sneha Kapoor",
skill:"UI/UX Designer",
experience:"6 years",
price30:49,
price60:89
},
{
name:"Amit Patel",
skill:"Data Scientist",
experience:"8 years",
price30:49,
price60:89
}
]

const mentorGrid = document.getElementById("mentorGrid")

mentors.forEach(m => {

mentorGrid.innerHTML += `
<div class="card">

<h3>${m.name}</h3>
<p>${m.skill}</p>
<p>${m.experience} experience</p>

<p>30 min : ₹${m.price30}</p>
<p>1 hour : ₹${m.price60}</p>

<button onclick="bookSession('${m.name}',${m.price30},${m.price60})">
Book Session
</button>

</div>
`

})

function bookSession(name,price30,price60){

localStorage.setItem("mentor",name)
localStorage.setItem("price30",price30)
localStorage.setItem("price60",price60)

window.location.href="booking.html"

}