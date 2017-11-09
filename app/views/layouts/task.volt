
        <!-- css for home -->
        {{ stylesheet_link('bootstrap-4/css/bootstrap.min.css') }} 
        {{ stylesheet_link('font-awesome/css/font-awesome.min.css') }}
        {{ stylesheet_link('magnific-popup/magnific-popup.css')}}
        {{ stylesheet_link('device-mockups/device-mockups.min.css') }}
        {{ stylesheet_link('nav/css/creative.css') }}
        {{ stylesheet_link('nav/css/creative-override.css') }}

        <!-- css for regis page -->

        {{ stylesheet_link('sml/regis.css') }}
        {{ stylesheet_link('sml/navindex.css') }}

        
       
          <!-- auto tag css edit lif -->
          {{ stylesheet_link('jslif/bootstrap-tagsinput.css') }}
          {{ stylesheet_link('jslif/app.css') }}
          {{ stylesheet_link('jslif/sb-admin-override.css') }}

          <!-- navbar new  -->
         
        {{ stylesheet_link('bootstrap-4/css/bootstrap.min.css') }}
        {{ stylesheet_link('project/css/style.css') }} 
          

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
                    {{ content() }}
            </div>
        </div>
    </div>

        <!-- js for home -->
        
        {{ javascript_include('popper/popper.min.js') }}        
        {{ javascript_include('bootstrap-4/js/bootstrap.min.js') }}        
        {{ javascript_include('jquery-easing/jquery.easing.min.js') }}                
        {{ javascript_include('scrollreveal/scrollreveal.min.js') }}        
        {{ javascript_include('magnific-popup/jquery.magnific-popup.min.js') }}        
        {{ javascript_include('nav/js/creative.js') }}

        <!-- navbar js -->
        {{ javascript_include('jquery/jquery.min.js') }}
        {{ javascript_include('jquery/jquery.js') }}
        {{ javascript_include('jquery/jquery.min.js') }}        
        {{ javascript_include('dist/jquery.validate.js')}}
        
        
        <!-- auto tag js edit lif -->
        
        {{ javascript_include('jslif/jquery.easing.min.js') }}
        {{ javascript_include('https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js') }}
        {{ javascript_include('jslif/bootstrap-tagsinput.js') }}
        {{ javascript_include('jslif/bootstrap-tagsinput.min.js') }}
        
        {{ javascript_include('jslif/tag.js') }}

        