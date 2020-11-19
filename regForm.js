// Constructs FormData and posts to httpbin as well as console
var teamRegForm = document.getElementById('regForm');
teamRegForm.onsubmit = function(event) {
	event.preventDefault();

	var request = new XMLHttpRequest();
		// POST to httpbin which returns the POST data as JSON
		request.open('POST', 'https://httpbin.org/post', /* async = */ false);

	var formData = new FormData(document.getElementById('regForm'));
	request.send(formData);

	console.log(request.response);
}


// Still attempting to create db on server and post form entries to it
// const options = {
// 	method: "POST",
// 	headers: {
// 		'Content-Type': 'application/json'
// 	 	},
// 	body: JSON.stringify(formData)
// };
// const response = fetch('/teamDatabase.db', options);
// const json = response.json();
// console.log(json);


// Verify Email Entered is Valid
const email = document.getElementsByName("email");
email.addEventListener("input", function (event) {
	if (email.validity.typeMismatch) {
		email.setCustomValidity("Please enter a valid email address.");
	} else {
		email.setCustomValidity("");
	}
});


// const Datastore = require('nedb'),
// // db = new Datastore({
// // 	filename: './teamDatabase.db',
// // 	autoload: true
// // });
// // db.insert({ name: "Jack", teamName: "JPs Porcelain Punishers" });
// // console.log(db);

// const express = require('express');
// const app = express();
// app.listen(3000, () => console.log('listening at 3000'));
// app.use(express.static('public'));
// app.use(express.json({ limit: '1mb' }));

// app.post('/teamDatabase.db', (request, response) => {
// 	console.log("A team just registered!");
// 	console.log(request.body);
// 	const data = request.body;
// 	response.json({
// 		status: "POST team registration to Team Database",
// 		teamName: data.teamName,
// 		name: data.name,
// 		address: data.address,
// 		email: data.email,
// 		phone: data.phone,
// 		p2Name: data.p2Name,
// 		p3Name: data.p3Name,
// 		p4Name: data.p4Name,
// 		p5Name: data.p5Name,
// 		p6Name: data.p6Name,
// 		p7Name: data.p7Name,
// 		p8Name: data.p8Name,
// 		p9Name: data.p9Name,
// 		p10Name: data.p10Name,
// 		comments: data.comments
// 	});
// });

// // const data = { teamName, name, address, email, phone, p2Name, p3Name, p4Name, p5Name, p6Name, p7Name, p8Name, p9Name, p10Name }
