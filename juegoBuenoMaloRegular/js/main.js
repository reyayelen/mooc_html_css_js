
(function ($) {
	var rta = ['1','2','3','4'];
	
	generarJuego();

	function generarJuego(){
		console.log("random", Math.floor(Math.random()*10));
		rta = [,,,];
		rndm = "" + Math.floor(Math.random()*10);
		for (var i=0; i<4 ; i++){
		    while(rta.indexOf(rndm) != -1){
				rndm = "" + Math.floor(Math.random()*10);
			}
			rta[i] = rndm.toString();
		}
		console.log("pos1", rta[0]);
		console.log("pos2", rta[1]);
		console.log("pos3", rta[2]);
		console.log("pos4", rta[3]);
		
	}

	"use strict";
	$('.column100').on('mouseover',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).addClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
	});

	$('.column100').on('mouseout',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).removeClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
	});
	
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
		console.log('iniciando validar ');
		var response = [0,0,0];
		input = num.split("");
        for(i=0; i<4 ; i++)	{
			if (input[i] == rta[i]){response[0] += 1 ;}
			else if ((rta.indexOf(input[i])) != -1){response[2] += 1 ;}
			else {response[1] += 1 ; }
		}
		console.log("buenos", response[0]);
		console.log("malos", response[1]);
		console.log("regulares", response[2]);
		return response;
	}
	

})(jQuery);