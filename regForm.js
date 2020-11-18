const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/teamDatabase', (request, response) => {
	console.log("A team just registered!");
	console.log(request.body);
	const data = request.body;
	response.json({
		status: "POST team registration to Team Database",
		teamName: data.teamName,
		name: data.name,
		address: data.address,
		email: data.email,
		phone: data.phone,
		p2Name: data.p2Name,
		p3Name: data.p3Name,
		p4Name: data.p4Name,
		p5Name: data.p5Name,
		p6Name: data.p6Name,
		p7Name: data.p7Name,
		p8Name: data.p8Name,
		p9Name: data.p9Name,
		p10Name: data.p10Name,
		comments: data.comments
	});
});

// const data = { teamName, name, address, email, phone, p2Name, p3Name, p4Name, p5Name, p6Name, p7Name, p8Name, p9Name, p10Name }
const options = {
	method: "POST",
	headers: {
		'Content-Type': 'application/json'
	 },
	body: JSON.stringify(data)
};
const response = fetch('/teamDatabase', options);
const json = response.json();
console.log(json);

function TeamRegForm() { 
	var teamName = document.forms["regForm"]["Team Name"]; 
	var name = document.forms["regForm"]["Captain Name"]; 
	var address = document.forms["regForm"]["Captain Address"]; 
	var email = document.forms["regForm"]["Captain E-Mail Address"]; 
	var phone = document.forms["regForm"]["Captain Phone Number"]; 
	var p2Name = document.forms["regForm"]["Player #2 Name"]; 
	var p3Name = document.forms["regForm"]["Player #3 Name"]; 
	var p4Name = document.forms["regForm"]["Player #4 Name"]; 
	var p5Name = document.forms["regForm"]["Player #5 Name"]; 
	var p6Name = document.forms["regForm"]["Player #6 Name"]; 
	var p7Name = document.forms["regForm"]["Player #7 Name"]; 
	var p8Name = document.forms["regForm"]["Player #8 Name"]; 
	var p9Name = document.forms["regForm"]["Player #9 Name"]; 
	var p10Name = document.forms["regForm"]["Player #10 Name"];
	var comments = document.forms["regForm"]["Comments"];
	// var what = document.forms["regForm"]["Subject"]; 

	if (teamName.value == "") { 
		window.alert("Please enter your team name."); 
		teamName.focus(); 
		return false; 
	} 

	if (name.value == "") { 
		window.alert("Please enter your name."); 
		name.focus(); 
		return false; 
	} 

	if (address.value == "") { 
		window.alert("Please enter your address."); 
		address.focus(); 
		return false; 
	} 

	if (email.value == "") { 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (phone.value == "") { 
		window.alert("Please enter your phone number."); 
		phone.focus(); 
		return false; 
	} 

	// if (what.selectedIndex < 1) { 
	// 	alert("Please enter your course."); 
	// 	what.focus(); 
	// 	return false; 
	// } 

	return true; 
}