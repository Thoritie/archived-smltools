
        <!-- css for pro -->
        <?= $this->tag->stylesheetLink('bootstrap-4/css/bootstrap.min.css') ?>
        <!-- <?= $this->tag->stylesheetLink('pro2/css/font-awesome.min.css') ?>  -->
        <?= $this->tag->stylesheetLink('pro2/css/normalize.css') ?> 
        <?= $this->tag->stylesheetLink('pro2/css/milligram.min.css') ?> 
        <?= $this->tag->stylesheetLink('pro2/css/styles.css') ?> 
        <?= $this->tag->stylesheetLink('sml/regis.css') ?>
        <?= $this->tag->stylesheetLink('sml/navindex.css') ?>

        <!-- <?= $this->tag->stylesheetLink('pro/css/style.css') ?> 
        <?= $this->tag->stylesheetLink('sml/regis.css') ?>
        <?= $this->tag->stylesheetLink('sml/navindex.css') ?> -->
        
     <!-- css for home -->
     <?= $this->tag->stylesheetLink('font-awesome/css/font-awesome.min.css') ?>
     <?= $this->tag->stylesheetLink('magnific-popup/magnific-popup.css') ?>
     <?= $this->tag->stylesheetLink('device-mockups/device-mockups.min.css') ?>
  
    </head>
    <body>
            <div class="">
                    <nav class="navbar navbar-expand-lg padnav-rl">
                           
                            <div class="column column-30 col-site-title"><a href="#" class="site-title float-left">SMLTOOLS</a></div>
                            
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                            </button>
                          
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                  </a>
                                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                  </div>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link disabled" href="#">Disabled</a>
                                </li>
                              </ul>
                              <div class="column column-30">
                                    <div class="user-section"><a href="#">
                                        <img src="http://via.placeholder.com/50x50" alt="profile photo" class="circle float-left profile-photo" width="50" height="auto">
                                        <div class="username">
                                            <h4>User Name</h4>
                                            <p>Administrator</p>
                                        </div>
                                    </a></div>
                                </div>
                            </div>
                          </nav>
                    <!-- <div class="row">
                        <div class="column column-30 col-site-title"><a href="#" class="site-title float-left">SML Tools</a></div>
                        <div class="column column-40 col-search"><a href="#" class="search-btn fa fa-search"></a>
                            <input type="text" name="" value="" placeholder="Search..." />
                        </div>
                        <div class="column column-30">
                            <div class="user-section"><a href="#">
                                <img src="http://via.placeholder.com/50x50" alt="profile photo" class="circle float-left profile-photo" width="50" height="auto">
                                <div class="username">
                                    <h4>User Name</h4>
                                    <p>Administrator</p>
                                </div>
                            </a></div>
                        </div>
                    </div> -->
                </div>

                <div class="row">
                        <div id="sidebar" class="column">
                                <h5>Navigation</h5>
                                <ul>
                                    <li><a href="index"><em class="fa fa-home"></em> Home</a></li>
                                    <li><a href="create"><em class="fa fa-bar-chart"></em> Create</a></li>
                                    <li><a href="#widgets"><em class="fa fa fa-clone"></em> Widgets</a></li>
                                    <li><a href="#forms"><em class="fa fa-pencil-square-o"></em> Forms</a></li>
                                    <li><a href="#alerts"><em class="fa fa-warning"></em> Alerts</a></li>
                                    <li><a href="#buttons"><em class="fa fa-hand-o-up"></em> Buttons</a></li>
                                    <li><a href="#tables"><em class="fa fa-table"></em> Tables</a></li>
                                    <li><a href="#grid"><em class="fa fa-columns"></em> Grid</a></li>
                                </ul>
                            </div>
            <!-- <nav class="white navcolor navbar navbar-light bg-light justify-content-between">
                    <a class="navbar-brand">Navbar</a>
                    <form class="form-inline">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
            </nav> -->

            <!-- <div class="container-fluid" id="wrapper">
                    <div class="row">
                        <nav class="white sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 bg-faded sidebar-style-1">
                            <h1 class="site-title"><a href="index.html"><em class="fa fa-rocket"></em> Brand.name</a></h1>
                            
                            <a href="#menu-toggle" class="btn btn-default" id="menu-toggle"><em class="fa fa-bars"></em></a>
                            
                            <ul class="nav nav-pills flex-column sidebar-nav">
                                <li class="nav-item"><a class="nav-link active" href="index.html"><em class="fa fa-dashboard"></em> Dashboard <span class="sr-only">(current)</span></a></li>
                                <li class="nav-item"><a class="nav-link" href="create"><em class="fa fa-calendar-o"></em>Create</a></li>
                               </ul>
                            
                            <a href="#" class="logout-button"><em class="fa fa-power-off"></em> Signout</a>
                        </nav> -->
		<div id="main-content" class="column column-offset-20">
            <?= $this->getContent() ?>
        </div>
    </div>
    <!-- </div>
</div> -->

        <?= $this->tag->javascriptInclude('popper/popper.min.js') ?>        
        <?= $this->tag->javascriptInclude('pro/js/jquery-3.2.1.min.js') ?>        
        <?= $this->tag->javascriptInclude('bootstrap-4/js/bootstrap.min.js') ?>
        <?= $this->tag->javascriptInclude('pro/js/chart.min.js') ?>  
        <?= $this->tag->javascriptInclude('pro/js/chart-data.js') ?>
        <?= $this->tag->javascriptInclude('pro/js/easypiechart.js') ?>  
        <?= $this->tag->javascriptInclude('pro/js/easypiechart-data.js') ?>  
        <?= $this->tag->javascriptInclude('pro/js/bootstrap-datepicker.js') ?>  
        <?= $this->tag->javascriptInclude('pro/js/custom.js') ?>  

        <script>
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
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        