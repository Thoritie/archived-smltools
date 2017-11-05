<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Phalcon PHP Framework</title>
        {{ stylesheet_link('bootstrap-4/css/bootstrap.min.css') }} 
        <!-- {{ stylesheet_link('font-awesome/css/font-awesome.min.css') }} -->
        {{ stylesheet_link('magnific-popup/magnific-popup.css') }} 
        {{ stylesheet_link('device-mockups/device-mockups.min.css') }} 
        {{ stylesheet_link('sml/regis.css') }}
        {{ stylesheet_link('nav/css/creative.css') }}       
        {{ stylesheet_link('nav/css/creative-override.css') }}

          <!-- auto tag css edit lif -->
          {{ stylesheet_link('jslif/bootstrap-tagsinput.css') }}
          {{ stylesheet_link('jslif/app.css') }}
          {{ stylesheet_link('jslif/sb-admin-override.css') }}
          
    </head>
    <body id="page-top">
        <div>
            {{ content() }}
        </div>


        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> -->
        <!-- Latest compiled and minified JavaScript -->
        <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->
        
        {{ javascript_include('jquery/jquery.min.js') }}
        {{ javascript_include('popper/popper.min.js') }}
        {{ javascript_include('bootstrap-4/js/bootstrap.min.js') }}
        {{ javascript_include('scrollreveal/scrollreveal.min.js') }}
        {{ javascript_include('magnific-popup/jquery.magnific-popup.min.js') }} 
        

        <!-- navbar js -->
        
        {{ javascript_include('jquery/jquery.js') }}
        <!-- {{ javascript_include('nav/js/creative.js') }} -->
        {{ javascript_include('jquery/checkLogin.js') }}

        
        <!-- auto tag js edit lif -->
        {{ javascript_include('jslif/jquery.easing.min.js') }}
        {{ javascript_include('https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js') }}
        {{ javascript_include('jslif/bootstrap-tagsinput.js') }}
        {{ javascript_include('jslif/bootstrap-tagsinput.min.js') }}
        
        {{ javascript_include('jslif/tag.js') }}


    </body>
</html>
