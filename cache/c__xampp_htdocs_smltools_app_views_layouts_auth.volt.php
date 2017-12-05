<link rel="apple-touch-icon" sizes="180x180" href="assets/apple-icon-180x180.png">
<link href="assets/favicon.ico" rel="icon">
<?= $this->tag->stylesheetLink('homes/main.550dcf66.css') ?>

        <!-- css for home -->
        <!-- <?= $this->tag->stylesheetLink('bootstrap-4/css/bootstrap.min.css') ?>  -->
        <!-- <?= $this->tag->stylesheetLink('font-awesome/css/font-awesome.min.css') ?> -->
        <!-- <?= $this->tag->stylesheetLink('magnific-popup/magnific-popup.css') ?> -->
        <!-- <?= $this->tag->stylesheetLink('device-mockups/device-mockups.min.css') ?> -->
        <!-- <?= $this->tag->stylesheetLink('nav/css/creative.css') ?>
        <?= $this->tag->stylesheetLink('nav/css/creative-override.css') ?> -->

        <!-- css for regis page -->

        <?= $this->tag->stylesheetLink('sml/regis.css') ?>
        <?= $this->tag->stylesheetLink('sml/navindex.css') ?>
        <?= $this->tag->stylesheetLink('font-awesome/font-awesome.min.css') ?>
        
        
          <!-- auto tag css edit lif -->
          <!-- <?= $this->tag->stylesheetLink('jslif/bootstrap-tagsinput.css') ?>
          <?= $this->tag->stylesheetLink('jslif/app.css') ?>
          <?= $this->tag->stylesheetLink('jslif/sb-admin-override.css') ?> -->

    </head>
    <body>
            <header>
                    <nav class="navbar navbar-default active">
                      <div class="container">
                        <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>
                          <a class="navbar-brand" href="../index" title="">
                            <img src="assets/images/mashup-icon.svg" class="navbar-logo-img" alt="">
                            SML TOOLS
                          </a>
                        </div>
                  
                        <div class="collapse navbar-collapse" id="navbar-collapse">
                          <ul class="nav navbar-nav navbar-right">
                            <li><a href="../index" title="">Home</a></li>
                            <li><a href="register" title="">Register</a></li>
                            <li>
                              <p>
                                <a href="login" class="btn btn-default navbar-btn" title="">Login</a>
                              </p>
                            </li>
                  
                          </ul>
                        </div> 
                      </div>
                    </nav>
                  </header>
        <div>
            <?= $this->getContent() ?>
        </div>

    <!-- show nav hidden -->
        <!-- 
        <script>
        document.addEventListener("DOMContentLoaded", function (event) {
          navbarFixedTopAnimation();
        });
      </script> -->
      
      <footer class="footer-container white-text-container">
        <div class="container">
          <div class="row">
      
           
            <div class="col-xs-12">
              <h3>Software Modeling Tools</h3>
      
              <div class="row">
                <div class="col-xs-12 col-sm-7">
                  <p><small>Website created with <a href="http://www.mashup-template.com/" title="Create website with free html template">Mashup Template</a>/<a href="https://www.unsplash.com/" title="Beautiful Free Images">Unsplash</a></small>
                  </p>
                </div>
                <div class="col-xs-12 col-sm-5">
                  <p class="text-right">
                    <a href="https://facebook.com/" class="social-round-icon white-round-icon fa-icon" title="">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="https://twitter.com/" class="social-round-icon white-round-icon fa-icon" title="">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.linkedin.com/" class="social-round-icon white-round-icon fa-icon" title="">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </footer>
      
      <script>
        document.addEventListener("DOMContentLoaded", function (event) {
          navActivePage();
          scrollRevelation('.reveal');
        });
      </script>
    <?= $this->tag->javascriptInclude('homes/main.0cf8b554.js') ?>
    <?= $this->tag->javascriptInclude('homes/word.js') ?>



        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> -->
        <!-- Latest compiled and minified JavaScript -->
        <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->
        
        <!-- js for home -->
        
        <!-- <?= $this->tag->javascriptInclude('popper/popper.min.js') ?>         -->
        <?= $this->tag->javascriptInclude('bootstrap-4/js/bootstrap.min.js') ?>        
        <!-- <?= $this->tag->javascriptInclude('jquery-easing/jquery.easing.min.js') ?>                 -->
        <!-- <?= $this->tag->javascriptInclude('scrollreveal/scrollreveal.min.js') ?>         -->
        <!-- <?= $this->tag->javascriptInclude('magnific-popup/jquery.magnific-popup.min.js') ?>         -->
        <!-- <?= $this->tag->javascriptInclude('nav/js/creative.js') ?> -->

        <!-- navbar js -->
        <?= $this->tag->javascriptInclude('jquery/jquery.min.js') ?>
        <?= $this->tag->javascriptInclude('jquery/jquery.js') ?>
        <?= $this->tag->javascriptInclude('dist/jquery.validate.js') ?>
        
        <!-- <?= $this->tag->javascriptInclude('nav/js/creative.js') ?> -->
        <?= $this->tag->javascriptInclude('jquery/checkLogin.js') ?>
        <?= $this->tag->javascriptInclude('jquery/signinvalidate.js') ?>
        <!-- <?= $this->tag->javascriptInclude('home/global.js') ?> -->

        

        
        <!-- auto tag js edit lif -->
<!--         
        <?= $this->tag->javascriptInclude('jslif/jquery.easing.min.js') ?>
        <?= $this->tag->javascriptInclude('https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js') ?>
        <?= $this->tag->javascriptInclude('jslif/bootstrap-tagsinput.js') ?>
        <?= $this->tag->javascriptInclude('jslif/bootstrap-tagsinput.min.js') ?>
        
        <?= $this->tag->javascriptInclude('jslif/tag.js') ?>

         -->