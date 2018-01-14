<?php
use MongoDB\BSON\ObjectId;
use Library\Enum\Enum;
use Library\Common\Common;
use Library\Common\Pagination;

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
        $this->assets->addJs('jquery/stakeEditRediract.js');
        


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
            $condition["idProject"] = $input;
        }

        $stakeholders = Stakeholders::Find(array($condition));

        return json_encode($stakeholders);
    }

    public function findRepresentAction()
    {
        $this->view->disable();
        $input = $this->request->getPost('project');
        $query =  Stakeholders::Find(array(
        	array('$and' => array(
                array('idProject' => $input),
                array(
                    '$or' => array(
                        array('type'=>"0"),
                        array('type'=>"1"),
                    )
                )
            )
            )
        )
        );
        echo $query;
        return json_encode($query);
    }

    public function findDtaskAction()
    {
        $this->view->disable();
        $input = $this->request->getPost('project');

        $condition = [];
        
        if($input){
            $condition["idProject"] = $input;
        }

        $tasks = Tasks::Find(array($condition));

        return json_encode($tasks);
    }

    public function editAction()
    {
        $id = $this->request->getPost('id');
        $stake = Stakeholders::findById($id);
        $this->session->set("idstaleholder", $id);
        if($stake->type=='0'||$stake->type=='1'){
            
            $this->dispatcher->forward([
            'controller' => "stakeholder",
            'action' => 'editOrgan'
            ]);
            
        }else if($stake->type=='2')
        {
            $this->dispatcher->forward([
            'controller' => "stakeholder",
            'action' => 'editIndiv'
            ]);
        }else{
            $this->dispatcher->forward([
            'controller' => "stakeholder",
            'action' => 'editRole'
            ]);
        }
    }

    public function editOrganAction()
    {
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

        // $this->view->representative = Common::addDataArray(new Stakeholders(), $stake->representative);
        // $this->view->reports = Common::addDataArray(new Stakeholders(), $stake->reports);
        // $this->view->consults = Common::addDataArray(new Stakeholders(), $stake->consults);
        // $this->view->liaises = Common::addDataArray(new Stakeholders(), $stake->liaises);
        // $this->view->delegate = Common::addDataArray(new Stakeholders(), $stake->delegate);
        // $this->view->dTask = Common::addDataArray(new Stakeholders(), $stake->dTask);

        // $idProject = $this->session->get('idProject');
        // $this->view->idProject = $idProject;

        // $this->view->idStake  = $stake->_id;
        // $this->tag->setDefault("idProject", $idProject);
        // $this->tag->setDefault("idStake", $id);
        // $this->tag->setDefault("edStakeName", $stake->name);
        // $this->tag->setDefault("aka", $stake->aka);
        // $this->tag->setDefault("description", $stake->description);
        // $this->tag->setDefault("concern", $stake->concern);

        // $conditionStake = [];
        // $conditionStake["idProject"] = $idProject;
        // $tagsStake = Stakeholders::Find(array($conditionStake));
        // $this->view->tagsStake = $tagsStake;


        // $conditionTask = [];
        // $conditionTask["idProject"] = $idProject;
        // $conditionTask["mom"] = null;
        // $conditionTask["name"] = ['$ne' => $task->name];
        // $taskTags = Tasks::Find(array($conditionTask));
        // $this->view->taskTags = $taskTags;
    }

    public function editIndivAction()
    {
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

    public function editRoleAction()
    {
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
}