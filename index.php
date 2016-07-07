<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="img/favicon.png" type="image/png">

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/carrousel.css">
    <link rel="stylesheet" href="css/topo.css">

    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/menu.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>


    <title>Aquilink</title>
</head>
<body>
    <div id="menu" class="menu">
        <a href="http://www.aquilink.com.br" id="logo"></a>

        <nav class="menu-central">
            <ul id="lista">
                <li class="linhas">
                    <a href="">
                        <span></span>
                        <p>Home</p>
                    </a>

                </li>

                <li class="linhas">
                    <a href="">
                        <span></span>
                        A empresa
                    </a>

                </li>

                <li class="linhas">
                    <a href="">
                        <span></span>
                        Planos
                    </a>

                </li>

                <li class="linhas">
                    <a href="">
                        <span></span>
                        Cobertura
                    </a>

                </li>

                <li class="linhas">
                    <a href="">
                        <span></span>
                        Assine
                    </a>

                </li>

                <li class="linhas">
                    <a href="">
                        <span></span>
                        Contato
                    </a>

                </li>
            </ul>
        </nav>

        <div id="areaDoCliente">
            <a id="cliente" href=""><p>Área do Cliente</p>&nbsp;<i id="off" class="fa fa-power-off" aria-hidden="true"></i></a>
            <main class="o-content">
                <div class="o-container">
                    <div class="o-grid__item">
                        <button class="c-hamburger c-hamburger--htx">
                            <span>toggle menu</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>

    </div>


<div class="tudo">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img src="img/banner1.jpg" alt="Chania">
            </div>
        </div>

        <!-- Left and right controls -->
        <img class="seta1" href="#myCarousel" role="button" data-slide="prev" src="img/seta_esquerda.png"/>

        <img class="seta2" href="#myCarousel" role="button" data-slide="next" src="img/seta_direita.png"/>
    </div>
</div>

    <div id="bloco" class="col-lg-12">

    </div>

    <script>
        (function() {

            "use strict";

            var toggles = document.querySelectorAll(".c-hamburger");

            for (var i = toggles.length - 1; i >= 0; i--) {
                var toggle = toggles[i];
                toggleHandler(toggle);
            };

            function toggleHandler(toggle) {
                toggle.addEventListener( "click", function(e) {
                    e.preventDefault();
                    (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
                });
            }

        })();

    </script>
</body>
</html>
