fetch("_layout/index.html")
 	.then(response => {
 		return response.text();
 	})
 	.then(data => {
 		document.querySelector("body").innerHTML = data;
 		
 	});
 
 fetch("./includes/footer.html")
 	.then(response => {
 		return response.text();
 	})
 	.then(data => {
 		document.querySelector("footer").innerHTML = data;
 	});