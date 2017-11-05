<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Phalcon PHP Framework</title>
        {{ stylesheet_link('bootstrap-4/css/bootstrap.min.css') }}  
        {{ stylesheet_link('sml/regis.css') }}     
        <!-- {{ stylesheet_link('nav/css/creative-override.css') }} -->
        {{ stylesheet_link('nav/css/creative.css') }}  
              
        <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
    </head>
    <body>
        <div class="container">
            {{ content() }}
        </div>


        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        <!-- navbar js -->
        {{ javascript_include('nav/js/creative.js') }}
        {{ javascript_include('jquery/jquery.js') }}
        {{ javascript_include('jquery/jquery.min.js') }}
        {{ javascript_include('jquery/checkLogin.js') }}

    </body>
</html>
