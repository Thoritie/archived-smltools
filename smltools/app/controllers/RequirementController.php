<?php
use Library\Common\Pagination;
use Library\Common\Common;
use Library\Enum\Enum;
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

        $this->assets->addJs('modal/cloneModal.js');
        $this->assets->addJs('jslif/tagRequirementCreate.js');

        $this->assets->addJs('jquery/requirementEditRedirect.js');

    }

    public function indexAction()
    {
        $this->view->projectname = $this->session->get('projectname');
        $this->view->ownerLayout = $this->session->get('ownerLayout');
        $this->view->userLogin   = $this->session->get('userLogin');

        $id = $this->session->get('idProject');

        $currentPage = $this->request->get('page');
        $sortBy      = $this->request->getPost('sortBy');
        $filter      = $this->request->getPost('filter');

        //Pagination
        $model = new Requirement();
        $query = array(
        	'$and' => array(
        		array('name' => new MongoRegex("/$filter/")),
        		array(
        			'$or' => array(
        				array('idProject' => $id)
        			),
        		)
        	)
        );

        $arrSortBy = array(
            'name' => 'Name',
            '_id'  => 'Create Date'
        );

        $this->view->arrSortBy = $arrSortBy;
        if($sortBy == null) {
            $sortBy = $this->request->get('sortBy');
            $sortBy = $arrSortBy['name'];
        }

        $this->view->sortBy = $sortBy;

        if($filter == null) {
            $filter = $this->request->get('filter');
            $filter = '';
        }

        $this->view->filter = $filter;

        $paginator = new Pagination(
        	array(
        		'model'            => $model,
        		'limit'            => 20,
        		'page'             => $currentPage,
        		'query'            => $query,
        		'sort'             => $sortBy,
        		'baseUrl'          => $this->url->get('Requirement'),
        		'showNumberOfPage' => 6,
        		'data'             => array(
        			'sortBy' => $sortBy,
        			'filter' => $filter
        		)
        	)
        );

         //pagination results
         $requirement = $paginator->getPaginate();
         $this->view->requirement = $requirement;
    }

    public function createAction() {
        $this->view->projectname = $this->session->get('projectname');
        $this->view->ownerLayout = $this->session->get('ownerLayout');
        $this->view->userLogin   = $this->session->get('userLogin');

        $id = $this->session->get('idProject');

        $this->tag->setDefault("idProject", $id);
        $this->view->idProject = $id;
    }

    public function saveAction() {
        $requirement_id = $this->request->getPost("idRequirement");

        if(!$requirement_id){
            $requirement = new Requirement();
        }else{
            $requirement = Requirement::findById($requirement_id);
        }

        $requirement->name        = $this->request->getPost("requirementname");
        $requirement->description = $this->request->getPost("description");
        $requirement->type        = $this->request->getPost("requirementtype");
        $requirement->idProject   = $this->request->getPost("idProject");
        $requirement->tasks        = $this->request->getPost("tasks");
        $requirement->stakeholders = $this->request->getPost("stakeholders");

        $requirement->save();
    }

    public function findStakeholderAction() {
        $this->view->disable();
        $projectId  = $this->request->getPost('projectId');

        $condition = [];

        if( $projectId ) {
            $condition["idProject"] = $projectId;
        }

        $stakeholders = Stakeholders::Find(array($condition));

        return json_encode($stakeholders);
    }

    public function findTaskAction() {
        $this->view->disable();
        $projectId  = $this->request->getPost('projectId');

        $condition = [];

        if( $projectId ) {
            $condition["idProject"] = $projectId;
        }

        $tasks = Tasks::Find(array($condition));

        return json_encode($tasks);
    }

    public function showDetailRequirementAction() {
        $id = $this->request->getPost('requirementId');

        $requirement = Requirement::findById($id);

        $requirement_detail = [];

        $requirement_detail['name']        = $requirement->name;
        $requirement_detail['description'] = $requirement->description;
        $requirement_detail['type']        = Enum::$RequirementType[$requirement->type];

        $tasksModel = new Tasks();
        $tempArray = [];

        if($requirement->tasks != null)
        foreach($requirement->tasks as $id) {
            $value = Common::getTaskNameById($tasksModel, $id);
            if($value != null)
                $tempArray[] = $value;
        };
        $requirement_detail['tasks'] = $tempArray;

        $stakeholdersModel = new Stakeholders();
        $tempArray = [];
        if($requirement->stakeholders != null)
        foreach($requirement->stakeholders as $id) {
            $value = Common::getStakeholderNameById($stakeholdersModel, $id);
            if($value != null)
                $tempArray[] = $value;
        };
        $requirement_detail['stakeholders'] = $tempArray;

        return json_encode($requirement_detail);
    }

    public function deleteRequirementAction() {
        $id = $this->request->getPost('idRequirement');

        $requirement = Requirement::findById($id);
        $requirement->delete();

        return json_encode('true');
    }

    public function editAction() {
        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;

        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;

        $ownerLayout = $this->session->get('ownerLayout');
        $this->view->ownerLayout = $ownerLayout;

        $idProject = $this->session->get('idProject');
        $this->view->idProject = $idProject;

        $id = $this->request->getPost('id');
        $requirement =  Requirement::findById($id);


        $this->view->requirement = $requirement;
        $this->tag->setDefault("idProject", $requirement->idProject);
        $this->tag->setDefault("idRequirement", $id);
        $this->tag->setDefault("editRequirementname", $requirement->name);
        $this->tag->setDefault("editDescription", $requirement->description);
        $this->tag->setDefault("editRequirementtype", $requirement->type);

        $this->view->tasks = Common::addDataArray(new Tasks(), $requirement->tasks);
        $this->view->stakeholders = Common::addDataArray(new Stakeholders(), $requirement->stakeholders);

        $conditionStake = [];
        $conditionStake["idProject"] = $idProject;
        $stakeTags = Stakeholders::Find(array($conditionStake));
        $this->view->stakeTags = $stakeTags;

        $conditionTask = [];
        $conditionTask["idProject"] = $idProject;
        $conditionTask["name"] = ['$ne' => $requirement->name];
        $taskTags = Tasks::Find(array($conditionTask));
        $this->view->taskTags = $taskTags;
    }

    public function checkDuplicateRequirementNameAction() {
        $requirementname = $this->request->getPost("requirementname");
        $idProject = $this->requst->getPost("idProject");

        $result = true;
        $condition = [];

        $condition["name"] = $requirementname;
        $condition["idProject"] = $idProject;

        $requirement = Requirement::Find(array($condition));
        if($requirement) {
            $result = false;
        }

        return json_encode($result);
    }

    public function checkDuplicateRequirementEditNameAction() {
        $requirementname = $this->request->getPost("requirementanme");
        $idProject = $this->request->getPost("idProject");
        $idRequirement = $this->request->getPost("idRequirement");

        $result = true;
        $condition = [];

        $condition["idProject"] = $idProject;
        $condition["name"] = $requirementname;

        $requirement = Requirement::Find(array($condition));
        if($requirement) {
            $result = false;
        }

        return json_encode($result);
    }
}

