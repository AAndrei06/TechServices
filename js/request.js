let submitBTN = document.getElementById("request-send");

submitBTN.addEventListener("click",() => {
	sendMail();
});

function sendMail(){
	let params = {
		name:document.getElementById("name-inp1").value,
		email:document.getElementById("email-inp1").value,
		message:document.getElementById("text-inp1").value,
	}

	const serviceID = "service_7xkz7zk";
	const templateID = "template_xzg5mud";
	if (params.name != "" && params.email != "" && params.message != ""){
		emailjs.send(serviceID,templateID,params).then(() => {
			alert("Trimis cu succes!!!");
			document.getElementById("name-inp1").value = "";
			document.getElementById("email-inp1").value = "";
			document.getElementById("text-inp1").value = "";
		})
	}
}
