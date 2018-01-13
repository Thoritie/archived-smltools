<?php

use MongoDB\BSON\ObjectId;
use Library\Enum\Enum;
use Library\Common\Common;
use Library\Common\Pagination;

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
        $this->assets->addCss('jslif/sb-admin-override.css');
        

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


        $this->assets->addJs('jquery/collaburationEditRedirect.js');  
       
        

    }
    public function indexAction()
    {
        $id = $this->session->get('idProject');
       
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
        
        // config paginator
        $model = new Collaboration();
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
        		'baseUrl' => $this->url->get('Collaborationsetting'),
        		'showNumberOfPage' => 6,
        		'data' => array(
        			'sortBy' => $sortBy,
        			'filter' => $filter
        		)
        	)
        );
        
		// Get the paginated results
        $collaboration = $paginator->getPaginate();
        
        $this->view->collaboration = $collaboration;        



        $project = Project::findById($idProject);
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
        $id = $this->session->get('idProject');
        $this->tag->setDefault("idProject", $id);

        $this->view->idProject = $id;



        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;
        
        $ownerLayout =   $projectname = $this->session->get('ownerLayout');
        $this->view->ownerLayout = $ownerLayout;

        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;
    }

    public function editAction()
    {

        $id = $this->request->getPost('id');
        $collaboration = Collaboration::findById($id);
       
        $this->view->include = Common::addDataArray(new Tasks(), $collaboration->include);


        $idProject = $this->session->get('idProject');
        $this->view->idProject = $idProject;
       
        $this->tag->setDefault("EdIdProject", $idProject);
        $this->tag->setDefault("EdId",$id);
        $this->tag->setDefault("EdCollaborationSettingName",$collaboration->name);
        $this->tag->setDefault("EdDescription",$collaboration->Description);
        
       
        $condition = [];
        $condition["idProject"] = $idProject;
      

        $task = Tasks::Find(array($condition));

        $this->view->task = $task;


        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;

        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;
        
        $ownerLayout =   $projectname = $this->session->get('ownerLayout');
        $this->view->ownerLayout = $ownerLayout;

      
    }

    public function deleteCollaburationAction()
    {
        $id = $this->request->getPost('idCollaboration');
        $collaboration = Collaboration::findById($id);

         $collaboration->delete();
         $this->flashSession->success('Your Collaburation Setting was delete');
        return json_encode('true');
    }

    public function saveAction(){
        $id = $this->request->getPost("id");
        if(!$id){
            $collaboration = new Collaboration();
        }else{
            $collaboration = Collaboration::findById($id);
        }

       
        $collaboration->name = $this->request->getPost("Name");
        $collaboration->Description = $this->request->getPost("Description");
        $collaboration->include = $this->request->getPost("include");
        $collaboration->idProject = $this->request->getPost("idProject");

        if($collaboration->save()){
            $this->flashSession->success('Your Collaburation Setting was save');
            return json_encode('true');

        }
        return json_encode('false');
         
            
    }

    public function findTaskAction()
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

    public function checkDupNameAction()
    {
        $idProject = $this->request->getPost('idProject');
        $collaburationName = $this->request->getPost('CollaburationName');
        $result = true;
        $condition = [];
            
        $condition["idProject"] = $idProject;
        $condition["name"] = $collaburationName;


        $collaboration = Collaboration::Find(array($condition));

        if($collaboration){
            $result = false;
        }
        return json_encode($result);
    }

    public function checkDupEditNameAction()
    {
        $idCollaburation = $this->request->getPost('idCollaburation');
        $idProject = $this->request->getPost('idProject');
        $collaburationName = $this->request->getPost('CollaburationName');
        $result = true;
        $condition = [];
            
        $condition["idProject"] = $idProject;
        $condition["name"] = $collaburationName;
       
        $collaborationCompare = Collaboration::findById($idCollaburation);
        $collaboration = Collaboration::Find(array($condition));

        if($collaboration){
            $result = false;
            if($collaboration[0]->name == $collaborationCompare->name){
                $result = true;
            }
        }
        return json_encode($result);
       
    }

    public function showDetailCollaAction()
    {
        $id = $this->request->getPost('collaId');
        $colla = Collaboration::findById($id);

        $arrColla = [];
        $arrColla['name'] = $colla->name;
        $arrColla['Description'] = $colla->Description;

       
        $tempArray = [];
        $model = new Tasks();
        if($colla->include != null)
        foreach($colla->include as $id){
        	$value = Common::getTaskNameById($model, $id);
        	if($value != null)
            	$tempArray[] = $value;
        };
        $arrColla['include'] = $tempArray;



        return json_encode($arrColla);

    }

}
