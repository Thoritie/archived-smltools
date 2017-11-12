
        <!-- css for pro -->
        <?= $this->tag->stylesheetLink('Semantic/components/card.css') ?>
        <?= $this->tag->stylesheetLink('Semantic/components/dropdown.css') ?>
        <?= $this->tag->stylesheetLink('Semantic/components/dropdown.min.css') ?>
        
        <!-- <?= $this->tag->stylesheetLink('bootstrap-4/css/bootstrap.min.css') ?> -->
        <!-- <?= $this->tag->stylesheetLink('pro2/css/font-awesome.min.css') ?>  -->
        <?= $this->tag->stylesheetLink('pro2/css/normalize.css') ?> 
        <?= $this->tag->stylesheetLink('pro2/css/milligram.min.css') ?> 
        <?= $this->tag->stylesheetLink('pro2/css/styles.css') ?> 
        <?= $this->tag->stylesheetLink('sml/regis.css') ?>
        <?= $this->tag->stylesheetLink('sml/navindex.css') ?>


        
     <!-- css for home -->
     <!-- <?= $this->tag->stylesheetLink('font-awesome/css/font-awesome.min.css') ?>
     <?= $this->tag->stylesheetLink('magnific-popup/magnific-popup.css') ?>
     <?= $this->tag->stylesheetLink('device-mockups/device-mockups.min.css') ?>

    <!-- auto tag css edit lif -->
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
			<!-- <div class="column column-40 col-search"><a href="#" class="search-btn fa fa-search"></a>
				<input type="text" name="" value="" placeholder="Search..." />
			</div> -->
			<div class="column column-30">
				<div class="user-section"><a href="#">
					<img src="http://via.placeholder.com/50x50" alt="profile photo" class="circle float-left profile-photo" width="50" height="auto">
					<div class="username">
						<h4>User Name</h4>
						<p>Firstname</p>
					</div>
				</a></div>
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
                                    <!-- <li><a href="#widgets"><em class="fa fa fa-clone"></em> Widgets</a></li>
                                    <li><a href="#forms"><em class="fa fa-pencil-square-o"></em> Forms</a></li>
                                    <li><a href="#alerts"><em class="fa fa-warning"></em> Alerts</a></li>
                                    <li><a href="#buttons"><em class="fa fa-hand-o-up"></em> Buttons</a></li>
                                    <li><a href="#tables"><em class="fa fa-table"></em> Tables</a></li>
                                    <li><a href="#grid"><em class="fa fa-columns"></em> Grid</a></li> -->
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
        <?= $this->tag->javascriptInclude('jslif/tagProject.js') ?>

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
        
        