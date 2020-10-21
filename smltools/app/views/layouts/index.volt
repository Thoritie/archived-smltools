  <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-icon-180x180.png">
  <link href="assets/favicon.ico" rel="icon">
  <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;700&display=swap" rel="stylesheet">

  {{ stylesheet_link('homes/main.550dcf66.css') }}

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
                          <a class="navbar-brand" href="./index.html" title="">
                            <img src="assets/images/mashup-icon.svg" class="navbar-logo-img" alt="">
                            SML TOOLS
                          </a>
                        </div>

                        <div class="collapse navbar-collapse" id="navbar-collapse">
                          <ul class="nav navbar-nav navbar-right">
                            <li><a href="./index.html" title="">Home</a></li>
                            <li><a href="auth/register" title="">Register</a></li>
                            <li>
                              <p>
                                <a href="auth/login" class="btn btn-default navbar-btn" title="">Login</a>
                              </p>
                            </li>

                          </ul>
                        </div>
                      </div>
                    </nav>
                  </header>
        <div>
            {{ content() }}
        </div>

<script>
        document.addEventListener("DOMContentLoaded", function (event) {
          navbarFixedTopAnimation();
        });
      </script>

      <footer class="footer-container white-text-container">
        <div class="container">
          <div class="row">


            <div class="col-xs-12">
              <h3>Software Modeling Tools</h3>

              <div class="row">
                <div class="col-xs-12 col-sm-7">
                  <p><small></small>
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
    {{ javascript_include('homes/main.0cf8b554.js') }}
    {{ javascript_include('homes/word.js') }}
