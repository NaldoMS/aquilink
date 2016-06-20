$(function() {
    $(".linkRola").click(function (event) {
        event.preventDefault();

        $('.menu2').css({'height': '0'});
    });

    $(".linkRola").click(function (event) {
        event.preventDefault();
        var idElemento = $(this).attr("href");
        var deslocamento = $(idElemento).offset().top;
        $('html, body').animate({ scrollTop: deslocamento }, 1000);
    });

    $('a[class=hamburguer]').click(function(e) {


        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $('.menu2').css({'width':maskWidth,'height':maskHeight});

        $(id).fadeIn(3000);

    });

    $("ul li.itemMenu").click(function (event) {
        event.preventDefault();
    });

    function ativar(link){
        $('.itemMenu').each(function(){
            $(this).removeClass('active')
                   .addClass('desactive');
        });

        $("#" + link).removeClass('desactive')
                     .addClass("active");
    }

    function marcardesmarcar(){
        $('#change-hamburguer').each(
            function(){
                if ($(this).prop( "checked"))
                    $(this).prop("checked", false);
                else $(this).prop("checked", true);
            }
        );
    }

    var posicaoMenu = $("#fixo").offset().top;
    var posicaoMenuM = $("#menuToggle").offset().top;
    var posicaoQuemSomos = $("#quemSomos").offset().top;
    var posicaoPlanos = $("#planos").offset().top;
    var posicaoContatos = $("#contatos").offset().top;
    var largura  = $(window).width();

    $(window).resize(function() {
        posicaoMenu = $("#fixo").offset().top;
        posicaoMenuM = $("#menuToggle").offset().top;
        posicaoQuemSomos = $("#quemSomos").offset().top;
        posicaoPlanos = $("#planos").offset().top;
        posicaoContatos = $("#contatos").offset().top;
        largura  = $(window).width();
    });
    $(window).scroll(function () {
        //alert(posicaoContatos + '------' + $(this).scrollTop());
        /* Deixando o menu fixo */
        if ($(this).scrollTop() >= posicaoMenu && posicaoMenuM == 0) {
            $("#fixo").addClass('fixo');
            $(".divisao").css('visibility','visibility').css('display','block');
            $(".branco").css('visibility','visible');

            //1920
            if (largura <= 1920 && largura >= 1778) {
                $(".menu").css('margin-right','1.6%');
            }
            //1795
            else if (largura <= 1778 && largura > 1603) {
                $(".menu").css('margin-right','0.2%');
            }
            //1620
            else if (largura <= 1603 && largura > 1473) {
                $(".menu").css('margin-right','-0.6%');
            }
            //1490
            else if (largura <= 1473 && largura > 1363) {
                $(".menu").css('margin-right','-2.3%');
            }
            //1380
            else if (largura <= 1363 && largura > 1273) {
                $(".menu").css('margin-right','-4.2%');
            }
            //1290
            else if (largura <= 1273 && largura > 1183) {
                $(".menu").css('margin-right','-8.6%');
            }
            //1200
            else if (largura <= 1183 && largura > 1043) {
                $(".menu").css('margin-right','2.6%');
            }
            //1060
            else if (largura <= 1043 && largura > 983) {
                $(".menu").css('margin-right','0.6%');
            }
        }
        else {
            $("#fixo").removeClass('fixo');
            $(".divisao").css('visibility','hidden').css('display','none');
            $(".branco").css('visibility','hidden');

            //1920
            if (largura <= 1920 && largura >= 1812) {
                $(".menu").css('margin-right','0%');
            }
            //1795
            else if (largura <= 1778 && largura > 1603) {
                $(".menu").css('margin-right','-1.5%');
            }
            //1620
            else if (largura <= 1603 && largura > 1473) {
                $(".menu").css('margin-right','-2.5%');
            }
            //1490
            else if (largura <= 1473 && largura > 1363) {
                $(".menu").css('margin-right','-4.5%');
            }
            //1380
            else if (largura <= 1363 && largura > 1273) {
                $(".menu").css('margin-right','-6.5%');
            }
            //1290
            else if (largura <= 1273 && largura > 1183) {
                $(".menu").css('margin-right','-11.5%');
            }
            //1200
            else if (largura <= 1183 && largura > 1043) {
                $(".menu").css('margin-right','0');
            }
            //1060
            else if (largura <= 1043 && largura > 983) {
                $(".menu").css('margin-right','-2.5%');
            }
        }

        if ($(this).scrollTop() >= posicaoMenuM && posicaoMenuM != 0) {
            $("#menuToggle").css('position','fixed').css('top','0px').css('margin-top','0px');
            $(".tudo").css('margin-top','30px');
        }
        else{
            $("#menuToggle").css('position','relative').css('top','none');
            $(".tudo").css('margin-top','0');
        }

        /* Animação do menu */
        //1920
        if (largura <= 1920 && largura >= 1812) {
            if ($(this).scrollTop() >= 0 && $(this).scrollTop() < posicaoQuemSomos - 600) {
                ativar("liMenu1");
            }
            else if ($(this).scrollTop() >= posicaoQuemSomos - 5 && $(this).scrollTop() < posicaoPlanos - 700) {
                ativar("liMenu2");
            }
            else if ($(this).scrollTop() >= posicaoPlanos - 5 && $(this).scrollTop() < posicaoContatos - 700) {
                ativar("liMenu3");
            }
            else if ($(this).scrollTop() >= posicaoContatos - 117) {
                ativar("liMenu4");
            }
        }
        //1795
        else if (largura <= 1778 && largura > 1603) {
            if ($(this).scrollTop() >= 0 && $(this).scrollTop() < posicaoQuemSomos - 600) {
                ativar("liMenu1");
            }
            else if ($(this).scrollTop() >= posicaoQuemSomos - 5 && $(this).scrollTop() < posicaoPlanos - 700) {
                ativar("liMenu2");
            }
            else if ($(this).scrollTop() >= posicaoPlanos - 5 && $(this).scrollTop() < posicaoContatos - 700) {
                ativar("liMenu3");
            }
            else if ($(this).scrollTop() >= posicaoContatos - 117) {
                ativar("liMenu4");
            }
        }
        //1620
        else if (largura <= 1603 && largura > 1473) {
            if ($(this).scrollTop() >= 0 && $(this).scrollTop() < posicaoQuemSomos - 600) {
                ativar("liMenu1");
            }
            else if ($(this).scrollTop() >= posicaoQuemSomos - 5 && $(this).scrollTop() < posicaoPlanos - 700) {
                ativar("liMenu2");
            }
            else if ($(this).scrollTop() >= posicaoPlanos - 5 && $(this).scrollTop() < posicaoContatos - 700) {
                ativar("liMenu3");
            }
            else if ($(this).scrollTop() >= posicaoContatos - 117) {
                ativar("liMenu4");
            }
        }
        //1490
        else if (largura <= 1473 && largura > 1363) {
            if ($(this).scrollTop() >= 0 && $(this).scrollTop() < posicaoQuemSomos - 600) {
                ativar("liMenu1");
            }
            else if ($(this).scrollTop() >= posicaoQuemSomos - 5 && $(this).scrollTop() < posicaoPlanos - 700) {
                ativar("liMenu2");
            }
            else if ($(this).scrollTop() >= posicaoPlanos - 5 && $(this).scrollTop() < posicaoContatos - 700) {
                ativar("liMenu3");
            }
            else if ($(this).scrollTop() >= posicaoContatos - 117) {
                ativar("liMenu4");
            }
        }
        //1380
        else if (largura <= 1363 && largura > 1273) {
            if ($(this).scrollTop() >= 0 && $(this).scrollTop() < posicaoQuemSomos - 600) {
                ativar("liMenu1");
            }
            else if ($(this).scrollTop() >= posicaoQuemSomos - 5 && $(this).scrollTop() < posicaoPlanos - 600) {
                ativar("liMenu2");
            }
            else if ($(this).scrollTop() >= posicaoPlanos - 5 && $(this).scrollTop() < posicaoContatos - 700) {
                ativar("liMenu3");
            }
            else if ($(this).scrollTop() >= posicaoContatos - 117) {
                ativar("liMenu4");
            }
        }
        //1290
        else if (largura <= 1273 && largura > 1183) {
            if ($(this).scrollTop() >= 0 && $(this).scrollTop() < posicaoQuemSomos - 600) {
                ativar("liMenu1");
            }
            else if ($(this).scrollTop() >= posicaoQuemSomos - 5 && $(this).scrollTop() < posicaoPlanos - 550) {
                ativar("liMenu2");
            }
            else if ($(this).scrollTop() >= posicaoPlanos - 5 && $(this).scrollTop() < posicaoContatos - 700) {
                ativar("liMenu3");
            }
            else if ($(this).scrollTop() >= posicaoContatos - 117) {
                ativar("liMenu4");
            }
        }
        //1200
        else if (largura <= 1183 && largura > 1043) {
            if ($(this).scrollTop() >= 0 && $(this).scrollTop() < posicaoQuemSomos - 600) {
                ativar("liMenu1");
            }
            else if ($(this).scrollTop() >= posicaoQuemSomos - 5 && $(this).scrollTop() < posicaoPlanos - 550) {
                ativar("liMenu2");
            }
            else if ($(this).scrollTop() >= posicaoPlanos - 5 && $(this).scrollTop() < posicaoContatos - 700) {
                ativar("liMenu3");
            }
            else if ($(this).scrollTop() >= posicaoContatos - 117) {
                ativar("liMenu4");
            }
        }
        //1060
        else if (largura <= 1043 && largura > 983) {
            if ($(this).scrollTop() >= 0 && $(this).scrollTop() < posicaoQuemSomos - 600) {
                ativar("liMenu1");
            }
            else if ($(this).scrollTop() >= posicaoQuemSomos - 5 && $(this).scrollTop() < posicaoPlanos - 550) {
                ativar("liMenu2");
            }
            else if ($(this).scrollTop() >= posicaoPlanos - 5 && $(this).scrollTop() < posicaoContatos - 700) {
                ativar("liMenu3");
            }
            else if ($(this).scrollTop() >= posicaoContatos - 117) {
                ativar("liMenu4");
            }
        }
        //1000
        else if (largura <= 983 && largura > 893) {
            if ($(this).scrollTop() >= 0 && $(this).scrollTop() < posicaoQuemSomos - 600) {
                ativar("liMenu1");
            }
            else if ($(this).scrollTop() >= posicaoQuemSomos - 5 && $(this).scrollTop() < posicaoPlanos - 450) {
                ativar("liMenu2");
            }
            else if ($(this).scrollTop() >= posicaoPlanos - 5 && $(this).scrollTop() < posicaoContatos - 700) {
                ativar("liMenu3");
            }
            else if ($(this).scrollTop() >= posicaoContatos - 117) {
                ativar("liMenu4");
            }
        }
        //910
        else if (largura <= 893 && largura > 833) {
            if ($(this).scrollTop() >= 0 && $(this).scrollTop() < posicaoQuemSomos - 600) {
                ativar("liMenu1");
            }
            else if ($(this).scrollTop() >= posicaoQuemSomos - 5 && $(this).scrollTop() < posicaoPlanos - 450) {
                ativar("liMenu2");
            }
            else if ($(this).scrollTop() >= posicaoPlanos - 5 && $(this).scrollTop() < posicaoContatos - 700) {
                ativar("liMenu3");
            }
            else if ($(this).scrollTop() >= posicaoContatos - 117) {
                ativar("liMenu4");
            }
        }
        //850
        else if (largura <= 833 && largura > 773) {
            if ($(this).scrollTop() >= 0 && $(this).scrollTop() < posicaoQuemSomos - 600) {
                ativar("liMenu1");
            }
            else if ($(this).scrollTop() >= posicaoQuemSomos - 5 && $(this).scrollTop() < posicaoPlanos - 450) {
                ativar("liMenu2");
            }
            else if ($(this).scrollTop() >= posicaoPlanos - 5 && $(this).scrollTop() < posicaoContatos - 700) {
                ativar("liMenu3");
            }
            else if ($(this).scrollTop() >= posicaoContatos - 117) {
                ativar("liMenu4");
            }
        }
    });
});
