async function signup(){

const name=document.getElementById("name").value
const email=document.getElementById("email").value
const password=document.getElementById("password").value

await fetch("/api/auth/signup",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({name,email,password})

})

alert("Signup successful")

}
async function login(){

const email=document.getElementById("email").value
const password=document.getElementById("password").value

const res = await fetch("/api/auth/login",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({email,password})

})

const data = await res.json()

if(res.status!==200){
alert(data.msg)
return
}

localStorage.setItem("token",data.token)
localStorage.setItem("user",JSON.stringify(data.user))

window.location.href="profile.html"

}