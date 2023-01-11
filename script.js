/*dark mode toggle*/
const body = document.querySelector("body");
const bgpattern = document.querySelector(".background-pattern");
const toggle = document.getElementById("toggle");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const number = document.getElementsByClassName("number");
const main = document.getElementsByClassName("main");
const sub = document.getElementsByClassName("sub");
const hr = document.querySelector("hr");

let theme = localStorage.getItem("mode");
if (theme === "dark"){
	body.classList.add("dark");
	bgpattern.classList.add("dark");
	toggle.classList.add("dark");
	toggle.classList.add("active");
	h1.classList.add("dark");
	h3.classList.add("dark");
	hr.classList.add("dark");
	
	for (let i=0; i < number.length; i++) {
		number[i].classList.add("dark");
	}
	
	for (let i=0; i < main.length; i++) {
		main[i].classList.add("dark");
	}
	
	for (let i=0; i < sub.length; i++) {
		sub[i].classList.add("dark");
	}
}

toggle.addEventListener("click", function() {
	body.classList.toggle("dark");
	bgpattern.classList.toggle("dark");
	toggle.classList.toggle("dark");
	toggle.classList.toggle("active");
	h1.classList.toggle("dark");
	h3.classList.toggle("dark");
	hr.classList.toggle("dark");
	
	for (let i=0; i < number.length; i++) {
		number[i].classList.toggle("dark");
	}
	
	for (let i=0; i < main.length; i++) {
		main[i].classList.toggle("dark");
	}
	
	for (let i=0; i < sub.length; i++) {
		sub[i].classList.toggle("dark");
	}
	
	localStorage.setItem("mode", "dark");
	
	if (!body.classList.contains("dark")) {
		localStorage.setItem("mode", "light");
	}
	
})

