const base_url = "https://google.com/search?q=";

alert(document.getElementById("searchbox"));
/*inputText.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
    	document.getElementById("searchbtn").click();
    }
});*/

function search() {
	var query = document.getElementById("searchbox").value;
	window.location.replace(base_url + query.replace(/ /g, "+"));	
}
