<!-- css for Semantic-->
<?= $this->tag->stylesheetLink('Semantic/components/card.css') ?>
<?= $this->tag->stylesheetLink('Semantic/components/dropdown.css') ?>
<?= $this->tag->stylesheetLink('Semantic/components/dropdown.min.css') ?>
<?= $this->tag->stylesheetLink('Semantic/components/segment.css') ?>
<?= $this->tag->stylesheetLink('Semantic/components/segment.min.css') ?>

<!-- <?= $this->tag->stylesheetLink('bootstrap-4/css/bootstrap.min.css') ?> -->
<!-- <?= $this->tag->stylesheetLink('pro2/css/font-awesome.min.css') ?>  -->
<?= $this->tag->stylesheetLink('pro2/css/normalize.css') ?> 
<?= $this->tag->stylesheetLink('pro2/css/milligram.min.css') ?> 
<?= $this->tag->stylesheetLink('pro2/css/styles.css') ?> 
<?= $this->tag->stylesheetLink('sml/regis.css') ?>
<?= $this->tag->stylesheetLink('sml/navindex.css') ?>
<?= $this->tag->stylesheetLink('Semantic/semantic.css') ?>
<!-- css for home -->
<!-- <?= $this->tag->stylesheetLink('font-awesome/css/font-awesome.min.css') ?>
   <?= $this->tag->stylesheetLink('magnific-popup/magnific-popup.css') ?>
   <?= $this->tag->stylesheetLink('device-mockups/device-mockups.min.css') ?> !-->
<!-- auto tag css edit lif  -->
<?= $this->tag->stylesheetLink('jslif/bootstrap-tagsinput.css') ?> 
<?= $this->tag->stylesheetLink('jslif/app.css') ?>  
<?= $this->tag->stylesheetLink('jslif/sb-admin.css') ?> 
<?= $this->tag->stylesheetLink('jslif/sb-admin-override.css') ?> 
</head>
<body>
   <div class="">
      <div class="navbar">
         <div class="row">
            <div class="column column-30 col-site-title"><a href="#" class="site-title float-left">SMLTOOLS</a></div>
            <div class="column column-30">
               <div class="user-section">
                  <a href="#">
                     <img src="http://via.placeholder.com/50x50" alt="profile photo" class="circle float-left profile-photo" width="50" height="auto">
                     <div class="username">
                        <h4>User Name</h4>
                        <p>Firstname</p>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="row">
      <div id="sidebar" class="column">
         <h5>Navigation</h5>
         <ul>
            <li><a href="index"><em class="fa fa-home"></em> Home</a></li>
            <li><a href="create"><em class="fa fa-bar-chart"></em> Create</a></li>
         </ul>
      </div>
      <div id="main-content" class="column column-offset-20">
         <?= $this->getContent() ?>
      </div>
   </div>
   <?= $this->tag->javascriptInclude('popper/popper.min.js') ?>        
   <?= $this->tag->javascriptInclude('pro/js/jquery-3.2.1.min.js') ?>        
   <?= $this->tag->javascriptInclude('bootstrap-4/js/bootstrap.min.js') ?>
   <?= $this->tag->javascriptInclude('pro/js/chart.min.js') ?>  
   <?= $this->tag->javascriptInclude('pro/js/chart-data.js') ?>
   <?= $this->tag->javascriptInclude('pro/js/easypiechart.js') ?>  
   <?= $this->tag->javascriptInclude('pro/js/easypiechart-data.js') ?>  
   <?= $this->tag->javascriptInclude('pro/js/bootstrap-datepicker.js') ?>  
   <?= $this->tag->javascriptInclude('pro/js/custom.js') ?>
   <?= $this->tag->javascriptInclude('jslif/sb-admin.js') ?>
   <!-- tag input -->
   <?= $this->tag->javascriptInclude('jslif/jquery.easing.min.js') ?>
   <?= $this->tag->javascriptInclude('https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js') ?> 
   <?= $this->tag->javascriptInclude('jslif/bootstrap-tagsinput.js') ?>
   <?= $this->tag->javascriptInclude('jslif/bootstrap-tagsinput.min.js') ?>
   <?= $this->tag->javascriptInclude('jslif/sb-admin.min.js') ?>
   <?= $this->tag->javascriptInclude('jquery/jquery.redirect.js') ?>
   <?= $this->tag->javascriptInclude('jslif/tagProject.js') ?>
    <?= $this->tag->javascriptInclude('jquery/projectRedirect.js') ?>
 
   <!-- <script>
      window.onload = function () {
          var chart1 = document.getElementById("line-chart").getContext("2d");
          window.myLine = new Chart(chart1).Line(lineChartData, {
          responsive: true,
          scaleLineColor: "rgba(0,0,0,.2)",
          scaleGridLineColor: "rgba(0,0,0,.05)",
          scaleFontColor: "#c5c7cc"
          });
      };
      </script>
      -->
   <?= $this->tag->javascriptInclude('Semantic/componentsd/dropdown.js') ?>
   <?= $this->tag->javascriptInclude('Semantic/componentsd/dropdown.min.js') ?>