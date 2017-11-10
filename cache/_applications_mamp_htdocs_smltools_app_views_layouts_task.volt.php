
        <!-- css for home -->
        <?= $this->tag->stylesheetLink('bootstrap-4/css/bootstrap.min.css') ?> 
        <?= $this->tag->stylesheetLink('font-awesome/css/font-awesome.min.css') ?>
        <?= $this->tag->stylesheetLink('magnific-popup/magnific-popup.css') ?>
        <?= $this->tag->stylesheetLink('device-mockups/device-mockups.min.css') ?>

        <!-- css for regis page -->

        <?= $this->tag->stylesheetLink('sml/regis.css') ?>
        <?= $this->tag->stylesheetLink('sml/navindex.css') ?>

        
       
          <!-- auto tag css edit lif -->
          <?= $this->tag->stylesheetLink('jslif/bootstrap-tagsinput.css') ?>
          <?= $this->tag->stylesheetLink('jslif/app.css') ?>
          <?= $this->tag->stylesheetLink('jslif/sb-admin-override.css') ?>

          <!-- navbar new  -->
         
        <?= $this->tag->stylesheetLink('bootstrap-4/css/bootstrap.min.css') ?>
        <?= $this->tag->stylesheetLink('pro/css/style.css') ?> 
          

    </head>

    <body id="page-top">
            <div class="container-fluid" id="wrapper">
                    <div class="row">
                        <nav class="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 bg-faded sidebar-style-1">
                            <h1 class="site-title"><a href="index.html"><em class="fa fa-rocket"></em> Brand.name</a></h1>
                            
                            <a href="#menu-toggle" class="btn btn-default" id="menu-toggle"><em class="fa fa-bars"></em></a>
                            
                            <ul class="nav nav-pills flex-column sidebar-nav">
                                <li class="nav-item"><a class="nav-link active" href="index.html"><em class="fa fa-dashboard"></em> Dashboard <span class="sr-only">(current)</span></a></li>
                                <li class="nav-item"><a class="nav-link" href="create"><em class="fa fa-calendar-o"></em>Create</a></li>
                                <li class="nav-item"><a class="nav-link" href="charts.html"><em class="fa fa-bar-chart"></em> Charts</a></li>
                                <li class="nav-item"><a class="nav-link" href="elements.html"><em class="fa fa-hand-o-up"></em> UI Elements</a></li>
                                <li class="nav-item"><a class="nav-link" href="cards.html"><em class="fa fa-clone"></em> Cards</a></li>
                            </ul>
                            
                            <a href="#" class="logout-button"><em class="fa fa-power-off"></em> Signout</a>
                        </nav>
            <div class="col-xs-12 col-sm-8 offset-sm-4 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4">
                    <?= $this->getContent() ?>
            </div>
        </div>
    </div>

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
        
        
        <!-- auto tag js edit lif -->
        
        <?= $this->tag->javascriptInclude('jslif/jquery.easing.min.js') ?>
        <?= $this->tag->javascriptInclude('https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js') ?>
        <?= $this->tag->javascriptInclude('jslif/bootstrap-tagsinput.js') ?>
        <?= $this->tag->javascriptInclude('jslif/bootstrap-tagsinput.min.js') ?>
        
        <?= $this->tag->javascriptInclude('jslif/tag.js') ?>

        