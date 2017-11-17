<!-- css project popup -->
<!-- <link href="Semantic/components/popup.css" rel="stylesheet" /> -->


<!-- css for sidebar and navbar -->

<link href="assetsThor/css/bootstrap.min.css" rel="stylesheet" />
<link href="assetsThor/css/animate.min.css" rel="stylesheet" />
<link href="assetsThor/css/light-bootstrap-dashboard.css" rel="stylesheet" />
<link href="assetsThor/css/demo.css" rel="stylesheet" />
<link href="assetsThor/css/pe-icon-7-stroke.css" rel="stylesheet" />
<link href="assetsThor/css/navbar.css" rel="stylesheet" />



<!-- css for Semantic-->
<link href="Semantic/components/card.css" rel="stylesheet" />
<link href="Semantic/components/dropdown.css" rel="stylesheet" />
<link href="Semantic/components/dropdown.min.css" rel="stylesheet" />
<link href="Semantic/components/segment.css" rel="stylesheet" />
<link href="Semantic/components/segment.min.css" rel="stylesheet" />

<!-- css for Nav-->
<!-- <link href="pro2/css/normalize.css" rel="stylesheet" /> -->
<!-- <link href="pro2/css/milligram.min.css" rel="stylesheet" /> -->
<!-- <link href="pro2/css/styles.css" rel="stylesheet" /> -->
<!-- <link href="sml/regis.css" rel="stylesheet" /> -->
<!-- <link href="sml/navindex.css" rel="stylesheet" /> -->
<link href="Semantic/semantic.css" rel="stylesheet" />

<!-- auto tag css edit lif  -->
<link href="jslif/bootstrap-tagsinput.css" rel="stylesheet" />
<link href="jslif/app.css" rel="stylesheet" />
<link href="jslif/sb-admin.css" rel="stylesheet" />
<link href="jslif/sb-admin-override.css" rel="stylesheet" />

</head>
<body>
    <div class="wrapper">
        <div class="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
        <div class="sidebar-wrapper">
            <div class="logo">
                <a href="http://www.creative-tim.com" class="simple-text">
                    SMLTOOLS
                </a>
            </div>

            <ul class="nav">
                <li class="active">
                    <a href="dashboard.html">
                        <i class="pe-7s-graph"></i>
                        <p>Dashboard</p>
                    </a>
                </li>
                <li>
                    <a href="user.html">
                        <i class="pe-7s-user"></i>
                        <p>User Profile</p>
                    </a>
                </li>
                <li>
                    <a href="table.html">
                        <i class="pe-7s-note2"></i>
                        <p>Table List</p>
                    </a>
                </li>
                <li>
                    <a href="typography.html">
                        <i class="pe-7s-news-paper"></i>
                        <p>Typography</p>
                    </a>
                </li>
                <li>
                    <a href="icons.html">
                        <i class="pe-7s-science"></i>
                        <p>Icons</p>
                    </a>
                </li>
                <li>
                    <a href="maps.html">
                        <i class="pe-7s-map-marker"></i>
                        <p>Maps</p>
                    </a>
                </li>
                <li>
                    <a href="notifications.html">
                        <i class="pe-7s-bell"></i>
                        <p>Notifications</p>
                    </a>
                </li>
				
            </ul>
    	</div>
    </div>
    <div class="main-panel">
    <nav class="navbar s-navShadow navbar-default navbar-fixed">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Dashboard</a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-left">
                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-dashboard"></i>
								<p class="hidden-lg hidden-md">Dashboard</p>
                            </a>
                        </li>
                        <li class="dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-globe"></i>
                                    <b class="caret hidden-lg hidden-md"></b>
									<p class="hidden-lg hidden-md">
										5 Notifications
										<b class="caret"></b>
									</p>
                              </a>
                              <ul class="dropdown-menu">
                                <li><a href="#">Notification 1</a></li>
                                <li><a href="#">Notification 2</a></li>
                                <li><a href="#">Notification 3</a></li>
                                <li><a href="#">Notification 4</a></li>
                                <li><a href="#">Another notification</a></li>
                              </ul>
                        </li>
                        <li>
                           <a href="">
                                <i class="fa fa-search"></i>
								<p class="hidden-lg hidden-md">Search</p>
                            </a>
                        </li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                        <li>
                           <a href="">
                               <p>Account</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p>Log out</p>
                            </a>
                        </li>
						<li class="separator hidden-lg"></li>
                    </ul>
                </div>
            </div>
        </nav>
    <div class="content">
      
    <!-- <?php echo $this->getContent(); ?> -->
        <?= $this->getContent() ?>
   
   
   
    </div>
    </div>
    </div>

   <script src="popper/popper.min.js" type="text/javascript"></script>
   <script src="pro/js/jquery-3.2.1.min.js" type="text/javascript"></script>
   <script src="bootstrap-4/js/bootstrap.min.js" type="text/javascript"></script>
   
   <script src="jslif/sb-admin.js" type="text/javascript"></script>
    <!-- tag input -->
   <script src="jslif/jquery.easing.min.js" type="text/javascript"></script>
   <script src="'https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js" type="text/javascript"></script>
   <script src="jslif/bootstrap-tagsinput.js" type="text/javascript"></script>
   <script src="jslif/bootstrap-tagsinput.min.js" type="text/javascript"></script>
   <script src="jslif/sb-admin.min.js" type="text/javascript"></script>
   <script src="jslif/tagProject.js" type="text/javascript"></script>

   <!-- js for navber toggle and sidebar -->
   <script src="assetsThor/js/light-bootstrap-dashboard.js" type="text/javascript"></script>
   <script src="assetsThor/js/demo.js" type="text/javascript"></script>
   <script src="assetsThor/js/bootstrap.min.js" type="text/javascript"></script>

<!-- js project popup -->

<!-- <script src="Sematic/components/popup.js" type="text/javascript"></script> -->
