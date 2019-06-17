<?php
use MongoDB\BSON\ObjectId;

class RequirementController extends ControllerBase
{
    public function onConstruct(){
        $this->assets->addCss('sml/regis.css');

        $this->assets->addCss('assetsThor/css/bootstrap.min.css');
        $this->assets->addCss('font-awesome/css/font-awesome.css');
        $this->assets->addCss('assetsThor/css/animate.min.css');
        $this->assets->addCss('assetsThor/css/light-bootstrap-dashboard.css');
        $this->assets->addCss('assetsThor/css/pe-icon-7-stroke.css');
        $this->assets->addCss('assetsThor/css/demo.css');
        $this->assets->addCss('assetsThor/css/navbar.css');

        $this->assets->addCss('jslif/bootstrap-tagsinput.css');
        $this->assets->addCss('jslif/app.css');

        $this->assets->addCss('jslif/sb-admin-override.css');

        $this->assets->addJs('pro/js/jquery-3.2.1.min.js');
        $this->assets->addJs('assetsThor/js/bootstrap.min.js');

        $this->assets->addJs('popper/popper.min.js');
        $this->assets->addJs('bootstrap-4/js/bootstrap.min.js');
        $this->assets->addJs('scrollreveal/scrollreveal.min.js');
        $this->assets->addJs('magnific-popup/jquery.magnific-popup.min.js');

        $this->assets->addJs('jslif/jquery.easing.min.js');
        $this->assets->addJs('jslif/typeahead.bundle.min.js');
        $this->assets->addJs('jslif/bootstrap-tagsinput.js');

        $this->assets->addJs('assetsThor/js/light-bootstrap-dashboard.js');
        $this->assets->addJs('assetsThor/js/demo.js');

        $this->assets->addJs('jquery/jquery.redirect.js');
        $this->assets->addJs('dist/jquery.validate.js');

    }

    public function indexAction() 
    {
        //Layout
        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;

        $ownerLayout =   $projectname = $this->session->get('ownerLayout');
        $this->view->ownerLayout = $ownerLayout;

        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;

        $id = $this->session->get('idProject');
    }
}

