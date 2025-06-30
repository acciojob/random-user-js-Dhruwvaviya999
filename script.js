//your code here

const info = document.getElementById("info");
let age, email, phone;

async function getUser(){
	try{
		info.textContent = "";
		const img = document.getElementById("image");
		const userName = document.getElementById("name");
		const res = await fetch("https://randomuser.me/api/");
		const data = await res.json();
		const user = data.results[0]
		age = user.dob.age;
		email = user.email;
		phone = user.phone;
		img.src = user.picture.large
		userName.textContent = user.name.first + " " + user.name.last 
		console.log(user)
	}catch(error){
		console.log(error.message);
	}
}

function getUserAge(){
	info.textContent = age;
}

function getUserEmail(){
	info.textContent = email;
}

function getUserPhone(){
	info.textContent = phone;
}
