
        <!-- css for home -->
        <?= $this->tag->stylesheetLink('bootstrap-4/css/bootstrap.min.css') ?> 
        <?= $this->tag->stylesheetLink('font-awesome/css/font-awesome.min.css') ?>
        <?= $this->tag->stylesheetLink('magnific-popup/magnific-popup.css') ?>
        <?= $this->tag->stylesheetLink('device-mockups/device-mockups.min.css') ?>
        <?= $this->tag->stylesheetLink('nav/css/creative.css') ?>
        <?= $this->tag->stylesheetLink('nav/css/creative-override.css') ?>

        <!-- css for regis page -->

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
        
        <!-- js for home -->
        
        <?= $this->tag->javascriptInclude('popper/popper.min.js') ?>        
        <?= $this->tag->javascriptInclude('bootstrap-4/js/bootstrap.min.js') ?>        
        <?= $this->tag->javascriptInclude('jquery-easing/jquery.easing.min.js') ?>                
        <?= $this->tag->javascriptInclude('scrollreveal/scrollreveal.min.js') ?>        
        <?= $this->tag->javascriptInclude('magnific-popup/jquery.magnific-popup.min.js') ?>        
        <?= $this->tag->javascriptInclude('nav/js/creative.js') ?>

        <!-- navbar js -->
        <?= $this->tag->javascriptInclude('jquery/jquery.min.js') ?>
        <?= $this->tag->javascriptInclude('jquery/jquery.js') ?>
        <?= $this->tag->javascriptInclude('jquery/jquery.min.js') ?>        
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
        
        <?= $this->tag->javascriptInclude('jslif/tag.js') ?>

        