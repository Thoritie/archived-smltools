<?php

class StakeholderController extends ControllerBase
{

    public function onConstruct(){
        $this->assets->addCss('sml/regis.css');
        
        $this->assets->addCss('assetsThor/css/bootstrap.min.css');
        $this->assets->addCss('assetsThor/css/animate.min.css');
        $this->assets->addCss('assetsThor/css/light-bootstrap-dashboard.css');
        $this->assets->addCss('assetsThor/css/demo.css');
        $this->assets->addCss('assetsThor/css/pe-icon-7-stroke.css');
        $this->assets->addCss('assetsThor/css/navbar.css');
      
        
        
        $this->assets->addCss('jslif/bootstrap-tagsinput.css');
        $this->assets->addCss('jslif/app.css');
        // $this->assets->addCss('jslif/sb-admin.css');
        // $this->assets->addCss('jslif/sb-admin-override.css');
        $this->assets->addCss('projectCard/proCard.css');
        
        $this->assets->addJs('pro/js/jquery-3.2.1.min.js');
        $this->assets->addJs('assetsThor/js/bootstrap.min.js');
        $this->assets->addJs('popper/popper.min.js');
       
        $this->assets->addJs('jslif/sb-admin.js');
        $this->assets->addJs('jslif/jquery.easing.min.js');
        $this->assets->addJs('jslif/bootstrap-tagsinput.js');
        $this->assets->addJs('jslif/bootstrap-tagsinput.min.js');
        $this->assets->addJs('jslif/sb-admin.min.js');
       
        $this->assets->addJs('assetsThor/js/light-bootstrap-dashboard.js');
        $this->assets->addJs('assetsThor/js/demo.js');
       
        $this->assets->addJs('projectCard/proCard.js');

        $this->assets->addJs('dist/jquery.validate.js');
        $this->assets->addJs('jquery/createTaskValidate.js');
        $this->assets->addJs('jquery/editTaskValidate.js');
        $this->assets->addJs('jquery/jquery.redirect.js');
        $this->assets->addJs('jquery/taskRedirect.js');


    }

    public function indexAction()
    {
        $this->assets->addCss('dataTable/css/fresh-bootstrap-table.css');
        $this->assets->addCss('addResource/addRe.css');
        
        $this->assets->addJs('addResource/addRe.js');
        $this->assets->addJs('dataTable/js/jquery-1.11.2.min.js');
        $this->assets->addJs('dataTable/js/js/bootstrap.js');
        $this->assets->addJs('dataTable/js/bootstrap-table.js');
        

        $stakeholders = Stakeholders::Find();
        $this->view->stakeholders =  $stakeholders;

        //Layout
        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;
        
        $ownerLayout =   $projectname = $this->session->get('ownerLayout');
        $this->view->ownerLayout = $ownerLayout;

        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;

        $id = $this->session->get('idProject');
        $condition = [];
        if($id){
            $condition["idProject"] = $id;
            $stake = Stakeholders::Find(array($condition));
        
        }else{
            $this->view->stake = 0;
        }
        
        $this->view->stake = $stake;
    }

    public function creOrganAction()
    {
        
    }

    public function creIndivAction()
    {
        
    }

    public function creRoleAction()
    {
        
    }
    public function saveStaketAction()
    {
        $id = $this->request->getPost("idStake");
        if(!$id){
            $stakeholders = new Stakeholders();
        }else{
            $stakeholders = Stakeholders::findById($id);
        }

        //1 == Organisation
        //2 ==
        //3 ==
        $stakeholders->idProject = $this->request->getPost("idProject");
        $stakeholders->type = $this->request->getPost("type");
        if($stakeholders->type==1){

        }else if($stakeholders->type==2){

        }else{

        }
        




    }

    public function createAction()
    {
        
    }
}