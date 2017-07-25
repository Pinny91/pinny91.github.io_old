function dropDown() {
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (event.target.matches('#menu-button') || event.target.matches('.glyphicon-align-justify')) {
		dropDown();
	}
	else if(!event.target.matches('#menu-button')) {
		var dropdowns = document.getElementsByClassName("dropdown-list");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}   
}
