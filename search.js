const base_url = "https://google.com/search?q=";

function search() {
	var query = document.getElementById("searchbox").value;
	window.location.replace(base_url + query.replace(/ /g, "+"));	
}
