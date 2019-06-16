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
        $this->assets->addJs('jquery/stakeHolderDetailsRedirect.js');

        $this->assets->addJs('modal/cloneModal.js');
        $this->assets->addJs('jslif/stake.js');

    }

    public function indexAction()
    {
        // $this->assets->addCss('addResource/addRe.css');

        // $this->assets->addJs('addResource/addRe.js');

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

        $aggregate = array(
            '$match' => array(
                'idProject' => $idProject,
                'name' => new MongoRegex("/$filter/")
            ),
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
                ),
                'aggregate' => $aggregate
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
        $NoStake = $this->request->getPost("NoStake");
        $playRole = $this->request->getPost("playRole");
        $roleTF = $this->request->getPost("roleTF");


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
            $stakeholders->NoStake = $NoStake;
            $stakeholders->playRole = $playRole;
            $stakeholders->roleTF = $roleTF;
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

        $this->view->edit_playRole = Common::addDataArray(new Stakeholders(), $edstake->playRole);
        $this->view->reports = Common::addDataArray(new Stakeholders(), $edstake->reports);
        $this->view->consults = Common::addDataArray(new Stakeholders(), $edstake->consults);
        $this->view->liaises = Common::addDataArray(new Stakeholders(), $edstake->liaises);
        $this->view->delegate = Common::addDataArray(new Stakeholders(), $edstake->delegate);
        $this->view->dTask = Common::addDataArray(new Tasks(), $edstake->dTask);

        $idProject = $this->session->get('idProject');
        $this->view->idProject = $idProject;

        if($edstake->PlayerType == 'Many' or $edstake->PlayerType == 'Group')
            $this->view->check_disable = 0;
        else
            $this->view->check_disable = 1;

        $this->tag->setDefault("idProject", $idProject);
        $this->tag->setDefault("idStake", $idStake);
        $this->tag->setDefault("edrStakeName", $edstake->name);
        $this->tag->setDefault("edraka", $edstake->aka);
        $this->tag->setDefault("edisA", $edstake->isA);
        $this->tag->setDefault("edrdescription", $edstake->description);
        $this->tag->setDefault("edrconcern", $edstake->concern);
        $this->tag->setDefault("edisA", $edstake->isA);
        $this->tag->setDefault("role_edit_playerType", $edstake->PlayerType);
        $this->tag->setDefault("role_edit_TF", $edstake->roleTF);
        $this->tag->setDefault("role_edit_RolePlayer", $edstake->RolePlayer);
        $this->tag->setDefault("role_edit_number_of_stakeholder", $edstake->NoStake);
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
        $stakeholders->idProject = $this->session->get('idProject');
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
        $stakeholders->idProject = $this->session->get('idProject');
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
        $stakeholders->idProject = $this->session->get('idProject');
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

    public function checkDupNameStakeAction(){
        $idProject = $this->request->getPost('idProject');
        $id = $this->session->get('idProject');
        $StakeName = $this->request->getPost('StakeName');
        $typeStake = $this->request->getPost('typeStake');
        $result = true;
        $condition = [];

        $condition["idProject"] = $id;
        $condition["name"] = $StakeName;
        $condition["type"] = $typeStake;

        $stakeholders = Stakeholders::Find(array($condition));

        if($stakeholders){
            $result = false;
        }
        return json_encode($result);
    }

    public function checkDupNameEditStakeAction(){
        $idProject = $this->request->getPost('idProject');
        $StakeName = $this->request->getPost('StakeName');
        $typeStake = $this->request->getPost('typeStake');
        $idStake = $this->request->getPost('idStake');

        $result = true;
        $condition = [];

        $condition["idProject"] = $idProject;
        $condition["name"] = $StakeName;
        $condition["type"] = $typeStake;

        $stakeholders = Stakeholders::Find(array($condition));
        $stakeCompare = Stakeholders::findById($idStake);

        if($stakeholders){
            $result = false;
            if($stakeholders[0]->name == $stakeCompare->name){
                $result = true;
            }
        }
        return json_encode($result);
    }

    public function stakeholderDetailAction() {
        $id = $this->request->getPost('id');
        $stakeholder = Stakeholders::findById($id);

        $this->session->set("idstakeholder", $id);

        if ( $stakeholder->type == '0' || $stakeholder->type == '1' ) {
            $this->dispatcher->forward([
                "controller" => "stakeholder",
                "action" => "showDetailOrganization"
            ]);
        } else if ( $stakeholder->type == '2' ) {
            $this->dispatcher->forward([
                "controller" => "stakeholder",
                "action" => "showDetailIndividual"
            ]);
        } else {
            $this->dispatcher->forward([
                "controller" => "stakeholder",
                "action" => "showDetailRole"
            ]);
        }
    }

    public function showDetailOrganizationAction() {
        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;

        $ownerLayout =   $projectname = $this->session->get('ownerLayout');
        $this->view->ownerLayout = $ownerLayout;

        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;

        $project_id = $this->session->get('idProject');

        $condition =[];
        if ( $project_id ) {
            $condition["idProject"] = $project_id;
            $stakeholder = Stakeholders::Find(array($condition));
        }

        $this->view->stake = $stakeholder;
        $stakeholder_id = $this->session->get("idstakeholder");
        $stakeholder_details = Stakeholders::findById($stakeholder_id);

        $this->view->representative = Common::addDataArray(new Stakeholders(), $stakeholder_details->representative);
        $this->view->reports = Common::addDataArray(new Stakeholders(), $stakeholder_details->reports);
        $this->view->consults = Common::addDataArray(new Stakeholders(), $stakeholder_details->consults);
        $this->view->liaises = Common::addDataArray(new Stakeholders(), $stakeholder_details->liaises);
        $this->view->delegate = Common::addDataArray(new Stakeholders(), $stakeholder_details->delegate);
        $this->view->dTask = Common::addDataArray(new Tasks(), $stakeholder_details->dTask);

        $this->view->idProject = $project_id;
        $this->view->idStake = $stakeholder_id;
        $this->view->stakeholder_name = $stakeholder_details->name;
        $this->view->organization_name = $stakeholder_details->OrganisationName;
        $this->view->aka = $stakeholder_details->aka;
        $this->view->description = $stakeholder_details->description;
        $this->view->concern = $stakeholder_details->concern;
        $this->view->wishes = $stakeholder_details->wishes;

        $this->view->focal = 0;
        if ( $stakeholder_details->type == '1' ) {
            $this->view->focal = 1;
        }

        $condition = [];
        $condition["owner"] = $stakeholder_id;
        $ownerOf_task = Tasks::Find(array($condition));
        $this->view->ownerOf = $ownerOf_task;

        $condition = [];
        $condition["collaburator"] = $stakeholder_id;
        $collaburatorOf_task = Tasks::Find(array($condition));
        $this->view->collaburatorOf = $collaburatorOf_task;

        $condition = [];
        $condition["ownerToBe"] = $stakeholder_id;
        $ownerToBeOf_task = Tasks::Find(array($condition));
        $this->view->ownerToBeOf = $ownerToBeOf_task;

        $condition = [];
        $condition["collaboratorToBe"] = $stakeholder_id;
        $collaboratorToBeOf_task = Tasks::Find(array($condition));
        $this->view->collaboratorToBeOf = $collaboratorToBeOf_task;

        $condition = [];
        $condition["regulator"] = $stakeholder_id;
        $regulatorOf_task = Tasks::Find(array($condition));
        $this->view->regulatorOf = $regulatorOf_task;

        $condition = [];
        $condition["rOwner"] = $stakeholder_id;
        $rOwnerOf_task = Resource::Find(array($condition));
        $this->view->rOwnerOf = $rOwnerOf_task;

        $condition = [];
        $condition["pOwner"] = $stakeholder_id;
        $pOwnerOf_task = Resource::Find(array($condition));
        $this->view->pOwnerOf = $pOwnerOf_task;

        $condition = [];
        $condition["maintainer"] = $stakeholder_id;
        $maintainerOf_task = Resource::Find(array($condition));
        $this->view->maintainerOf = $maintainerOf_task;
    }

    public function showDetailIndividualAction() {
        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;

        $ownerLayout =   $projectname = $this->session->get('ownerLayout');
        $this->view->ownerLayout = $ownerLayout;

        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;

        $project_id = $this->session->get('idProject');
        $condition =[];
        if ( $project_id ) {
            $condition["idProject"] = $project_id;
            $stakeholder = Stakeholders::Find(array($condition));
        }

        $this->view->stake = $stakeholder;
        $stakeholder_id = $this->session->get("idstakeholder");
        $stakeholder_details = Stakeholders::findById($stakeholder_id);

        $this->view->idProject = $project_id;
        $this->view->idStake = $stakeholder_id;
        $this->view->stakeholder_name = $stakeholder_details->name;
        $this->view->description = $stakeholder_details->description;
        $this->view->aka = $stakeholder_details->aka;
        $this->view->concern = $stakeholder_details->concern;
        $this->view->attitude = $stakeholder_details->attitude;
        $this->view->domain = $stakeholder_details->domainKnowledge;

        $this->view->reports = Common::addDataArray(new Stakeholders(), $stakeholder_details->reports);
        $this->view->consults = Common::addDataArray(new Stakeholders(), $stakeholder_details->consults);
        $this->view->liaises = Common::addDataArray(new Stakeholders(), $stakeholder_details->liaises);
        $this->view->delegate = Common::addDataArray(new Stakeholders(), $stakeholder_details->delegate);
        $this->view->dTask = Common::addDataArray(new Tasks(), $stakeholder_details->dTask);

        $this->view->wishes = $stakeholder_details->wishes;
        $condition = [];
        $condition["owner"] = $stakeholder_id;
        $ownerOf_task = Tasks::Find(array($condition));
        $this->view->ownerOf = $ownerOf_task;

        $condition = [];
        $condition["collaburator"] = $stakeholder_id;
        $collaburatorOf_task = Tasks::Find(array($condition));
        $this->view->collaburatorOf = $collaburatorOf_task;

        $condition = [];
        $condition["ownerToBe"] = $stakeholder_id;
        $ownerToBeOf_task = Tasks::Find(array($condition));
        $this->view->ownerToBeOf = $ownerToBeOf_task;

        $condition = [];
        $condition["regulator"] = $stakeholder_id;
        $regulatorOf_task = Tasks::Find(array($condition));
        $this->view->regulatorOf = $regulatorOf_task;

        $condition = [];
        $condition["collaboratorToBe"] = $stakeholder_id;
        $collaboratorToBeOf_task = Tasks::Find(array($condition));
        $this->view->collaboratorToBeOf = $collaboratorToBeOf_task;

        $condition = [];
        $condition["rOwner"] = $stakeholder_id;
        $rOwnerOf_task = Resource::Find(array($condition));
        $this->view->rOwnerOf = $rOwnerOf_task;

        $condition = [];
        $condition["pOwner"] = $stakeholder_id;
        $pOwnerOf_task = Resource::Find(array($condition));
        $this->view->pOwnerOf = $pOwnerOf_task;

        $condition = [];
        $condition["maintainer"] = $stakeholder_id;
        $maintainerOf_task = Resource::Find(array($condition));
        $this->view->maintainerOf = $maintainerOf_task;

    }

    public function showDetailRoleAction() {
        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;

        $ownerLayout =   $projectname = $this->session->get('ownerLayout');
        $this->view->ownerLayout = $ownerLayout;

        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;

        $project_id = $this->session->get('idProject');
        $condition =[];
        if ( $project_id ) {
            $condition["idProject"] = $project_id;
            $stakeholder = Stakeholders::Find(array($condition));
        }

        $this->view->stake = $stakeholder;
        $stakeholder_id = $this->session->get("idstakeholder");
        $stakeholder_details = Stakeholders::findById($stakeholder_id);

        $this->view->idProject = $project_id;
        $this->view->idStake = $stakeholder_id;
        $this->view->stakeholder_name = $stakeholder_details->name;
        $this->view->description = $stakeholder_details->description;
        $this->view->aka = $stakeholder_details->aka;
        $this->view->concern = $stakeholder_details->concern;

        $this->view->playerType = $stakeholder_details->PlayerType;
        $this->view->numberOfStakeholder = $stakeholder_details->NoStake;
        $this->view->rolePlayer = $stakeholder_details->RolePlayer;
        $this->view->roleTF = $stakeholder_details->roleTF;

        $this->view->playRole = Common::addDataArray(new Stakeholders(), $stakeholder_details->playRole);
        $this->view->reports = Common::addDataArray(new Stakeholders(), $stakeholder_details->reports);
        $this->view->consults = Common::addDataArray(new Stakeholders(), $stakeholder_details->consults);
        $this->view->liaises = Common::addDataArray(new Stakeholders(), $stakeholder_details->liaises);
        $this->view->delegate = Common::addDataArray(new Stakeholders(), $stakeholder_details->delegate);
        $this->view->dTask = Common::addDataArray(new Tasks(), $stakeholder_details->dTask);

        $this->view->wishes = $stakeholder_details->wishes;

        $condition = [];
        $condition["owner"] = $stakeholder_id;
        $ownerOf_task = Tasks::Find(array($condition));
        $this->view->ownerOf = $ownerOf_task;

        $condition = [];
        $condition["collaburator"] = $stakeholder_id;
        $collaburatorOf_task = Tasks::Find(array($condition));
        $this->view->collaburatorOf = $collaburatorOf_task;

        $condition = [];
        $condition["ownerToBe"] = $stakeholder_id;
        $ownerToBeOf_task = Tasks::Find(array($condition));
        $this->view->ownerToBeOf = $ownerToBeOf_task;

        $condition = [];
        $condition["collaboratorToBe"] = $stakeholder_id;
        $collaboratorToBeOf_task = Tasks::Find(array($condition));
        $this->view->collaboratorToBeOf = $collaboratorToBeOf_task;

        $condition = [];
        $condition["regulator"] = $stakeholder_id;
        $regulatorOf_task = Tasks::Find(array($condition));
        $this->view->regulatorOf = $regulatorOf_task;

        $condition = [];
        $condition["rOwner"] = $stakeholder_id;
        $rOwnerOf_task = Resource::Find(array($condition));
        $this->view->rOwnerOf = $rOwnerOf_task;

        $condition = [];
        $condition["pOwner"] = $stakeholder_id;
        $pOwnerOf_task = Resource::Find(array($condition));
        $this->view->pOwnerOf = $pOwnerOf_task;

        $condition = [];
        $condition["maintainer"] = $stakeholder_id;
        $maintainerOf_task = Resource::Find(array($condition));
        $this->view->maintainerOf = $maintainerOf_task;
    }

}