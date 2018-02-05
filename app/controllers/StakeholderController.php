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
        // $this->assets->addCss('projectCard/proCard.css');
        
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
       

        $this->assets->addJs('dist/jquery.validate.js');
        $this->assets->addJs('jquery/jquery.redirect.js');
        $this->assets->addJs('jquery/stakeEditRediract.js');
        
        $this->assets->addJs('modal/cloneModal.js');
        $this->assets->addJs('jslif/stake.js');

    }

    public function indexAction()
    {
        // $this->assets->addCss('dataTable/css/fresh-bootstrap-table.css');
        // $this->assets->addCss('addResource/addRe.css');
        
        // $this->assets->addJs('addResource/addRe.js');
        // $this->assets->addJs('dataTable/js/jquery-1.11.2.min.js');
        // $this->assets->addJs('dataTable/js/js/bootstrap.js');
        // $this->assets->addJs('dataTable/js/bootstrap-table.js');
        

        //Layout
        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;
        
        $ownerLayout =   $projectname = $this->session->get('ownerLayout');
        $this->view->ownerLayout = $ownerLayout;

        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;

        //data pagination
        $idProject = $this->session->get('idProject');

        $currentPage = $this->request->get('page');
        $idProject = $this->session->get('idProject');
        $sortBy = $this->request->getPost('sortBy');
        $filter = $this->request->getPost('filter');

        $arrSortBy = array(
            'name' => 'Name',
            '_id' => 'Create Date'
        );
        
        $this->view->arrSortBy = $arrSortBy;
        if($sortBy == null) $sortBy = $this->request->get('sortBy');
        if($sortBy == null) $sortBy = $arrSortBy['name'];
        $this->view->sortBy = $sortBy;
        if($filter == null) $filter = $this->request->get('filter');
        if($filter == null) $filter = '';
        $this->view->filter = $filter;

        //Pagination
        $model = new Stakeholders();
        $query = array(
        	'$and' => array(
        		array('name' => new MongoRegex("/$filter/")),
        		array(
        			'$or' => array(
        				array('idProject' => $idProject)
        			),
        		)
        	)
        );

        $paginator = new Pagination(
        	array(
        		'model' => $model,
        		'limit' => 8,
        		'page' => $currentPage,
        		'query' => $query,
        		'sort' => $sortBy,
        		'baseUrl' => $this->url->get('Stakeholder'),
        		'showNumberOfPage' => 6,
        		'data' => array(
        			'sortBy' => $sortBy,
        			'filter' => $filter
        		)
        	)
        );

        //pagination results
        $stakeholders = $paginator->getPaginate();
        $this->view->stakeholders = $stakeholders;


        
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
        $input = $this->session->get('idProject');
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
        $this->session->set("idstakeholder", $id);
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
        $idStake = $this->session->get("idstakeholder");
        $edstake = Stakeholders::findById($idStake);
        $this->view->representative = Common::addDataArray(new Stakeholders(), $edstake->representative);
        $this->view->reports = Common::addDataArray(new Stakeholders(), $edstake->reports);
        $this->view->consults = Common::addDataArray(new Stakeholders(), $edstake->consults);
        $this->view->liaises = Common::addDataArray(new Stakeholders(), $edstake->liaises);
        $this->view->delegate = Common::addDataArray(new Stakeholders(), $edstake->delegate);
        $this->view->dTask = Common::addDataArray(new Tasks(), $edstake->dTask);

        $idProject = $this->session->get('idProject');
        $this->view->idProject = $idProject;

        
        $this->tag->setDefault("idProject", $idProject);
        $this->tag->setDefault("idStake", $idStake);
        $this->tag->setDefault("edStakeName", $edstake->name);
        $this->tag->setDefault("edOrganName", $edstake->OrganisationName);
        $this->tag->setDefault("edOaka", $edstake->aka);
        $this->tag->setDefault("edOdescription", $edstake->description);
        $this->tag->setDefault("edOconcern", $edstake->concern);
        $this->tag->setDefault("edOwishes", $edstake->wishes);
        $this->view->focal = 0;
        if($edstake->type=='1')
        {
            $this->view->focal = 1;
        }
        $conditionStake = [];
        $conditionStake["idProject"] = $idProject;
        $conditionStake["name"] = ['$ne' => $edstake->name];
        $tagsStake = Stakeholders::Find(array($conditionStake));
        $this->view->tagsStake = $tagsStake;

        $query =  Stakeholders::Find(array(
        	array('$and' => array(
                array('idProject' => $idProject),
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
        $this->view->tagsRepresent = $query;

        $conditionTask = [];
        $conditionTask["idProject"] = $idProject;
        $conditionTask["mom"] = null;
        $taskTags = Tasks::Find(array($conditionTask));
        $this->view->taskTags = $taskTags;
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
        $idStake = $this->session->get("idstakeholder");
        $edstake = Stakeholders::findById($idStake);

        $this->view->reports = Common::addDataArray(new Stakeholders(), $edstake->reports);
        $this->view->consults = Common::addDataArray(new Stakeholders(), $edstake->consults);
        $this->view->liaises = Common::addDataArray(new Stakeholders(), $edstake->liaises);
        $this->view->delegate = Common::addDataArray(new Stakeholders(), $edstake->delegate);
        $this->view->dTask = Common::addDataArray(new Tasks(), $edstake->dTask);

        $idProject = $this->session->get('idProject');
        $this->view->idProject = $idProject;

        
        $this->tag->setDefault("idProject", $idProject);
        $this->tag->setDefault("idStake", $idStake);
        $this->tag->setDefault("edinStakeName", $edstake->name);
        $this->tag->setDefault("edinaka", $edstake->aka);
        $this->tag->setDefault("edindescription", $edstake->description);
        $this->tag->setDefault("edinconcern", $edstake->concern);
        $this->tag->setDefault("edattitude", $edstake->attitude);
        $this->tag->setDefault("eddomainKnowledge", $edstake->domainKnowledge);
        $this->tag->setDefault("edinwishes", $edstake->wishes);
        
        $conditionStake = [];
        $conditionStake["idProject"] = $idProject;
        $conditionStake["name"] = ['$ne' => $edstake->name];
        $tagsStake = Stakeholders::Find(array($conditionStake));
        $this->view->tagsStake = $tagsStake;


        $conditionTask = [];
        $conditionTask["idProject"] = $idProject;
        $conditionTask["mom"] = null;
        $taskTags = Tasks::Find(array($conditionTask));
        $this->view->taskTags = $taskTags;
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
        $idStake = $this->session->get("idstakeholder");
        $edstake = Stakeholders::findById($idStake);

        $this->view->reports = Common::addDataArray(new Stakeholders(), $edstake->reports);
        $this->view->consults = Common::addDataArray(new Stakeholders(), $edstake->consults);
        $this->view->liaises = Common::addDataArray(new Stakeholders(), $edstake->liaises);
        $this->view->delegate = Common::addDataArray(new Stakeholders(), $edstake->delegate);
        $this->view->dTask = Common::addDataArray(new Tasks(), $edstake->dTask);

        $idProject = $this->session->get('idProject');
        $this->view->idProject = $idProject;

        
        $this->tag->setDefault("idProject", $idProject);
        $this->tag->setDefault("idStake", $idStake);
        $this->tag->setDefault("edrStakeName", $edstake->name);
        $this->tag->setDefault("edraka", $edstake->aka);
        $this->tag->setDefault("edisA", $edstake->isA);
        $this->tag->setDefault("edrdescription", $edstake->description);
        $this->tag->setDefault("edrconcern", $edstake->concern);
        $this->tag->setDefault("edisA", $edstake->isA);
        $this->tag->setDefault("edPlayerType", $edstake->PlayerType);
        $this->tag->setDefault("edRolePlayer", $edstake->RolePlayer);
        $this->tag->setDefault("edrwishes", $edstake->wishes);
        
        $conditionStake = [];
        $conditionStake["idProject"] = $idProject;
        $conditionStake["name"] = ['$ne' => $edstake->name];
        $tagsStake = Stakeholders::Find(array($conditionStake));
        $this->view->tagsStake = $tagsStake;


        $conditionTask = [];
        $conditionTask["idProject"] = $idProject;
        $conditionTask["mom"] = null;
        $taskTags = Tasks::Find(array($conditionTask));
        $this->view->taskTags = $taskTags;
    }

    public function saveOrganisationAction()
    {
        $stakeholders = new Stakeholders();
        $stakeholders->name = $this->request->getPost("name");
        $stakeholders->Organisationname = $this->request->getPost("Organisation");
        $stakeholders->aka = $this->request->getPost("aka");
        $stakeholders->description = $this->request->getPost("description");
        $stakeholders->concern = $this->request->getPost("concern");
        $stakeholders->representative = $this->request->getPost("representative");
        $stakeholders->reports = $this->request->getPost("reports");
        $stakeholders->consults = $this->request->getPost("consults");
        $stakeholders->liaises = $this->request->getPost("liaises");
        $stakeholders->delegate = $this->request->getPost("delegate");
        $stakeholders->dTask = $this->request->getPost("dTask");
        $stakeholders->wishes = $this->request->getPost("wishes");
        $stakeholders->type = $this->request->getPost("type");
        $stakeholders->idProject = $this->request->getPost("idProject");
        $stakeholders->save();
    }

    public function saveIndividualAction()
    {
        $stakeholders = new Stakeholders();
        $stakeholders->name = $this->request->getPost("name");
        $stakeholders->aka = $this->request->getPost("aka");
        $stakeholders->description = $this->request->getPost("description");
        $stakeholders->concern = $this->request->getPost("concern");
        $stakeholders->attitude = $this->request->getPost("attitude");
        $stakeholders->domainKnowledge = $this->request->getPost("domainKnowledge");
        $stakeholders->reports = $this->request->getPost("reports");
        $stakeholders->consults = $this->request->getPost("consults");
        $stakeholders->liaises = $this->request->getPost("liaises");
        $stakeholders->delegate = $this->request->getPost("delegate");
        $stakeholders->dTask = $this->request->getPost("dTask");
        $stakeholders->wishes = $this->request->getPost("wishes");
        $stakeholders->type = "2";
        $stakeholders->idProject = $this->request->getPost("idProject");
        $stakeholders->save();
       
    }

    public function saveRoleAction()
    {
        $stakeholders = new Stakeholders();
        $stakeholders->name = $this->request->getPost("name");
        $stakeholders->aka = $this->request->getPost("aka");
        $stakeholders->isA = $this->request->getPost("isA");
        $stakeholders->description = $this->request->getPost("description");
        $stakeholders->concern = $this->request->getPost("concern");
        $stakeholders->PlayerType = $this->request->getPost("PlayerType");
        $stakeholders->RolePlayer = $this->request->getPost("RolePlayer");
        $stakeholders->reports = $this->request->getPost("reports");
        $stakeholders->consults = $this->request->getPost("consults");
        $stakeholders->liaises = $this->request->getPost("liaises");
        $stakeholders->delegate = $this->request->getPost("delegate");
        $stakeholders->dTask = $this->request->getPost("dTask");
        $stakeholders->wishes = $this->request->getPost("wishes");
        $stakeholders->type = $this->request->getPost("type");
        $stakeholders->idProject = $this->request->getPost("idProject");
        $stakeholders->save();
    }

    public function deleteStakeholderAction(){
        $id = $this->request->getPost('idStake');
        $stake = Stakeholders::findById($id);
        $stake->delete();
        return json_encode('true');
    }

    public function showDetailStakeAction(){
        $id = $this->request->getPost('stakeId');
        $stake = Stakeholder::findById($id);

        $arrStake = [];
        $arrStake['name'] = $stake->name;
        $arrStake['description'] = $stake->description;
        $arrStake['OrganisationName'] = $stake->OrganisationName;
        $arrStake['aka'] = $stake->aka;
        $arrStake['concern'] = $stake->concern;
        $arrStake['wishes'] = $stake->wishes;
        $arrStake['isA'] = $stake->isA;

        
        

    }
   
}