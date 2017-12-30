for( var i = 0 ; i < 10 ; i++)
{
	document.getElementById("first_name").value = Math.random().toString(36).replace(/[^a-z]/g, '').substr(0, Math.floor((Math.random() * 10) + 4));      //random string of length 4 to 10 containing [a-z]
	document.getElementById("last_name").value =  Math.random().toString(36).replace(/[^a-z]/g, '').substr(0, Math.floor((Math.random() * 10) + 4));      //
	document.getElementById("user_name").value =  Math.random().toString(36).replace(/[^a-z]/g, '').substr(0, Math.floor((Math.random() * 10) + 4));      // 
	document.getElementById("email").value = Math.random().toString(36).replace(/[^a-z]/g, '').substr(0, Math.floor((Math.random() * 10) + 4)) +Math.random().toString(36).replace(/[^0-9]/g, '').substr(1, Math.floor((Math.random() * 3) + 1)) +"@gmail.com";     //random string[a-z] of length 4 to 10 followed by random string[0-9] of length 1 to 3 followed by "@gmail.com" eg: sadfda352@gmail.com 
	document.getElementById("password").value = document.getElementById("password_confirmation").value = Math.random().toString(36).replace(/[^a-z]/g, '').substr(0, Math.floor((Math.random() * 10) + 4));
	document.getElementById("res_address").value = Math.random().toString(36).replace(/[^a-z]/g, '').substr(0, Math.floor((Math.random() * 10) + 4));      //
	document.getElementById("phone_no").value = Math.random().toString(36).replace(/[^0-9]/g, '').substr(1, 10)    // 10 random digits
	
	document.getElementById("insert").click();
}