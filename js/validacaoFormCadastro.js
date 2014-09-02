$(function(){
	$("#signup input[class='input_dados']").blur(function(){
		var info = $(this).val();
		
		if(info != ""){
			var campo = $(this).attr('name');	
			validar(info, campo);
		}
	
	});

});

function validar(info, campo){

	switch(campo) {
    case "nome":
        var regex = /\w[a-z]{3,}\s\w[a-z]{3,}/i;
        var validado = regex.test(info);
        
        if(validado == false){
        	mensagem_erro(campo);
        }else{
        	esconder_mensagem(campo);
        }
        
        break;
    
    case "username":
    	var regex = /\w[a-z, 0-9, _]{4,}/g;
    	var validado = regex.test(info);
    	if(validado == false){
    		mensagem_erro(campo);
    	}

        break;
    
    default:
    
	}

function mensagem_erro(erro){
	switch(erro){
		case "nome":
			var mensagem = 
			"<div class='erro_nome erro'>Nome e sobrenome, sem n\u00fameros!</div>";
			
		break;

		case "username":
			var mensagem = 
			"<div class='erro_username erro'>Apenas letras, n\u00fameros e _</div>";
			
		default:
		

	}

	//Colocando mensagem abaixo dos inputs
	var elemento ="\"#signup input[name='"+  +"']\"";
	$("#signup input[name='"+erro+"']").after(mensagem);
	$(".erro_"+erro).slideToggle();

}

function esconder_mensagem(erro){
	$(".erro_"+erro).slideUp();
}


}


