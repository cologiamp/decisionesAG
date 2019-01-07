function contenidoConfirmacion(elemento){
	console.log(elemento);
	console.log(elemento.value);
	console.log(elemento.id);
	//var valor = document.getElementById('m_maxlength_3').value;
	//confirmacionDesc
	if(elemento.value==''){
		elemento.value = '-';
	}
	document.getElementById(elemento.id+'conf').innerHTML = elemento.value;
}

function contenidoVariablesConfirmacion(){

	var texto1 = "<div class='m-form__heading'><h4 class='m-form__heading-title'>Detalle de variables</h4></div>";
	var texto2;
	var texto3 = '';
	
	for(i=1;i<=10;i++){
		console.log(document.getElementById('variable'+i).className);
		var nombreClase = document.getElementById('variable'+i).className;
		if(nombreClase == 'col-lg-12 item is-open is-visible'){

			//RECOPILACION DE DATOS
			// GET VARIABLE1COLOR.VALUE
			var nombre = document.getElementById('variable'+i+'nombre').value;

			var tipo = $('#variable'+i+'tipo').bootstrapSwitch('state');

			if(tipo){
				tipo = 'Continua';
			}else{
				tipo = 'Discreta';
			}
			//document.getElementById('variable'+i+'tipo').value;
			var rango = document.getElementById('variable'+i+'rango').value;
			var saltos = document.getElementById('variable'+i+'saltos').value;
			var color = document.getElementById('variable'+i+'color').value;
			//FIN RECOPILACION DE DATOS

			console.log(nombre);
			console.log(tipo);
			console.log(rango);
			console.log(saltos);
			console.log(color);
			
			texto2 = "<div class='form-group m-form__group m-form__group--sm row'><label class='col-xl-4 col-lg-4 col-form-label' style='color: "+color+";'>"+nombre+":</label><div class='col-xl-8 col-lg-8'><span class='m-form__control-static'>"+tipo+", ("+rango+"), "+saltos+".</span></div></div>";

			texto3 = texto3 + texto2;

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

	document.getElementById('detalle-variables').innerHTML = texto1 + texto3;

}