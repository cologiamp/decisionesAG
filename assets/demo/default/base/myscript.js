function contenidoConfirmacion(elemento){
	console.log(elemento);
	console.log(elemento.value);
	console.log(elemento.id);
	//var valor = document.getElementById('m_maxlength_3').value;
	//confirmacionDesc
	document.getElementById(elemento.id+'conf').innerHTML = elemento.value;
}

function contenidoVariablesConfirmacion(){
	
	for(i=1;i<=10;i++){
		console.log(document.getElementById('variable'+i).className);
		var nombreClase = document.getElementById('variable'+i).className;
		if(nombreClase == 'col-lg-12 item is-open is-visible'){

			//RECOPILACION DE DATOS
			// GET VARIABLE1COLOR.VALUE
			var nombre = document.getElementById('variable'+i+'nombre').value;
			var tipo = document.getElementById('variable'+i+'tipo').value;
			var rango = document.getElementById('variable'+i+'rango').value;
			var saltos = document.getElementsByName('variable'+i+'saltos').value;
			var color = document.getElementById('variable'+i+'color').value;
			//FIN RECOPILACION DE DATOS

			console.log(nombre);
			console.log(tipo);
			console.log(rango);
			console.log(saltos);
			console.log(color);

			//ASIGNACION DE DATOS
			/*
			document.getElementById('variable'+i+'nombre'+'conf').innerHTML = nombre;
			document.getElementById('variable'+i+'tipo'+'conf').innerHTML = tipo;
			document.getElementById('variable'+i+'rango'+'conf').innerHTML = rango;
			document.getElementById('variable'+i+'saltos'+'conf').innerHTML = saltos;
			document.getElementById('variable'+i+'color'+'conf').innerHTML = color;
			*/
			//FIN ASIGNACION DE DATOS
		}
	}

}