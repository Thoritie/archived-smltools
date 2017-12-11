<?php

class ResourceController extends ControllerBase
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
        $this->assets->addCss('jslif/sb-admin.css');
        $this->assets->addCss('jslif/sb-admin-override.css');
        // $this->assets->addCss('projectCard/proCard.css');

        $this->assets->addJs('jquery/jquery.js');
        $this->assets->addJs('jquery/jquery.min.js');
       // $this->assets->addJs('pro/js/jquery-3.2.1.min.js');
       $this->assets->addJs('assetsThor/js/bootstrap.min.js');
       
       

        
        $this->assets->addJs('popper/popper.min.js');
        $this->assets->addJs('bootstrap-4/js/bootstrap.min.js');
        $this->assets->addJs('scrollreveal/scrollreveal.min.js');
        $this->assets->addJs('magnific-popup/jquery.magnific-popup.min.js');
        $this->assets->addJs('jslif/sb-admin.js');

        $this->assets->addJs('jslif/jquery.easing.min.js');
        $this->assets->addJs('jslif/typeahead.bundle.min.js');
        $this->assets->addJs('jslif/bootstrap-tagsinput.js');
        $this->assets->addJs('jslif/bootstrap-tagsinput.min.js');
        $this->assets->addJs('jslif/sb-admin.min.js');
        $this->assets->addJs('jslif/tagResource.js');
       
        $this->assets->addJs('assetsThor/js/light-bootstrap-dashboard.js');
        $this->assets->addJs('assetsThor/js/demo.js');
       
        // $this->assets->addJs('projectCard/proCard.js');

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
            $res = Resource::Find(array($condition));
        
        }else{
            $this->view->res = 0;
        }
        
        $this->view->res = $res;

        

        
    }

    public function createAction()
    {

        //Layout
        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;

        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;

        $id = $this->session->get('idProject');
        $this->tag->setDefault("idProject", $id);
        $this->view->idproject = $id;

        
    }   

    public function saveAction(){

        // $id = $this->request->getPost("idResource");
        $res = new Resource();
        
        

        $res->name = $this->request->getPost("resourcename");
        $res->description = $this->request->getPost("Description");
        $res->includes = $this->request->getPost("includes");
        $res->rOwner = $this->request->getPost("rOwner");
        $res->pOwner = $this->request->getPost("pOwner");
        $res->maintainer = $this->request->getPost("maintainer");
        $res->idProject = $this->request->getPost("idProject");
        $res->save();


        
    }

    public function findStakeAction(){
        $this->view->disable();
        $input = $this->request->getPost('project');
        
        $condition = [];
        
        if($input){
            $condition["project"] = $input;
        }

        $test = Stakeholders::Find(array($condition));
       
        return json_encode($test);
    }

}