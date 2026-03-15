const mentors = [

{ name:"Rahul Sharma", field:"Frontend Developer", exp:"7 years" },
{ name:"Sneha Kapoor", field:"UI/UX Designer", exp:"6 years" },
{ name:"Vikram Patel", field:"Backend Engineer", exp:"8 years" },
{ name:"Ananya Mehta", field:"Product Manager", exp:"5 years" },
{ name:"Rohit Verma", field:"Data Scientist", exp:"9 years" },
{ name:"Neha Gupta", field:"Cloud Engineer", exp:"6 years" },
{ name:"Arjun Singh", field:"DevOps Engineer", exp:"7 years" },
{ name:"Priya Jain", field:"AI Engineer", exp:"5 years" },
{ name:"Kunal Shah", field:"Mobile App Developer", exp:"8 years" },
{ name:"Megha Bansal", field:"Cybersecurity Expert", exp:"6 years" }

]

const grid = document.getElementById("mentorGrid")

mentors.forEach(m => {

grid.innerHTML += `
<div class="card">

<h3>${m.name}</h3>

<p>${m.field}</p>

<p>${m.exp} experience</p>

<p class="verified">✔ Verified Mentor</p>

<div class="price">

<p>30 minutes : ₹49</p>
<p>1 hour : ₹89</p>

</div>

<button>Book Session</button>

</div>
`

})