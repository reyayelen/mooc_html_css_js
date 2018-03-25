
(function ($) {
	var rta = ['1','2','3','4'];
	
	generarJuego();

	function generarJuego(){
		rta = [,,,];
		rndm = "" + Math.floor(Math.random()*10);
		for (var i=0; i<4 ; i++){
		    while(rta.indexOf(rndm) != -1){
				rndm = "" + Math.floor(Math.random()*10);
			}
			rta[i] = rndm.toString();
		}
	}

	
	
	$('#validar').on('click',function(){
		if ($("#n1").val().length !== 4 ){window.alert("Debe ser un número de 4 dígitos");}
		else {
			var num = $("#n1");
			console.log('validar jugada', validar_jugada(num.val()));
			var jugada = validar_jugada(num.val());
			$("#b1").append('<tr class="row100 body"><td class="cell100 column1">' + num.val() + '</td></tr>');
			$("#resultados").append('<tr class="row100 body"><td class="cell100 column2">'+ jugada[0] +'</td><td class="cell100 column3">'+ jugada[1] +'</td><td class="cell100 column4">'+ jugada[2] +'</td></tr>');
			if(jugada[0]=="4"){
				window.alert("Número Ganador!! " + num.val());
			}
		}
	});

	function validar_jugada(num){ 
		var response = [0,0,0];
		input = num.split("");
        for(i=0; i<4 ; i++)	{
			if (input[i] == rta[i]){response[0] += 1 ;}
			else if ((rta.indexOf(input[i])) != -1){response[2] += 1 ;}
			else {response[1] += 1 ; }
		}
		return response;
	}
	

})(jQuery);