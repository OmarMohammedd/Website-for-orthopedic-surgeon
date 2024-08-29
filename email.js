
function sendMail() {
	var params = {
	  name: document.getElementById("name").value,
	  phone: document.getElementById("phone").value,
	  location: document.getElementById("location").value,
	};
  
	  emailjs.send("service_eqxrn3g", "template_xp1rjj6", params).then(alert("تم الارسال بنجاح"))

	
  }