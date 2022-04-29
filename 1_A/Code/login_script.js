

const loginBtn = document.getElementById('login-btn');
const loginContainer = document.getElementById('login-container');
const loginForm = document.getElementById('login-form')

loginBtn.addEventListener('click', () => {
	loginBtn.style.backgroundColor = "yellow";
	loginContainer.style.display = "block";
	signupContainer.style.display = "none";
	signupBtn.style.backgroundColor = "white";
});

// loginForm.addEventListener('submit', (event) => {
// 	// event.preventDefault();
// 	let data = new FormData(event.target);
// 	let loginObj = Object.fromEntries(data.entries());
// 	console.log(loginObj)	
// });


const signupBtn = document.getElementById('signup-btn');
const signupContainer = document.getElementById('signup-container');
const signupForm = document.getElementById('signup-form')

signupBtn.addEventListener('click', () => {
	signupBtn.style.backgroundColor = "yellow";
	signupContainer.style.display = "block";
	loginContainer.style.display = "none";
	loginBtn.style.backgroundColor = "white";
});

// signupForm.addEventListener('submit', (event) => {
// 	// event.preventDefault();
// 	let data = new FormData(event.target);
// 	let signupObj = Object.fromEntries(data.entries());
// 	console.log(signupObj);	
// });