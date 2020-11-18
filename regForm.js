const express = require('express');
const Datastore = require('nedb'),
db = new Datastore({
	filename: '/teamDatabase.db',
	autoload: true
});
db.insert({ name: "Jack", teamName: "JPs Porcelain Punishers" });

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/teamDatabase.db', (request, response) => {
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
const response = fetch('/teamDatabase.db', options);
const json = response.json();
console.log(json);

function TeamRegForm() { 
	const data = {
		teamName = document.forms["regForm"]["Team Name"],
		name = document.forms["regForm"]["Captain Name"],
		address = document.forms["regForm"]["Captain Address"],
		email = document.forms["regForm"]["Captain E-Mail Address"],
		phone = document.forms["regForm"]["Captain Phone Number"],
		p2Name = document.forms["regForm"]["Player #2 Name"],
		p3Name = document.forms["regForm"]["Player #3 Name"],
		p4Name = document.forms["regForm"]["Player #4 Name"],
		p5Name = document.forms["regForm"]["Player #5 Name"],
		p6Name = document.forms["regForm"]["Player #6 Name"],
		p7Name = document.forms["regForm"]["Player #7 Name"],
		p8Name = document.forms["regForm"]["Player #8 Name"],
		p9Name = document.forms["regForm"]["Player #9 Name"],
		p10Name = document.forms["regForm"]["Player #10 Name"],
		comments = document.forms["regForm"]["Comments"]
	}

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

	// function ValidateEmail(email) {
	// 	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)) {
	// 		return (true)
	// 	  } alert("You have entered an invalid email address!")
	// 	return (false)
	// 	}

	if (phone.value == "") { 
		window.alert("Please enter your phone number."); 
		phone.focus(); 
		return false; 
	} 

	if (p2Name.value == "") { 
		window.alert("Please enter Player 2 name."); 
		p2Name.focus(); 
		return false; 
	} 

	if (p3Name.value == "") { 
		window.alert("Please enter your Player 3 name."); 
		p3Name.focus(); 
		return false; 
	} 

	if (p4Name.value == "") { 
		window.alert("Please enter your Player 4 name."); 
		p4Name.focus(); 
		return false; 
	} 

	if (p5Name.value == "") { 
		window.alert("Please enter your Player 5 name."); 
		p5Nname.focus(); 
		return false; 
	} 

	if (p6Nname.value == "") { 
		window.alert("Please enter your Player 6 name."); 
		p6Name.focus(); 
		return false; 
	} 

	if (p7Name.value == "") { 
		window.alert("Please enter your Player 7 name."); 
		p7Name.focus(); 
		return false; 
	} 

	if (p8Name.value == "") { 
		window.alert("Please enter your Player 8 name."); 
		p8Name.focus(); 
		return false; 
	} 

	if (p9Name.value == "") { 
		window.alert("Please enter your Player 9 name."); 
		p9Nname.focus(); 
		return false; 
	} 

	if (p10Name.value == "") { 
		window.alert("Please enter your Player 10 name."); 
		p10Name.focus(); 
		return false; 
	} 

	if (comments.value == "") { 
		window.alert("Please enter any comments or 'none'."); 
		comments.focus(); 
		return false; 
	} 

	return true; 
}