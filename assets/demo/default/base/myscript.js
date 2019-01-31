function contenidoConfirmacion(elemento){
	console.log(elemento);
	console.log(elemento.value);
	console.log(elemento.id);
	//var valor = document.getElementById('m_maxlength_3').value;
	//confirmacionDesc
	if(elemento.value==''){
		elemento.value = '-';
	}
	if(elemento.id=="cantidadIslas"){
		document.getElementById(elemento.id+'conf').innerHTML = elemento.value;
	}
	if(elemento.id=="descripcion"){
		document.getElementById(elemento.id+'conf').innerHTML = elemento.value;
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
			if(nombre==""){
				nombre = "Var"+i;
			}

			var tipo = $('#variable'+i+'tipo').bootstrapSwitch('state');

			if(tipo){
				tipo = 'Continua';
			}else{
				tipo = 'Discreta';
			}
			//document.getElementById('variable'+i+'tipo').value;
			if(document.getElementById('variable'+i+'rangomin').value){
				var rangomin = document.getElementById('variable'+i+'rangomin').value;
			}
			if(document.getElementById('variable'+i+'rangomax').value){
				var rangomax = document.getElementById('variable'+i+'rangomax').value;
			}
			if(rangomin && rangomax){
				var rango = rangomin + " - " + rangomax;
			}else{
				var rango = "-";
			}
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

function buscarSolucion(){

	var variablesAct = 0;
	//clases para boton submit 
	//btn btn-primary m-btn m-btn--custom m-btn--icon m-loader m-loader--light m-loader--right m-loader--
	//btn btn-primary m-btn m-btn--custom m-btn--icon
	var submitItem = $('#submitItem');
	submitItem.addClass('m-loader m-loader--light m-loader--right m-loader--');
	//console.log(document.getElementById('variable1nombre').value);

		for(i=1;i<=10;i++){
		//console.log(document.getElementById('variable'+i).className);
		var nombreClase = document.getElementById('variable'+i).className;
		
		if(nombreClase == 'col-lg-12 item is-open is-visible'){

			variablesAct = variablesAct + 1;
			//RECOPILACION DE DATOS
			// GET VARIABLE1COLOR.VALUE

			var nombre = document.getElementById('variable'+i+'nombre').value;
			if(nombre==""){
				nombre = "Var"+i;
			}
			//FIN RECOPILACION DE DATOS

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
	var descripcion = document.getElementById('descripcion').value;


	var variable1nombre = document.getElementById('variable1nombre').value;
	var variabla1tipo = $('#variable1tipo').bootstrapSwitch('state');
	var variable1rangomin = document.getElementById('variable1rangomin').value;
	var variable1rangomax = document.getElementById('variable1rangomax').value;
	var demo1 = document.getElementById('variable1saltos').value;
	var variable1color = document.getElementById('variable1color').value;

	var variable2nombre = document.getElementById('variable2nombre').value;
	var variabla2tipo = $('#variable2tipo').bootstrapSwitch('state');
	var variable2rangomin = document.getElementById('variable2rangomin').value;
	var variable2rangomax = document.getElementById('variable2rangomax').value;
	var demo2 = document.getElementById('variable2saltos').value;
	var variable2color = document.getElementById('variable2color').value;

	var variable3nombre = document.getElementById('variable3nombre').value;
	var variabla3tipo = $('#variable3tipo').bootstrapSwitch('state');
	var variable3rangomin = document.getElementById('variable3rangomin').value;
	var variable3rangomax = document.getElementById('variable3rangomax').value;
	var demo3 = document.getElementById('variable3saltos').value;
	var variable3color = document.getElementById('variable3color').value;

	var variable4nombre = document.getElementById('variable4nombre').value;
	var variabla4tipo = $('#variable4tipo').bootstrapSwitch('state');
	var variable4rangomin = document.getElementById('variable4rangomin').value;
	var variable4rangomax = document.getElementById('variable4rangomax').value;
	var demo4 = document.getElementById('variable4saltos').value;
	var variable4color = document.getElementById('variable4color').value;

	var variable5nombre = document.getElementById('variable5nombre').value;
	var variabla5tipo = $('#variable5tipo').bootstrapSwitch('state');
	var variable5rangomin = document.getElementById('variable5rangomin').value;
	var variable5rangomax = document.getElementById('variable5rangomax').value;
	var demo5 = document.getElementById('variable5saltos').value;
	var variable5color = document.getElementById('variable5color').value;
	
	var variable6nombre = document.getElementById('variable6nombre').value;
	var variabla6tipo = $('#variable6tipo').bootstrapSwitch('state');
	var variable6rangomin = document.getElementById('variable6rangomin').value;
	var variable6rangomax = document.getElementById('variable6rangomax').value;
	var demo6 = document.getElementById('variable6saltos').value;
	var variable6color = document.getElementById('variable6color').value;

	var variable7nombre = document.getElementById('variable7nombre').value;
	var variabla7tipo = $('#variable7tipo').bootstrapSwitch('state');
	var variable7rangomin = document.getElementById('variable7rangomin').value;
	var variable7rangomax = document.getElementById('variable7rangomax').value;
	var demo7 = document.getElementById('variable7saltos').value;
	var variable7color = document.getElementById('variable7color').value;

	var variable8nombre = document.getElementById('variable8nombre').value;
	var variabla8tipo = $('#variable8tipo').bootstrapSwitch('state');
	var variable8rangomin = document.getElementById('variable8rangomin').value;
	var variable8rangomax = document.getElementById('variable8rangomax').value;
	var demo8 = document.getElementById('variable8saltos').value;
	var variable8color = document.getElementById('variable8color').value;

	var variable9nombre = document.getElementById('variable9nombre').value;
	var variabla9tipo = $('#variable9tipo').bootstrapSwitch('state');
	var variable9rangomin = document.getElementById('variable9rangomin').value;
	var variable9rangomax = document.getElementById('variable9rangomax').value;
	var demo9 = document.getElementById('variable9saltos').value;
	var variable9color = document.getElementById('variable9color').value;

	var variable10nombre = document.getElementById('variable10nombre').value;
	var variabla10tipo = $('#variable10tipo').bootstrapSwitch('state');
	var variable10rangomin = document.getElementById('variable10rangomin').value;
	var variable10rangomax = document.getElementById('variable10rangomax').value;
	var demo10 = document.getElementById('variable10saltos').value;
	var variable10color = document.getElementById('variable10color').value;

	var accept = document.getElementById('accept').value;
	var islas = document.getElementById('cantidadIslas').value;
	var iteraciones = document.getElementById('cantidadIteraciones').value;

	var tipoSolucion = document.getElementById('tipoSolucion').checked;

	console.log(variable1nombre);
	console.log(variabla3tipo);
	console.log(variable1rangomin);
	console.log(variable1rangomax);
	console.log(variable1saltos);
	console.log(variable1color);	

	console.log(islas);
	console.log(iteraciones);
	console.log(tipoSolucion);
	console.log(variablesAct);
	console.log(accept);

	$.ajax({
	url: 'http://198.7.63.44/ApiRestRomper/solucion2/wizard-1.html?descripcion='+descripcion+'&variable1nombre='+variable1nombre+'&variable1rangomin='+variable1rangomin+'&variable1rangomax='+variable1rangomax+'&demo1='+demo1+'&variable1color='+variable1color+'&variable2nombre='+variable2nombre+'&variable2rangomin='+variable2rangomin+'&variable2rangomax='+variable2rangomax+'&demo2='+demo2+'&variable2color='+variable2color+'&variable3nombre='+variable3nombre+'&variable3rangomin='+variable3rangomin+'&variable3rangomax='+variable3rangomax+'&demo3='+demo3+'&variable3color='+variable3color+'&variable4nombre='+variable4nombre+'&variable4rangomin='+variable4rangomin+'&variable4rangomax='+variable4rangomax+'&demo4='+demo4+'&variable4color='+variable4color+'&variable5nombre='+variable5nombre+'&variable5rangomin='+variable5rangomin+'&variable5rangomax='+variable5rangomax+'&demo5='+demo5+'&variable5color='+variable5color+'&variable6nombre='+variable6nombre+'&variable6rangomin='+variable6rangomin+'&variable6rangomax='+variable6rangomax+'&demo6='+demo6+'&variable6color='+variable6color+'&variable7nombre='+variable7nombre+'&variable7rangomin='+variable7rangomin+'&variable7rangomax='+variable7rangomax+'&demo7='+demo7+'&variable7color='+variable7color+'&variable8nombre='+variable8nombre+'&variable8rangomin='+variable8rangomin+'&variable8rangomax='+variable8rangomax+'&demo8='+demo8+'&variable8color='+variable8color+'&variable9nombre='+variable9nombre+'&variable9rangomin='+variable9rangomin+'&variable9rangomax='+variable9rangomax+'&demo9='+demo9+'&variable9color='+variable9color+'&variable10nombre='+variable10nombre+'&variable10rangomin='+variable10rangomin+'&variable10rangomax='+variable10rangomax+'&demo10='+demo10+'&variable10color='+variable10color+'&islas='+islas+'&iteraciones='+iteraciones+'&tipoSolucion='+tipoSolucion+'&variablesAct='+variablesAct+'&accept='+accept,
	success: function(respuesta) {
		console.log(respuesta);
	},
	error: function( jqXHR, textStatus, errorThrown ) {

      if (jqXHR.status === 0) {

        alert('Not connect: Verify Network.');

      } else if (jqXHR.status == 404) {

        alert('Requested page not found [404]');

      } else if (jqXHR.status == 500) {

        alert('Internal Server Error [500].');

      } else if (textStatus === 'parsererror') {

        alert('Requested JSON parse failed.');

      } else if (textStatus === 'timeout') {

        alert('Time out error.');

      } else if (textStatus === 'abort') {

        alert('Ajax request aborted.');

      } else {

        alert('Uncaught Error: ' + jqXHR.responseText);

      }

    }
 	/*
	error: function(xhr, status, error) {
		var err = eval("(" + xhr.responseText + ")");
  		alert(err.Message);
		submitItem.removeClass('m-loader m-loader--light m-loader--right m-loader--');
        console.log("No se ha podido obtener la información");
    }
    */

});

/*
$.ajax({
                type: 'POST',
                url: 'http://localhost:8080/ApiRestRomper/solucion2/',
                data: {
                    "descripcion": descripcion,
                    "variable1nombre": variable1nombre,
                    "variable1rangomin": variable1rangomin,
                    "variable1rangomax": variable1rangomax,
                    "demo1": demo1,
                    "variable1color": variable1color
                },
                success: function (resultado) {
                    //cargando.hide();                    
                    alert(resultado);                    

                },
                error: function (jqXHR, textStatus, errorThrown) {

                    if (jqXHR.status === 0) {

                        alert('Not connect: Verify Network.=(');

                    } else if (jqXHR.status == 404) {

                        alert('Requested page not found [404].');

                    } else if (jqXHR.status == 500) {

                        alert('Error Interno del Servidor [500].');

                    } else if (textStatus === 'parsererror') {

                        alert('Requested JSON parse failed.');

                    } else if (textStatus === 'timeout') {

                        alert('Time out error.');

                    } else if (textStatus === 'abort') {

                        alert('Ajax request aborted.');

                    } else {

                        alert('Uncaught Error: ' + jqXHR.responseText);

                    }

                }
            });

*/
}