
        <!-- css for pro -->
        {{ stylesheet_link('bootstrap-4/css/bootstrap.min.css') }}
        {{ stylesheet_link('pro/css/style.css') }} 
        
     <!-- css for home -->
     {{ stylesheet_link('font-awesome/css/font-awesome.min.css') }}
     {{ stylesheet_link('magnific-popup/magnific-popup.css')}}
     {{ stylesheet_link('device-mockups/device-mockups.min.css') }}
  
    </head>
    <body>
            <nav class="navbar navbar-light bg-light justify-content-between">
                    <a class="navbar-brand">Navbar</a>
                    <form class="form-inline">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
            </nav>

            <div class="container-fluid" id="wrapper">
                    <div class="row">
                        <nav class="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 bg-faded sidebar-style-1">
                            <h1 class="site-title"><a href="index.html"><em class="fa fa-rocket"></em> Brand.name</a></h1>
                            
                            <a href="#menu-toggle" class="btn btn-default" id="menu-toggle"><em class="fa fa-bars"></em></a>
                            
                            <ul class="nav nav-pills flex-column sidebar-nav">
                                <li class="nav-item"><a class="nav-link active" href="index.html"><em class="fa fa-dashboard"></em> Dashboard <span class="sr-only">(current)</span></a></li>
                                <li class="nav-item"><a class="nav-link" href="create"><em class="fa fa-calendar-o"></em>Create</a></li>
                               </ul>
                            
                            <a href="#" class="logout-button"><em class="fa fa-power-off"></em> Signout</a>
                        </nav>
        <div class="col-xs-12 col-sm-8 offset-sm-4 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4">
            {{ content() }}
        </div>
    </div>
</div>

        {{ javascript_include('popper/popper.min.js') }}        
        {{ javascript_include('pro/js/jquery-3.2.1.min.js') }}        
        {{ javascript_include('bootstrap-4/js/bootstrap.min.js') }}
        {{ javascript_include('pro/js/chart.min.js') }}  
        {{ javascript_include('pro/js/chart-data.js') }}
        {{ javascript_include('pro/js/easypiechart.js') }}  
        {{ javascript_include('pro/js/easypiechart-data.js') }}  
        {{ javascript_include('pro/js/bootstrap-datepicker.js') }}  
        {{ javascript_include('pro/js/custom.js') }}  

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
        