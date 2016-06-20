$(document).ready(function(){  
    $('div#emailSucesso').css("display", "none");
    $('div#aguarde').css("display", "none");
    $('div#erro').css("display", "none");
    $("#telefone").mask("(99) 9999-9999");
    $("#celular").mask("(99) 99999-9999");
    
    var r1, r2;
    
    $("#formContrato").submit(function(e){
        e.preventDefault();
        $('div#aguarde').css("display", "block");
        
        $.ajax({
        method: "POST",
        async: false,
        url: "Emails/emailContratoCurio.php",
        data: {nome:$('#nome').val(), email:$('#email').val(),
              celular:$('#celular').val(), telefone:$('#telefone').val(),
              rua:$('#rua').val(), bairro:$('#sel1').val(),
              numero:$('#numero').val(), complemento:$('#complemento').val()}
        
        }).done(function(result) {
            r2 = result;
        });
        
        $.ajax({
        method: "POST",
        async: false,
        url: "Emails/cliente.php",
        data: {nome:$('#nome').val(), email:$('#email').val()}
        
        }).done(function(result) {
            r1 = result;
        });

        if(r1 == 1 && r2 == 1){
            $('div#aguarde').css("display", "none");
            $('div#emailSucesso').css("display", "block");
        } else {
            $('div#aguarde').css("display", "none");
            $('div#erro').css("display", "block");            
        }

        setTimeout(
            function(){ 
                location.reload();
            },2000
        ); 

        return false;
    });
});

function numeros(){
    var tecla = event.keyCode;
    if (tecla >= 48 && tecla <= 57){
        return true;
    }else{
        return false;
    }
}

function letras(){
    var tecla = event.keyCode;
    if (tecla >= 48 && tecla <= 57){
        return false;
    }else{
        return true;
    }
}

