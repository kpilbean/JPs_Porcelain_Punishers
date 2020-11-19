const express = require('express');
const Datastore = require('nedb'),
db = new Datastore({
	filename: './teamDatabase.db',
	autoload: true
});
db.insert({ name: "Jack", teamName: "JPs Porcelain Punishers" });
console.log(db);

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



	// function ValidateEmail(email) {
	// 	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)) {
	// 		return (true)
	// 	  } alert("You have entered an invalid email address!")
	// 	return (false)
	// 	}

