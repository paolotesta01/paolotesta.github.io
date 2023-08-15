const inputEl = document.getElementById("input-el")
const enterBtn = document.getElementById("enter-btn")
const moviesListEl = document.getElementById("movies-list-el")
const test = document.getElementById("test")
test.textContent = "ciao"

//when btn-click puts content of input into list
enterBtn.addEventListener("click", function(){
	const newListEl = document.createElement("li")
	newListEl.textContent = inputEl.value
	moviesListEl.appendChild(newListEl)
	
	})
