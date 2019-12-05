<?php require_once("inc/head.php"); ?>
    <title>Prática em Aula JS</title>
</head>
<body>
    <?php require_once("inc/header.php"); ?>
    <main id="content" class="container-fluid px-0">
        <div id="sliderHome" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#sliderHome" data-slide-to="0" class="active"></li>
                <li data-target="#sliderHome" data-slide-to="1"></li>
                <li data-target="#sliderHome" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="..." class="d-block" alt="...">
                    <div class="carousel-caption d-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block" alt="...">
                <div class="carousel-caption d-block">
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block" alt="...">
                <div class="carousel-caption d-block">
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#sliderHome" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#sliderHome" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <section>
            <article id="tarefasFormArticle">
                <h2>Insira suas tarefas</h2>
                <form action="" method="post" id="tarefasForm">
                    <input type="text" name="tarefa" id="tarefa">
                    <button type="submit" onclick="adicionarTarefa(el)" id="adicionarTarefa">Enviar</button>
                </form>
            </article>
            <article id="tarefasListaArticle">
                <h2>Tarefas incluídas</h2>
                <ul id="tarefasLista"></ul>
            </article>
        </section>

    </main>
    <?php require_once("inc/footer.php"); ?>
</body>
</html>