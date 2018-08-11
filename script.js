
	var btn_retry = document.getElementById("btn_retry");
	var btn_submit = document.getElementById("btn_submit")
	// ciar uma variavel para cada resposta correta	
  	var answer00 = document.getElementById("answer00"); 
  	var answer05 = document.getElementById("answer05");
  	var answer06 = document.getElementById("answer06");
  	var answer10 = document.getElementById("answer10");
  	var answer13 = document.getElementById("answer13");
  	var answer17 = document.getElementById("answer17");
  	var answer19 = document.getElementById("answer19");
  	var answer23 = document.getElementById("answer23");
  	var answer25 = document.getElementById("answer25");
  	var answer27 = document.getElementById("answer27");	
  	var score = 0; // criar uma variavel para contagem de acertos 
	var form = document.getElementById('form'); // variavel para o formulario
	var correct_answers = new Array(); // uma array com as questões corretas 
	correct_answers[0] = answer00;
	correct_answers[1] = answer05;
	correct_answers[2] = answer06;
	correct_answers[3] = answer10;
	correct_answers[4] = answer13;
	correct_answers[5] = answer17; 
	correct_answers[6] = answer19;
	correct_answers[7] = answer23;
	correct_answers[8] = answer25;
	correct_answers[9] = answer27;

	var result = document.getElementById("result"); //varivael para a div resultado
	var punctuation = document.createElement("h3"); //variavel onde será escrito o resultado;	
	form.addEventListener('submit', function(event){
		// loop para verificar quantas questões corretas foram selecionadas
		for(let i = 0; i< correct_answers.length; i++ ){
			event.preventDefault(); // pagina não atualiza  		
			if (correct_answers[i].checked) {
				score++;	}
		}
		if (score <=4) {	punctuation.innerHTML = "Que pena! você acertou: "  + score +" / 10";}
		if (score >=5 && score <=7) { punctuation.innerHTML = "Quase Lá! você acertou: "  + score +" / 10";}
		if (score >=8) { punctuation.innerHTML = "Muito Bem! você acertou: " + score +" / 10";}

			result.appendChild(punctuation);

			// mudar estilo para aprsentar botão "tentar novamente" e "resultado"
			result.style.display = 'block';
			btn_retry.style.display = 'block';
			btn_submit.style.display = 'none';
		});


 	btn_retry.addEventListener('click', function(){
		window.location.reload();
	})
