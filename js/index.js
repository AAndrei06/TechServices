let submitBTN = document.getElementById("send-e");

submitBTN.addEventListener("click",() => {
	sendMail();
});

function sendMail(){
	let params = {
		name:document.getElementById("name-inp").value,
		email:document.getElementById("email-inp").value,
		message:document.getElementById("text-inp").value,
	}

	const serviceID = "service_7xkz7zk";
	const templateID = "template_rcxsuof";
	if (params.name != "" && params.email != "" && params.message != ""){
		emailjs.send(serviceID,templateID,params).then(() => {
			alert("Trimis cu succes!!!");
			document.getElementById("name-inp").value = "";
			document.getElementById("email-inp").value = "";
			document.getElementById("text-inp").value = "";
		})
	}
}
