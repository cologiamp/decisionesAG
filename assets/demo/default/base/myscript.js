function contenidoConfirmacion(elemento){
	console.log(elemento);
	console.log(elemento.value);
	console.log(elemento.id);
	//var valor = document.getElementById('m_maxlength_3').value;
	//confirmacionDesc
	document.getElementById(elemento.id+'conf').innerHTML = elemento.value;
}