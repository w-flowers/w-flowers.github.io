let listItems = document.getElementById("proj-list").getElementsByTagName("li");

for(let i = 0; i < listItems.length; i++){
	listItems[i].addEventListener("mouseover", function (event) {
	event.target.style.color = "blue";
	event.target.style.cursor = "pointer";
	}, false);
	listItems[i].addEventListener("mouseout", function (event) {
	event.target.style.color = "black";
	}, false);
	listItems[i].addEventListener("click", event => {
		let heading = document.getElementById("mainhead");
		let elements = document.getElementsByClassName(listItems[i].className);
		let newHeading = " ";
		for(let j = 0; j < elements.length; j++){
			if (elements[j].classList.contains("proj-heading")) newHeading = elements[j].innerHTML;
		}
		heading.innerHTML = newHeading;
		let descriptions = document.getElementsByClassName("proj-desc");
		for(let j = 0; j < descriptions.length; j++){
			if (descriptions[j].classList.contains(listItems[i].className)) descriptions[j].hidden = false;
			else descriptions[j].hidden = true;
		}
	})
}
