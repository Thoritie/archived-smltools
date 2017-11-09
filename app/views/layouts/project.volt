
        <!-- css for project -->
        {{ stylesheet_link('bootstrap-4/css/bootstrap.min.css') }}
        {{ stylesheet_link('project/css/style.css') }} 
        
     <!-- css for home -->
     <!-- {{ stylesheet_link('bootstrap-4/css/bootstrap.min.css') }}  -->
     {{ stylesheet_link('font-awesome/css/font-awesome.min.css') }}
     {{ stylesheet_link('magnific-popup/magnific-popup.css')}}
     {{ stylesheet_link('device-mockups/device-mockups.min.css') }}
     {{ stylesheet_link('nav/css/creative.css') }}
     {{ stylesheet_link('nav/css/creative-override.css') }}

     <!-- css for regis page -->

     <!-- {{ stylesheet_link('sml/regis.css') }}
     {{ stylesheet_link('sml/navindex.css') }} -->

     
          <!-- auto tag css edit lif -->
          <!-- {{ stylesheet_link('jslif/bootstrap-tagsinput.css') }}
          {{ stylesheet_link('jslif/app.css') }}
          {{ stylesheet_link('jslif/sb-admin-override.css') }} -->

    </head>
    <body>
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

        {{ javascript_include('popper/popper.min.js') }}        
        {{ javascript_include('project/js/jquery-3.2.1.min.js') }}        
        {{ javascript_include('bootstrap-4/js/bootstrap.min.js') }}
        {{ javascript_include('project/js/chart.min.js') }}  
        {{ javascript_include('project/js/chart-data.js') }}
        {{ javascript_include('project/js/easypiechart.js') }}  
        {{ javascript_include('project/js/easypiechart-data.js') }}  
        {{ javascript_include('project/js/bootstrap-datepicker.js') }}  
        {{ javascript_include('project/js/custom.js') }}  

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
        
        
        

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> -->
        <!-- Latest compiled and minified JavaScript -->
        <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->
        
        <!-- js for home -->
        
        <!-- {{ javascript_include('popper/popper.min.js') }}         -->    
        <!-- {{ javascript_include('jquery-easing/jquery.easing.min.js') }}                 -->
        <!-- {{ javascript_include('scrollreveal/scrollreveal.min.js') }}        
        {{ javascript_include('magnific-popup/jquery.magnific-popup.min.js') }}        
        {{ javascript_include('nav/js/creative.js') }} -->

        <!-- navbar js -->
        <!-- {{ javascript_include('jquery/jquery.min.js') }}
        {{ javascript_include('jquery/jquery.js') }}
        {{ javascript_include('jquery/jquery.min.js') }}        
        {{ javascript_include('dist/jquery.validate.js')}} -->
        
        <!-- {{ javascript_include('nav/js/creative.js') }} -->
        <!-- {{ javascript_include('jquery/checkLogin.js') }}
        {{ javascript_include('jquery/signinvalidate.js') }}
        {{ javascript_include('home/global.js') }} -->

        

        
        <!-- auto tag js edit lif -->
        
        <!-- {{ javascript_include('jslif/jquery.easing.min.js') }}
        {{ javascript_include('https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js') }}
        {{ javascript_include('jslif/bootstrap-tagsinput.js') }}
        {{ javascript_include('jslif/bootstrap-tagsinput.min.js') }}
        
        {{ javascript_include('jslif/tag.js') }}

         -->