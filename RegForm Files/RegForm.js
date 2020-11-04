function TeamRegForm() { 
	var name = document.forms["RegForm"]["Name"]; 
	var email = document.forms["RegForm"]["EMail"]; 
	var phone = document.forms["RegForm"]["Phone"]; 
	var address = document.forms["RegForm"]["Address"]; 
	// var what = document.forms["RegForm"]["Subject"]; 

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