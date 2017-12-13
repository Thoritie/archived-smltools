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
       
        // $this->assets->addJs('jslif/sb-admin.js');
        $this->assets->addJs('jslif/jquery.easing.min.js');
        $this->assets->addJs('jslif/typeahead.bundle.min.js');
        $this->assets->addJs('jslif/bootstrap-tagsinput.js');
        // $this->assets->addJs('jslif/bootstrap-tagsinput.min.js');
        // $this->assets->addJs('jslif/sb-admin.min.js');
       
        $this->assets->addJs('assetsThor/js/light-bootstrap-dashboard.js');
        $this->assets->addJs('assetsThor/js/demo.js');
       
        $this->assets->addJs('projectCard/proCard.js');

        $this->assets->addJs('dist/jquery.validate.js');
        $this->assets->addJs('jquery/jquery.redirect.js');
        $this->assets->addJs('jslif/stake.js');


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
        
        }
        
        $this->view->stake = $stake;
    }

    public function saveAction()
    {
        //0 == Organisation
        //1 == focal
        //2 == individaul
        //3 == Role
        // data will be send from js like type=0 it mean Organisation
        $name = $this->request->getPost("name");
        $Organisationname = $this->request->getPost("Organisation");
        $aka = $this->request->getPost("aka");
        $description = $this->request->getPost("description");
        $concern = $this->request->getPost("concern");
        $representative = $this->request->getPost("representative");
        $reports = $this->request->getPost("reports");
        $consults = $this->request->getPost("consults");
        $liaises = $this->request->getPost("liaises");
        $delegate = $this->request->getPost("delegate");
        $dTask = $this->request->getPost("dTask");
        $wishes = $this->request->getPost("wishes");
        $type = $this->request->getPost("type");
        $idProject = $this->request->getPost("idProject");
        $attitude = $this->request->getPost("attitude");
        $domainKnowledge = $this->request->getPost("domainKnowledge");
        $isA = $this->request->getPost("isA");
        $PlayerType = $this->request->getPost("PlayerType");
        $RolePlayer = $this->request->getPost("RolePlayer");
        
        

        $id = $this->request->getPost("idStake");
        if(!$id){
            $stakeholders = new Stakeholders();
            $stakeholders->idProject = $idProject;
        }else{
            $stakeholders = Stakeholders::findById($id);
        }

        if($type==2){
            $stakeholders->name = $name;
            $stakeholders->aka = $aka;
            $stakeholders->description = $description;
            $stakeholders->concern = $concern;
            $stakeholders->attitude = $attitude;
            $stakeholders->domainKnowledge = $domainKnowledge;
            $stakeholders->reports = $reports;
            $stakeholders->consults = $consults;
            $stakeholders->liaises = $liaises;
            $stakeholders->delegate = $delegate;
            $stakeholders->dTask = $dTask;
            $stakeholders->wishes = $wishes;
            $stakeholders->type = $type;
        }else if($type==3){
            $stakeholders->name = $name;
            $stakeholders->aka = $aka;
            $stakeholders->isA = $isA;
            $stakeholders->description = $description;
            $stakeholders->concern = $concern;
            $stakeholders->PlayerType = $PlayerType;
            $stakeholders->RolePlayer = $RolePlayer;
            $stakeholders->reports = $reports;
            $stakeholders->consults = $consults;
            $stakeholders->liaises = $liaises;
            $stakeholders->delegate = $delegate;
            $stakeholders->dTask = $dTask;
            $stakeholders->wishes = $wishes;
            $stakeholders->type = $type;
        }else{
            $stakeholders->name = $name;
            $stakeholders->OrganisationName = $Organisationname;
            $stakeholders->aka = $aka;
            $stakeholders->description = $description;
            $stakeholders->concern = $concern;
            $stakeholders->representative = $representative;
            $stakeholders->reports = $reports;
            $stakeholders->consults = $consults;
            $stakeholders->liaises = $liaises;
            $stakeholders->delegate = $delegate;
            $stakeholders->dTask = $dTask;
            $stakeholders->wishes = $wishes;
            $stakeholders->type = $type;
        }

        try {
        	$stakeholders->save();
        	$this->flashSession->success('Your information was stored correctly!');
        } catch (Exception $e) {
        	$this->flashSession->error($e->getMessage());
        }




    }

    public function createAction()
    {
        $id = $this->session->get('idProject');
        $this->tag->setDefault("idProject", $id);
        $this->view->idproject = $id;

        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;
        
        $ownerLayout =   $projectname = $this->session->get('ownerLayout');
        $this->view->ownerLayout = $ownerLayout;

        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;
    }
    public function findStakeAction()
    {
        $this->view->disable();
        $input = $this->request->getPost('project');
        
        $condition = [];
        
        if($input){
            $condition["project"] = $input;
        }

        $stakeholders = Stakeholders::Find(array($condition));

        return json_encode($stakeholders);
    }
}