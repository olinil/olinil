<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" type="text/css" href="CSS/style-index.css">
    <link rel="stylesheet" type="text/css" href="CSS/style-index-winsize.css">
    <link rel="icon" href="/Bilder/ON-logo.png">
    <title>olinil.com</title>
</head>
<body>

<!----------------------------------HEADER------------------------------------------------------>
<!--Header skal være på toppen og skal ha ett ikon for nettsiden og en navigasjons-meny-->

<?php
    include "Pre-buildt/pre-header-forside.html";
?>

<!-----------------------------------MAIN-------------------------------------------------->
<!--Main skal ha hovedinnholdet på siden-->

<div class="main">

    <div id="down"></div>

    <section class="intro">
    
        <h1>
            Oliver Nilsson
        </h1>
    
        <p>
              Jeg er en gutt på 17 år som går på Amalie Skram.
          <br>Dette er en nettside hvor jeg vil legge ut litt om meg selv,
          <br>hva jeg gjør på skolen, kontakt informasjon og bilder.
          <br>Kom gjerne med tilbakemeldinger!
        </p>
    
    </section>

    <!-------------------------------scroller---------------------------------->

    <div class="text2">Fag</div>

    <div class="media-scroller snaps-inline">
        <a class="media-element" href="/HTML/FAG/Utvikling.html">
            <img src="/Bilder/programering.png">
            <p1 class="fagnavn">Utvikling</p1>
        </a>
        <a class="media-element" href="/HTML/FAG/Driftstøtte.html">
            <img src="/Bilder/servere.jpg">
            <p1 class="fagnavn">Driftstøtte</p1>
        </a>
        <a class="media-element" href="/HTML/FAG/Brukerstøtte.html">
            <img src="/Bilder/brukerstøtte.jpg">
            <p1 class="fagnavn">Brukerstøtte</p1>
        </a>
        <a class="media-element" href="/HTML/FAG/Samfunnskunskap.html">
            <img src="/Bilder/samfunn.png">
            <p1 class="fagnavn">Samfunnskunskap</p1>
        </a>
        <a class="media-element" href="/HTML/FAG/Norsk.html">
            <img src="/Bilder/bok.jpg">
            <p1 class="fagnavn">Norsk</p1>
        </a>
        <a class="media-element" href="/HTML/FAG/Gym.html">
            <img src="/Bilder/gym.jpg">
            <p1 class="fagnavn">Gym</p1>
        </a>
    </div>

</div>

<!-----------------------------------FOOTER----------------------------------------------------->
<!--Footer skal være på bunnen av nettsiden og skal markere slutten på nettsiden-->

<?php
    include "Pre-buildt/pre-footer.html";
?>

<!--------------------------------------------------------------------------------------------->

    </div>
</body>
</html>