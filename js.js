function teclado(event){
	var counter = document.getElementById("contador").innerHTML;
	var count = parseInt(counter,10); 
	var keyCode = ('which' in event) ? event.which : event.keyCode;
	switch(keyCode){
		case 8:
			count++;
			document.getElementById("contador").innerHTML = count;
			esconder();
			break;
		case 13:
			count++;
			document.getElementById("contador").innerHTML = count;
			escolher();
			break;
		case 40:
			count++;
			document.getElementById("contador").innerHTML = count;
			arrowUp();
			break;
		case 38:
			count++;
			document.getElementById("contador").innerHTML = count;
			arrowDown();
			break;
		default:
			break;
		}
}
		
function arrowDown(){
		var teclado = document.getElementById("ttl").innerHTML;
		var tecla = parseInt(teclado,10); 
		var tmp = document.getElementById("tb").innerHTML;
		var opt = parseInt(tmp,10); 
		var tesv = document.getElementById("tbes").innerHTML;
		var tesvar = parseInt(tesv,10); 
		var mtt = document.getElementById("mt").innerHTML; 
		var metel = parseInt(mtt,10);
		var age = document.getElementById("agenda").innerHTML;
		var agenda = parseInt(age,10); 
		
		if((document.getElementById("teclado1").style.visibility == "visible") || (document.getElementById("teclado2").style.visibility == "visible")
			|| (document.getElementById("teclado3").style.visibility == "visible")|| (document.getElementById("teclado4").style.visibility == "visible")
			|| (document.getElementById("teclado5").style.visibility == "visible")|| (document.getElementById("teclado6").style.visibility == "visible")
			|| (document.getElementById("teclado7").style.visibility == "visible")|| (document.getElementById("teclado8").style.visibility == "visible")
			|| (document.getElementById("teclado9").style.visibility == "visible")|| (document.getElementById("teclado10").style.visibility == "visible")
			|| (document.getElementById("teclado11").style.visibility == "visible")|| (document.getElementById("teclado12").style.visibility == "visible")){
			if(tesvar > 0 && tesvar < 13){
				if(tecla == 1){
					tecla = 12;
					document.getElementById("ttl").innerHTML = tecla;
					mostrarTeclado();
					}
				else{
					tecla--;
					document.getElementById("ttl").innerHTML = tecla;
					mostrarTeclado();
					}
				}
		}
		
		if((document.getElementById("tes").style.visibility == "visible") || (document.getElementById("tes2").style.visibility == "visible")){
			if(tesvar > 0 && tesvar < 3){
				if(tesvar == 1){
					tesvar = 2;
					document.getElementById("tbes").innerHTML = tesvar;
					mostrarEs();
					}
				else{
					tesvar--;
					document.getElementById("tbes").innerHTML = tesvar;
					mostrarEs();
					}
				}
			}
			
		
		if((document.getElementById("menu1").style.visibility == "visible") || (document.getElementById("menu2").style.visibility == "visible")){
			if(metel > 0 && metel < 3){
				if(metel == 2){
					metel = 1;
					document.getElementById("mt").innerHTML = metel;
					mostrarMenu();
					}
				else{
					metel++;
					document.getElementById("mt").innerHTML = metel;
					mostrarMenu();
					}
				}
			}
		
		if((document.getElementById("agenda1").style.visibility == "visible") || (document.getElementById("agenda2").style.visibility == "visible")
			||(document.getElementById("agenda3").style.visibility == "visible") || (document.getElementById("agenda4").style.visibility == "visible")){
			if(agenda > 0 && metel < 5){
				if(agenda == 1){
					agenda = 4;
					document.getElementById("agenda").innerHTML = agenda;
					mostrarAgenda();
					}
				else{
					agenda--;
					document.getElementById("agenda").innerHTML = agenda;
					mostrarAgenda();
					}
				}
			}
		
		
		if((document.getElementById("IT").style.visibility == "visible") || (document.getElementById("ES").style.visibility == "visible")
			|| (document.getElementById("AJ").style.visibility == "visible") || (document.getElementById("TL").style.visibility == "visible")
			|| (document.getElementById("AS").style.visibility == "visible")){
			if(opt > 0 && opt < 6){
				if(opt == 5){
					opt = 1;
					document.getElementById("tb").innerHTML = opt;
					mostrar();
					}
				else{
					opt++;
					document.getElementById("tb").innerHTML = opt;
					mostrar();
					}
				}
			}
	}
	
	function arrowUp(){ 
		var teclado = document.getElementById("ttl").innerHTML;
		var tecla = parseInt(teclado,10); 
		var tmp = document.getElementById("tb").innerHTML; 
		var opt = parseInt(tmp,10);
		var tesv = document.getElementById("tbes").innerHTML;
		var tesvar = parseInt(tesv,10); 
		var mtt = document.getElementById("mt").innerHTML; 
		var metel = parseInt(mtt,10);
		var age = document.getElementById("agenda").innerHTML;
		var agenda = parseInt(age,10); 
		if((document.getElementById("teclado1").style.visibility == "visible") || (document.getElementById("teclado2").style.visibility == "visible")
			|| (document.getElementById("teclado3").style.visibility == "visible")|| (document.getElementById("teclado4").style.visibility == "visible")
			|| (document.getElementById("teclado5").style.visibility == "visible")|| (document.getElementById("teclado6").style.visibility == "visible")
			|| (document.getElementById("teclado7").style.visibility == "visible")|| (document.getElementById("teclado8").style.visibility == "visible")
			|| (document.getElementById("teclado9").style.visibility == "visible")|| (document.getElementById("teclado10").style.visibility == "visible")
			|| (document.getElementById("teclado11").style.visibility == "visible")|| (document.getElementById("teclado12").style.visibility == "visible")){
			if(tesvar > 0 && tesvar < 13){
				if(tecla == 12){
					tecla = 1;
					document.getElementById("ttl").innerHTML = tecla;
					mostrarTeclado();
					}
				else{
					tecla++;
					document.getElementById("ttl").innerHTML = tecla;
					mostrarTeclado();
				}
			}
		}
		
		if((document.getElementById("tes").style.visibility == "visible") || (document.getElementById("tes2").style.visibility == "visible")){
			if(tesvar > 0 && tesvar < 3){
				if(tesvar == 2){
					tesvar = 1;
					document.getElementById("tbes").innerHTML = tesvar;
					mostrarEs();
					}
				else{
					tesvar++;
					document.getElementById("tbes").innerHTML = tesvar;
					mostrarEs();
					}
				}
			}
		
		if((document.getElementById("menu1").style.visibility == "visible") || (document.getElementById("menu2").style.visibility == "visible")){
			if(metel > 0 && metel < 3){
				if(metel == 1){
					metel = 2;
					document.getElementById("mt").innerHTML = metel;
					mostrarMenu();
					}
				else{
					metel--;
					document.getElementById("mt").innerHTML = metel;
					mostrarMenu();
					}
				}
			}
			
		if((document.getElementById("agenda1").style.visibility == "visible") || (document.getElementById("agenda2").style.visibility == "visible")
			|| (document.getElementById("agenda3").style.visibility == "visible") || (document.getElementById("agenda4").style.visibility == "visible")){
			if(agenda > 0 && agenda < 5){
				if(agenda == 4){
					agenda = 1;
					document.getElementById("agenda").innerHTML = agenda;
					mostrarAgenda();
					}
				else{
					agenda++;
					document.getElementById("agenda").innerHTML = agenda;
					mostrarAgenda();
					}
				}
			}
		
		if((document.getElementById("IT").style.visibility == "visible") || (document.getElementById("ES").style.visibility == "visible")
			|| (document.getElementById("AJ").style.visibility == "visible") || (document.getElementById("TL").style.visibility == "visible")
			|| (document.getElementById("AS").style.visibility == "visible")){	
			if(opt > 0 && opt < 6){
				if(opt == 1){
					opt = 5;
					document.getElementById("tb").innerHTML = opt;
					mostrar();
					}
				else{
					opt--;
					document.getElementById("tb").innerHTML = opt;
					mostrar();
					}
				} 
			}
	}
	
	function mostrarMenu(){
		var mtt = document.getElementById("mt").innerHTML; 
		var metel = parseInt(mtt,10);
		switch(metel){
			case 1:
				document.getElementById("menu2").style.visibility = "hidden";
				document.getElementById("menu1").style.visibility = "visible";
				break;
			case 2:
				document.getElementById("menu1").style.visibility = "hidden";
				document.getElementById("menu2").style.visibility = "visible";
				break;
			default:
				break;
				}
	}
	
	function mostrarEs(){
		var tesv = document.getElementById("tbes").innerHTML;
		var tesvar = parseInt(tesv,10); 
		switch(tesvar){
			case 1:
				document.getElementById("tes").style.visibility = "hidden";
				document.getElementById("tes2").style.visibility = "visible";
				document.getElementById("IT").style.visibility = "hidden";
				document.getElementById("ES").style.visibility = "hidden";
				document.getElementById("TL").style.visibility = "hidden";
				document.getElementById("AS").style.visibility = "hidden";
				document.getElementById("AJ").style.visibility = "hidden";
				document.getElementById("tes2A").style.visibility = "hidden";
				document.getElementById("tes2B").style.visibility = "hidden";
				break;
			case 2:
				document.getElementById("tes").style.visibility = "visible";
				document.getElementById("tes2").style.visibility = "hidden";
				document.getElementById("IT").style.visibility = "hidden";
				document.getElementById("ES").style.visibility = "hidden";
				document.getElementById("TL").style.visibility = "hidden";
				document.getElementById("AS").style.visibility = "hidden";
				document.getElementById("AJ").style.visibility = "hidden";
				document.getElementById("tes2A").style.visibility = "hidden";
				document.getElementById("tes2B").style.visibility = "hidden";
				break;
			default:
				break;
		}
		
	}
	
	function mostrar(){
		var tmp = document.getElementById("tb").innerHTML; 
		var opt = parseInt(tmp,10);
		switch(opt)
			{
			case 5:
				document.getElementById("IT").style.visibility = "visible";
				document.getElementById("ES").style.visibility = "hidden";
				document.getElementById("TL").style.visibility = "hidden";
				document.getElementById("AS").style.visibility = "hidden";
				document.getElementById("AJ").style.visibility = "hidden";
				break;
			case 4:
				document.getElementById("IT").style.visibility = "hidden";
				document.getElementById("ES").style.visibility = "visible";
				document.getElementById("TL").style.visibility = "hidden";
				document.getElementById("AS").style.visibility = "hidden";
				document.getElementById("AJ").style.visibility = "hidden";
				break;
			case 3:
				document.getElementById("IT").style.visibility = "hidden";
				document.getElementById("ES").style.visibility = "hidden";
				document.getElementById("TL").style.visibility = "visible";
				document.getElementById("AS").style.visibility = "hidden";
				document.getElementById("AJ").style.visibility = "hidden";
				break;
			case 2:
				document.getElementById("IT").style.visibility = "hidden";
				document.getElementById("ES").style.visibility = "hidden";
				document.getElementById("TL").style.visibility = "hidden";
				document.getElementById("AS").style.visibility = "visible";
				document.getElementById("AJ").style.visibility = "hidden";
				break;
			case 1:
				document.getElementById("IT").style.visibility = "hidden";
				document.getElementById("ES").style.visibility = "hidden";
				document.getElementById("TL").style.visibility = "hidden";
				document.getElementById("AS").style.visibility = "hidden";
				document.getElementById("AJ").style.visibility = "visible";
				break;
			default:
			break;
		}
	}
	
