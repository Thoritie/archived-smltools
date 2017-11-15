<!-- css for Semantic-->
{{stylesheet_link('Semantic/components/card.css') }}
{{stylesheet_link('Semantic/components/dropdown.css') }}
{{stylesheet_link('Semantic/components/dropdown.min.css') }}
{{stylesheet_link('Semantic/components/segment.css') }}
{{stylesheet_link('Semantic/components/segment.min.css') }}

{{ stylesheet_link('pro2/css/normalize.css') }} 
{{ stylesheet_link('pro2/css/milligram.min.css') }} 
{{ stylesheet_link('pro2/css/styles.css') }} 
{{ stylesheet_link('sml/regis.css') }}
{{ stylesheet_link('sml/navindex.css') }}
{{stylesheet_link('Semantic/semantic.css') }}

<!-- css for home -->
<!-- {{ stylesheet_link('bootstrap-4/css/bootstrap.min.css') }} 
   {{ stylesheet_link('font-awesome/css/font-awesome.min.css') }}
   {{ stylesheet_link('magnific-popup/magnific-popup.css')}}
   {{ stylesheet_link('device-mockups/device-mockups.min.css') }} -->
<!-- css for dashboard page -->
<!-- auto tag css edit lif -->
{{ stylesheet_link('jslif/bootstrap-tagsinput.css') }}
{{ stylesheet_link('jslif/app.css') }}
{{ stylesheet_link('jslif/sb-admin.css') }} 
{{ stylesheet_link('jslif/sb-admin-override.css') }}
{{ stylesheet_link('pro/css/style.css') }} 
{{ javascript_include('jquery/jquery.js') }}
<!-- js for dashboard -->
{{ javascript_include('jquery/jquery.min.js') }}
{{ javascript_include('popper/popper.min.js') }}
{{ javascript_include('bootstrap-4/js/bootstrap.min.js') }}
{{ javascript_include('scrollreveal/scrollreveal.min.js') }}
{{ javascript_include('magnific-popup/jquery.magnific-popup.min.js') }}
{{ javascript_include('jslif/sb-admin.js') }}
<!-- auto tag js edit lif -->
{{ javascript_include('jslif/jquery.easing.min.js') }}
{{ javascript_include('https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js') }}
{{ javascript_include('jslif/bootstrap-tagsinput.js') }}
{{ javascript_include('jslif/bootstrap-tagsinput.min.js') }}
{{ javascript_include('jslif/sb-admin.min.js') }}
{{ javascript_include('jslif/tagTaskCreate.js') }}


{{ javascript_include('dist/jquery.validate.js')}}
{{ javascript_include('jquery/createTaskValidate.js') }}
{{ javascript_include('jquery/editTaskValidate.js') }}

<!--Modal -->
    {{ stylesheet_link('Semantic/modal.css') }}
    {{ javascript_include('Semantic/modal.js') }}
     
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
         {{ content() }}
      </div>
   </div>