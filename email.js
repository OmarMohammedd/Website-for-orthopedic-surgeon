
function sendMail() {
	var params = {
	  name: document.getElementById("name").value,
	  phone: document.getElementById("phone").value,
	  location: document.getElementById("location").value,
	};
  
	const serviceID = "service_bejt3bw";
	const templateID = "template_qfynzwu";
  
	  emailjs.send("service_bejt3bw", "template_qfynzwu", params).then(alert("تم الارسال بنجاح"))

	
  }