function mostrarAgenda(){
		var age = document.getElementById("agenda").innerHTML; 
		var agenda = parseInt(age,10);
		switch(agenda)
			{
			case 1:
				document.getElementById("agenda1").style.visibility = "visible";
				document.getElementById("agenda2").style.visibility = "hidden";
				document.getElementById("agenda3").style.visibility = "hidden";
				document.getElementById("agenda4").style.visibility = "hidden";
				break;
			case 2:
				document.getElementById("agenda1").style.visibility = "hidden";
				document.getElementById("agenda2").style.visibility = "visible";
				document.getElementById("agenda3").style.visibility = "hidden";
				document.getElementById("agenda4").style.visibility = "hidden";
				break;
			case 3:
				document.getElementById("agenda1").style.visibility = "hidden";
				document.getElementById("agenda2").style.visibility = "hidden";
				document.getElementById("agenda3").style.visibility = "visible";
				document.getElementById("agenda4").style.visibility = "hidden";
				break;
			case 4:
				document.getElementById("agenda1").style.visibility = "hidden";
				document.getElementById("agenda2").style.visibility = "hidden";
				document.getElementById("agenda3").style.visibility = "hidden";
				document.getElementById("agenda4").style.visibility = "visible";
				break;
			default:
				break;
		}
	}
	
	function mostrarTeclado(){
		var teclado = document.getElementById("ttl").innerHTML;
		var tecla = parseInt(teclado,10);
			switch(tecla){
				case 1:
					document.getElementById("teclado1").style.visibility = "visible";
					document.getElementById("teclado2").style.visibility = "hidden";
					document.getElementById("teclado3").style.visibility = "hidden";
					document.getElementById("teclado4").style.visibility = "hidden";
					document.getElementById("teclado5").style.visibility = "hidden";
					document.getElementById("teclado6").style.visibility = "hidden";
					document.getElementById("teclado7").style.visibility = "hidden";
					document.getElementById("teclado8").style.visibility = "hidden";
					document.getElementById("teclado9").style.visibility = "hidden";
					document.getElementById("teclado10").style.visibility = "hidden";
					document.getElementById("teclado11").style.visibility = "hidden";
					document.getElementById("teclado12").style.visibility = "hidden";
					break;
				case 2:
					document.getElementById("teclado1").style.visibility = "hidden";
					document.getElementById("teclado2").style.visibility = "visible";
					document.getElementById("teclado3").style.visibility = "hidden";
					document.getElementById("teclado4").style.visibility = "hidden";
					document.getElementById("teclado5").style.visibility = "hidden";
					document.getElementById("teclado6").style.visibility = "hidden";
					document.getElementById("teclado7").style.visibility = "hidden";
					document.getElementById("teclado8").style.visibility = "hidden";
					document.getElementById("teclado9").style.visibility = "hidden";
					document.getElementById("teclado10").style.visibility = "hidden";
					document.getElementById("teclado11").style.visibility = "hidden";
					document.getElementById("teclado12").style.visibility = "hidden";
					break;
				case 3:
					document.getElementById("teclado1").style.visibility = "hidden";
					document.getElementById("teclado2").style.visibility = "hidden";
					document.getElementById("teclado3").style.visibility = "visible";
					document.getElementById("teclado4").style.visibility = "hidden";
					document.getElementById("teclado5").style.visibility = "hidden";
					document.getElementById("teclado6").style.visibility = "hidden";
					document.getElementById("teclado7").style.visibility = "hidden";
					document.getElementById("teclado8").style.visibility = "hidden";
					document.getElementById("teclado9").style.visibility = "hidden";
					document.getElementById("teclado10").style.visibility = "hidden";
					document.getElementById("teclado11").style.visibility = "hidden";
					document.getElementById("teclado12").style.visibility = "hidden";
					break;
				case 4:
					document.getElementById("teclado1").style.visibility = "hidden";
					document.getElementById("teclado2").style.visibility = "hidden";
					document.getElementById("teclado3").style.visibility = "hidden";
					document.getElementById("teclado4").style.visibility = "visible";
					document.getElementById("teclado5").style.visibility = "hidden";
					document.getElementById("teclado6").style.visibility = "hidden";
					document.getElementById("teclado7").style.visibility = "hidden";
					document.getElementById("teclado8").style.visibility = "hidden";
					document.getElementById("teclado9").style.visibility = "hidden";
					document.getElementById("teclado10").style.visibility = "hidden";
					document.getElementById("teclado11").style.visibility = "hidden";
					document.getElementById("teclado12").style.visibility = "hidden";
					break;
				case 5:
					document.getElementById("teclado1").style.visibility = "hidden";
					document.getElementById("teclado2").style.visibility = "hidden";
					document.getElementById("teclado3").style.visibility = "hidden";
					document.getElementById("teclado4").style.visibility = "hidden";
					document.getElementById("teclado5").style.visibility = "visible";
					document.getElementById("teclado6").style.visibility = "hidden";
					document.getElementById("teclado7").style.visibility = "hidden";
					document.getElementById("teclado8").style.visibility = "hidden";
					document.getElementById("teclado9").style.visibility = "hidden";
					document.getElementById("teclado10").style.visibility = "hidden";
					document.getElementById("teclado11").style.visibility = "hidden";
					document.getElementById("teclado12").style.visibility = "hidden";
					break;
				case 6:
					document.getElementById("teclado1").style.visibility = "hidden";
					document.getElementById("teclado2").style.visibility = "hidden";
					document.getElementById("teclado3").style.visibility = "hidden";
					document.getElementById("teclado4").style.visibility = "hidden";
					document.getElementById("teclado5").style.visibility = "hidden";
					document.getElementById("teclado6").style.visibility = "visible";
					document.getElementById("teclado7").style.visibility = "hidden";
					document.getElementById("teclado8").style.visibility = "hidden";
					document.getElementById("teclado9").style.visibility = "hidden";
					document.getElementById("teclado10").style.visibility = "hidden";
					document.getElementById("teclado11").style.visibility = "hidden";
					document.getElementById("teclado12").style.visibility = "hidden";
					break;
				case 7:
					document.getElementById("teclado1").style.visibility = "hidden";
					document.getElementById("teclado2").style.visibility = "hidden";
					document.getElementById("teclado3").style.visibility = "hidden";
					document.getElementById("teclado4").style.visibility = "hidden";
					document.getElementById("teclado5").style.visibility = "hidden";
					document.getElementById("teclado6").style.visibility = "hidden";
					document.getElementById("teclado7").style.visibility = "visible";
					document.getElementById("teclado8").style.visibility = "hidden";
					document.getElementById("teclado9").style.visibility = "hidden";
					document.getElementById("teclado10").style.visibility = "hidden";
					document.getElementById("teclado11").style.visibility = "hidden";
					document.getElementById("teclado12").style.visibility = "hidden";
					break;
				case 8:
					document.getElementById("teclado1").style.visibility = "hidden";
					document.getElementById("teclado2").style.visibility = "hidden";
					document.getElementById("teclado3").style.visibility = "hidden";
					document.getElementById("teclado4").style.visibility = "hidden";
					document.getElementById("teclado5").style.visibility = "hidden";
					document.getElementById("teclado6").style.visibility = "hidden";
					document.getElementById("teclado7").style.visibility = "hidden";
					document.getElementById("teclado8").style.visibility = "visible";
					document.getElementById("teclado9").style.visibility = "hidden";
					document.getElementById("teclado10").style.visibility = "hidden";
					document.getElementById("teclado11").style.visibility = "hidden";
					document.getElementById("teclado12").style.visibility = "hidden";
					break;
				case 9:
					document.getElementById("teclado1").style.visibility = "hidden";
					document.getElementById("teclado2").style.visibility = "hidden";
					document.getElementById("teclado3").style.visibility = "hidden";
					document.getElementById("teclado4").style.visibility = "hidden";
					document.getElementById("teclado5").style.visibility = "hidden";
					document.getElementById("teclado6").style.visibility = "hidden";
					document.getElementById("teclado7").style.visibility = "hidden";
					document.getElementById("teclado8").style.visibility = "hidden";
					document.getElementById("teclado9").style.visibility = "visible";
					document.getElementById("teclado10").style.visibility = "hidden";
					document.getElementById("teclado11").style.visibility = "hidden";
					document.getElementById("teclado12").style.visibility = "hidden";
					break;
				case 10:
					document.getElementById("teclado1").style.visibility = "hidden";
					document.getElementById("teclado2").style.visibility = "hidden";
					document.getElementById("teclado3").style.visibility = "hidden";
					document.getElementById("teclado4").style.visibility = "hidden";
					document.getElementById("teclado5").style.visibility = "hidden";
					document.getElementById("teclado6").style.visibility = "hidden";
					document.getElementById("teclado7").style.visibility = "hidden";
					document.getElementById("teclado8").style.visibility = "hidden";
					document.getElementById("teclado9").style.visibility = "hidden";
					document.getElementById("teclado10").style.visibility = "visible";
					document.getElementById("teclado11").style.visibility = "hidden";
					document.getElementById("teclado12").style.visibility = "hidden";
					break;
				case 11:
					document.getElementById("teclado1").style.visibility = "hidden";
					document.getElementById("teclado2").style.visibility = "hidden";
					document.getElementById("teclado3").style.visibility = "hidden";
					document.getElementById("teclado4").style.visibility = "hidden";
					document.getElementById("teclado5").style.visibility = "hidden";
					document.getElementById("teclado6").style.visibility = "hidden";
					document.getElementById("teclado7").style.visibility = "hidden";
					document.getElementById("teclado8").style.visibility = "hidden";
					document.getElementById("teclado9").style.visibility = "hidden";
					document.getElementById("teclado10").style.visibility = "hidden";
					document.getElementById("teclado11").style.visibility = "visible";
					document.getElementById("teclado12").style.visibility = "hidden";
					break;
				case 12:
					document.getElementById("teclado1").style.visibility = "hidden";
					document.getElementById("teclado2").style.visibility = "hidden";
					document.getElementById("teclado3").style.visibility = "hidden";
					document.getElementById("teclado4").style.visibility = "hidden";
					document.getElementById("teclado5").style.visibility = "hidden";
					document.getElementById("teclado6").style.visibility = "hidden";
					document.getElementById("teclado7").style.visibility = "hidden";
					document.getElementById("teclado8").style.visibility = "hidden";
					document.getElementById("teclado9").style.visibility = "hidden";
					document.getElementById("teclado10").style.visibility = "hidden";
					document.getElementById("teclado11").style.visibility = "hidden";
					document.getElementById("teclado12").style.visibility = "visible";
					break;
				default:
					break;
		}
	}

	
	
	function escolher(){
		var mtt = document.getElementById("mt").innerHTML; 
		var metel = parseInt(mtt,10);
		var tmp = document.getElementById("tb").innerHTML; 
		var opt = parseInt(tmp,10);
		var tesv = document.getElementById("tbes").innerHTML;
		var tesvar = parseInt(tesv,10); 
		var teclado = document.getElementById("ttl").innerHTML;
		var tecla = parseInt(teclado,10);
		var monitor = document.getElementById("monitor").innerHTML;
		var moni = parseInt(monitor,10);
		var age = document.getElementById("agenda").innerHTML; 
		var agenda = parseInt(age,10);
		
		if((document.getElementById("agenda1").style.visibility == "visible") || (document.getElementById("agenda2").style.visibility == "visible")
			|| (document.getElementById("agenda3").style.visibility == "visible") || (document.getElementById("agenda4").style.visibility == "visible")){
			switch(agenda){
				case 1:
					document.getElementById("call1").style.visibility = "visible";
					document.getElementById("agenda1").style.visibility = "hidden";
					document.getElementById("agenda2").style.visibility = "hidden";
					document.getElementById("agenda3").style.visibility = "hidden";
					document.getElementById("agenda4").style.visibility = "hidden";
					break;
				case 2:
					document.getElementById("call2").style.visibility = "visible";
					document.getElementById("agenda1").style.visibility = "hidden";
					document.getElementById("agenda2").style.visibility = "hidden";
					document.getElementById("agenda3").style.visibility = "hidden";
					document.getElementById("agenda4").style.visibility = "hidden";
					break;
				case 3:
					document.getElementById("call3").style.visibility = "visible";
					document.getElementById("agenda1").style.visibility = "hidden";
					document.getElementById("agenda2").style.visibility = "hidden";
					document.getElementById("agenda3").style.visibility = "hidden";
					document.getElementById("agenda4").style.visibility = "hidden";
					break;
				case 4:
					document.getElementById("call4").style.visibility = "visible";
					document.getElementById("agenda1").style.visibility = "hidden";
					document.getElementById("agenda2").style.visibility = "hidden";
					document.getElementById("agenda3").style.visibility = "hidden";
					document.getElementById("agenda4").style.visibility = "hidden";
					break;
				default:
					break;
			}
		}
					
		
		if((document.getElementById("menu1").style.visibility == "visible") || (document.getElementById("menu2").style.visibility == "visible")){
			switch(metel){
				case 1:
					document.getElementById("agenda1").style.visibility = "visible";
					document.getElementById("teclado1").style.visibility = "hidden";
					document.getElementById("menu1").style.visibility = "hidden";
					document.getElementById("menu2").style.visibility = "hidden";
					break;
				case 2:
					document.getElementById("agenda1").style.visibility = "hidden";
					document.getElementById("teclado1").style.visibility = "visible";
					document.getElementById("monitor").style.visibility = "visible";
					document.getElementById("menu1").style.visibility = "hidden";
					document.getElementById("menu2").style.visibility = "hidden";
					break;
				default:
					break;
			}
		}
		
		if((document.getElementById("tes2").style.visibility == "visible") || (document.getElementById("tes").style.visibility == "visible")){
			switch(tesvar){
				case 2:
					document.getElementById("tes2B").style.visibility = "visible";
					document.getElementById("tes2A").style.visibility = "hidden";
					document.getElementById("tes2").style.visibility = "hidden";
					document.getElementById("tes").style.visibility = "hidden";
					break;
				case 1:
					document.getElementById("tes2A").style.visibility = "visible";					
					document.getElementById("tes2B").style.visibility = "hidden";
					document.getElementById("tes2").style.visibility = "hidden";
					document.getElementById("tes").style.visibility = "hidden";
					break;
				default:
					break;
			}
		}
		if((document.getElementById("IT").style.visibility == "visible") || (document.getElementById("ES").style.visibility == "visible")
			|| (document.getElementById("AJ").style.visibility == "visible") || (document.getElementById("TL").style.visibility == "visible")
			|| (document.getElementById("AS").style.visibility == "visible")){	
			switch(opt){
				case 5:
					document.getElementById("IT").style.visibility = "hidden";
					document.getElementById("tt").style.visibility = "visible";
					break;
				case 4:
					document.getElementById("ES").style.visibility = "hidden";
					document.getElementById("tes").style.visibility = "visible";
					break;
				case 3:
					document.getElementById("TL").style.visibility = "hidden";
					document.getElementById("menu1").style.visibility = "visible";
					break;
				case 2:
					document.getElementById("AS").style.visibility = "hidden";
					document.getElementById("todo").style.visibility = "visible";
					break;
				case 1:
					document.getElementById("AJ").style.visibility = "hidden";
					document.getElementById("todo").style.visibility = "visible";
					break;
				default:
					break;
			}
		}
	
		
		if((document.getElementById("teclado1").style.visibility == "visible") || (document.getElementById("teclado2").style.visibility == "visible") ||
			(document.getElementById("teclado3").style.visibility == "visible") || (document.getElementById("teclado4").style.visibility == "visible") ||
			(document.getElementById("teclado5").style.visibility == "visible") || (document.getElementById("teclado6").style.visibility == "visible") ||
			(document.getElementById("teclado7").style.visibility == "visible") || (document.getElementById("teclado8").style.visibility == "visible") ||
			(document.getElementById("teclado9").style.visibility == "visible") || (document.getElementById("teclado10").style.visibility == "visible") ||
			(document.getElementById("teclado11").style.visibility == "visible") || (document.getElementById("teclado12").style.visibility == "visible")){
			switch(tecla){
				case 1:
					if(moni == 0)
						res = moni /10;
					else
						var res = moni + "1";
					document.getElementById("monitor").innerHTML = res;
					break;
				case 2:
					var res = moni + "4";
					document.getElementById("monitor").innerHTML = res;
					break;
				case 3:
					var res = moni + "7";
					document.getElementById("monitor").innerHTML = res;
					break;
				case 4:
					document.getElementById("cell").innerHTML = moni;
					document.getElementById("teclado4").style.visibility = "hidden";
					document.getElementById("call").style.visibility = "visible";
					document.getElementById("monitor").style.visibility = "hidden";
					break;
				case 5:
					var res = moni + "2";
					document.getElementById("monitor").innerHTML = res;
					break;
				case 6:
					var res = moni + "5";
					document.getElementById("monitor").innerHTML = res;
					break;
				case 7:
					var res = moni + "8";
					document.getElementById("monitor").innerHTML = res;
					break;
				case 8:
					var res = moni + "0";
					document.getElementById("monitor").innerHTML = res;
					break;
				case 9:
					var res = moni + "3";
					document.getElementById("monitor").innerHTML = res;
					break;
				case 10:
					var res = moni + "6";
					document.getElementById("monitor").innerHTML = res;
					break;
				case 11:
					var res = moni + "9";
					document.getElementById("monitor").innerHTML = res;
					break;
				case 12:
					var res = parseInt(moni / 10);
					document.getElementById("monitor").innerHTML = res;
					break;
				default:
					break;
			
			}
		}
	}
	
	function esconder(){
		document.getElementById("tbes").innerHTML = 2
		document.getElementById("tb").innerHTML = 5;
		document.getElementById("monitor").innerHTML = 0;
		document.getElementById("ttl").innerHTML = 1;
		document.getElementById("mt").innerHTML = 1;
		document.getElementById("agenda").innerHTML = 1;
		document.getElementById("IT").style.visibility = "visible";
		document.getElementById("ES").style.visibility = "hidden";
		document.getElementById("TL").style.visibility = "hidden";
		document.getElementById("AS").style.visibility = "hidden";
		document.getElementById("AJ").style.visibility = "hidden";
		document.getElementById("tt").style.visibility = "hidden";
		document.getElementById("tes").style.visibility = "hidden";
		document.getElementById("tes2").style.visibility = "hidden";
		document.getElementById("tes2A").style.visibility = "hidden";
		document.getElementById("tes2B").style.visibility = "hidden";
		document.getElementById("teclado1").style.visibility = "hidden";
		document.getElementById("teclado2").style.visibility = "hidden";
		document.getElementById("teclado3").style.visibility = "hidden";
		document.getElementById("teclado4").style.visibility = "hidden";
		document.getElementById("teclado5").style.visibility = "hidden";
		document.getElementById("teclado6").style.visibility = "hidden";
		document.getElementById("teclado7").style.visibility = "hidden";
		document.getElementById("teclado8").style.visibility = "hidden";
		document.getElementById("teclado9").style.visibility = "hidden";
		document.getElementById("teclado10").style.visibility = "hidden";
		document.getElementById("teclado11").style.visibility = "hidden";
		document.getElementById("teclado12").style.visibility = "hidden";
		document.getElementById("monitor").style.visibility = "hidden";
		document.getElementById("menu1").style.visibility = "hidden";
		document.getElementById("menu2").style.visibility = "hidden";
		document.getElementById("agenda1").style.visibility = "hidden";
		document.getElementById("agenda2").style.visibility = "hidden";
		document.getElementById("agenda3").style.visibility = "hidden";
		document.getElementById("agenda4").style.visibility = "hidden";
		document.getElementById("call1").style.visibility = "hidden";
		document.getElementById("call2").style.visibility = "hidden";
		document.getElementById("call3").style.visibility = "hidden";
		document.getElementById("call4").style.visibility = "hidden";
		document.getElementById("call").style.visibility = "hidden";
		document.getElementById("todo").style.visibility = "hidden";
	}