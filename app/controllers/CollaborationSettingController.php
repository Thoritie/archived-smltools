<?php

class CollaborationsettingController extends ControllerBase
{
    public function onConstruct(){
        $this->assets->addCss('assetsThor/css/bootstrap.min.css');
        $this->assets->addCss('font-awesome/css/font-awesome.css');
        $this->assets->addCss('assetsThor/css/animate.min.css');
        $this->assets->addCss('assetsThor/css/light-bootstrap-dashboard.css');
        $this->assets->addCss('assetsThor/css/pe-icon-7-stroke.css');
        $this->assets->addCss('assetsThor/css/demo.css');
        $this->assets->addCss('assetsThor/css/navbar.css');

        
        $this->assets->addCss('jslif/bootstrap-tagsinput.css');
        $this->assets->addCss('jslif/app.css');
        $this->assets->addCss('addResource/addRe.css');
        

        $this->assets->addJs('pro/js/jquery-3.2.1.min.js');
        $this->assets->addJs('dist/jquery.validate.js');
        $this->assets->addJs('jquery/jquery.redirect.js');
        $this->assets->addJs('jslif/jquery.easing.min.js');

        $this->assets->addJs('assetsThor/js/bootstrap.min.js');
        $this->assets->addJs('assetsThor/js/light-bootstrap-dashboard.js');
        $this->assets->addJs('assetsThor/js/demo.js');

        $this->assets->addJs('jslif/bootstrap-tagsinput.min.js');
        $this->assets->addJs('jslif/typeahead.bundle.min.js');
        $this->assets->addJs('popper/popper.min.js');
        $this->assets->addJs('addResource/addRe.js');

        $this->assets->addJs('jslif/tagProject.js');
        $this->assets->addJs('jquery/projectRedirect.js');
        $this->assets->addJs('jquery/editProject.js');

    }
    public function indexAction()
    {
        $id = $this->session->get('idProject');
        $condition = [];
        if($id){
                
            $condition["idProject"] = $id;
            $collaborationSetting = CollaborationSetting::Find(array($condition));
            
        }else{
            $this->view->task = 0;
        }

        $this->view->collaborationSetting = $collaborationSetting;



        $project = Project::findById($id);
        $this->view->projectname = $project->name;
        $this->view->idProject = $id;
        $this->session->set("projectname", $project->name);
        
          
        $owner = Users::findById($project->createrId);
        $this->view->ownerLayout = $owner->name;
        $this->session->set("ownerLayout", $owner->name);

        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;
    }

    public function createAction()
    {
        
    }

    public function editAction()
    {
        
    }

    public function deleteAction()
    {
        
    }

}
