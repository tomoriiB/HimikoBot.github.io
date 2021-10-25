fetch("../layout/inde.html")
	.then(response => {
		return response.text();
	})
	.then(data => {
		document.querySelector("body").innerHTML = data;
	});