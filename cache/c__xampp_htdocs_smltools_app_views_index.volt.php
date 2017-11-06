<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Phalcon PHP Framework</title>
        <?= $this->tag->stylesheetLink('bootstrap-4/css/bootstrap.min.css') ?> 
        <?= $this->tag->stylesheetLink('font-awesome/css/font-awesome.min.css') ?> 
        <?= $this->tag->stylesheetLink('sml/regis.css') ?>
        <?= $this->tag->stylesheetLink('sml/navindex.css') ?>

          <!-- auto tag css edit lif -->
          <?= $this->tag->stylesheetLink('jslif/bootstrap-tagsinput.css') ?>
          <?= $this->tag->stylesheetLink('jslif/app.css') ?>
          <?= $this->tag->stylesheetLink('jslif/sb-admin-override.css') ?>

    </head>
    <body id="page-top">
        <div>
            <?= $this->getContent() ?>
        </div>


        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> -->
        <!-- Latest compiled and minified JavaScript -->
        <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->
        
        <?= $this->tag->javascriptInclude('jquery/jquery.min.js') ?>
        <?= $this->tag->javascriptInclude('popper/popper.min.js') ?>
        <?= $this->tag->javascriptInclude('bootstrap-4/js/bootstrap.min.js') ?>
        <?= $this->tag->javascriptInclude('scrollreveal/scrollreveal.min.js') ?>
        <?= $this->tag->javascriptInclude('magnific-popup/jquery.magnific-popup.min.js') ?>
        

        <!-- navbar js -->
        
        <?= $this->tag->javascriptInclude('jquery/jquery.js') ?>
        <?= $this->tag->javascriptInclude('dist/jquery.validate.js') ?>
        <!-- <?= $this->tag->javascriptInclude('nav/js/creative.js') ?> -->
        <?= $this->tag->javascriptInclude('jquery/checkLogin.js') ?>
        <?= $this->tag->javascriptInclude('jquery/signinvalidate.js') ?>
        <?= $this->tag->javascriptInclude('home/global.js') ?>

        
        <!-- auto tag js edit lif -->
        <?= $this->tag->javascriptInclude('jslif/jquery.easing.min.js') ?>
        <?= $this->tag->javascriptInclude('https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js') ?>
        <?= $this->tag->javascriptInclude('jslif/bootstrap-tagsinput.js') ?>
        <?= $this->tag->javascriptInclude('jslif/bootstrap-tagsinput.min.js') ?>
        
        <?= $this->tag->javascriptInclude('jslif/tagTask.js') ?>
        


    </body>
</html>
