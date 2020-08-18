
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tudo certo</title>
    <link rel="shortcut icon" href="img/shield.svg" />

    <link rel="stylesheet" href="css/pagelink-style.css?v=2">
</head>
<body>
    <div class="container">
        <img src="img/shield.svg" alt="" width="120" class="margin-auto">
        <h1>Tudo certo</h1>
        <p>Clique no botão abaixo para ser redirecionado para página solicitada!</p>
        <div class="btn">
            <a href="#" id="redirect">Continuar</a>
        </div>
        <p style="margin-top: 30px; font-size: 12px; color: #BBB">Este site não pertence ou tem ligação com o Facebook Inc. © Todo o conteúdo postado aqui é de criação</p>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/latest/js.cookie.min.js"></script>
    <script src="tracker.js"></script>
    <script>
        var adv  = 'moc.elgoog//:sptth'; // Colocar a URL do Advertorial invertida aqui
        document.getElementById('redirect').addEventListener('click', function (e) {window.location.replace(trackerURL(adv.split('').reverse().join('')));});
    </script>
</body>
</html>