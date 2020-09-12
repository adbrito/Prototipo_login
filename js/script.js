function validar() {
	console.log("validar")
	//var form = document.getElementsByClassName("form");
	//var username=form[0].getElementsByTagName("div")[0].getElementsByTagName("label")[0].getElementsByTagName("input")[0].value
	var username = document.getElementById("usuario").value;
	var pass = document.getElementById("password").value;
	if (username !== "" && pass !== "") {
		habilitar();
	}
	if (username === "" || pass === "") {
		deshabilitar();
	}

}

function habilitar() {
	document.getElementById('ingreso').disabled = false;
}

function deshabilitar() {
	document.getElementById('ingreso').disabled = true;
}

function enviar() {
	var username = document.getElementById("usuario").value;
	var pass = document.getElementById("password").value;
	console.log(username, pass);
	if (username === "admin" && pass === "admin123") {
		window.location.replace("logeo.html");
	}
	else {
		window.location.replace("nologeo.html");
	}
}
