$(document).ready(function(){
    $('div#emailSucesso2').css("display", "none");
    $('div#aguarde2').css("display", "none");
    $('div#erro2').css("display", "none");
    $("#telefoneContato").mask("(99) 9999-9999");
    
    var r1;
    
    $("#formContato2").submit(function(){
        $('div#aguarde2').css("display", "block");
                
        $.ajax({
        method: "POST",
        async: false,
        url: "Emails/emailContato.php",
        data: {nome:$('#nomeContato').val(), email:$('#emailContato').val(),
               telefone:$('#telefoneContato').val(),endereco:$('#enderecoContato').val(),
               mensagem:$('#mensagemContato').val()}
        }).done(function(result) {
            r1 = result;
        });
        
        if(r1 == 1){
            $('div#aguarde2').css("display", "none");
            $('div#emailSucesso2').css("display", "block");
        } else {
            $('div#aguarde2').css("display", "none");
            $('div#erro2').css("display", "block");            
        }      

        $("#formContato2").each(function(){
           this.reset();
        });
        
        setTimeout(
            function(){ 
                location.reload();
            },2000
        );
        return false;
    });
  });


