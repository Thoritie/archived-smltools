<?php

use Library\Enum\Enum;
use Library\Common\Pagination;

class ProjectController extends ControllerBase
{   
    public function onConstruct(){
        $this->assets->addCss('assetsThor/css/bootstrap.min.css');
        $this->assets->addCss('font-awesome/css/font-awesome.css');
        $this->assets->addCss('assetsThor/css/animate.min.css');
        $this->assets->addCss('assetsThor/css/light-bootstrap-dashboard.css');
        $this->assets->addCss('assetsThor/css/pe-icon-7-stroke.css');
        $this->assets->addCss('assetsThor/css/demo.css');
        $this->assets->addCss('assetsThor/css/navbar.css');
        $this->assets->addCss('jslif/sb-admin-override.css');
        
        $this->assets->addCss('jslif/bootstrap-tagsinput.css');
        $this->assets->addCss('jslif/app.css');
        // $this->assets->addCss('jslif/sb-admin.css');
        // $this->assets->addCss('jslif/sb-admin-override.css');
        // $this->assets->addCss('projectCard/proCard.css');
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

       
        // $this->assets->addJs('projectCard/proCard.js');
    }

    public function indexAction()
    {
        
        $session = $this->session->get('login');
        $session =(String)$session;
        $currentPage = $this->request->get('page');
        $currentUser = $session;
        $sortBy = $this->request->getPost('sortBy');
        $filter = $this->request->getPost('filter');
  
        // init
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
        $model = new Project();
        $query = array(
        	'$and' => array(
        		array('name' => new MongoRegex("/$filter/")),
        		array(
        			'$or' => array(
        				array('createrId' => $currentUser),
        				array('permission' => $currentUser)
        			),
        		)
        	)
        );
        
        // option of pagination
        $paginator = new Pagination(
        	array(
        		'model' => $model,
        		'limit' => 8,
        		'page' => $currentPage,
        		'query' => $query,
        		'sort' => $sortBy,
        		'baseUrl' => $this->url->get('project'),
        		'showNumberOfPage' => 6,
        		'data' => array(
        			'sortBy' => $sortBy,
        			'filter' => $filter
        		)
        	)
        );
        
		// Get the paginated results
        $dataProvider = $paginator->getPaginate();
        
        $this->view->dataProvider = $dataProvider;
        $this->view->currentUser = $currentUser;
        

        $userLogin = Users::findByID($session);
        $this->session->set("userLogin", $userLogin->name);   
        $this->view->userLogin =$userLogin->name;

        // ใช้เรียก array ของ enum เพื่อแสดงเป็นคำที่  set ไว้ 
        $this->view->arrStatus = Enum::$attitudeStatus;
        // ใช้เรียกค่าของ enum มาใช้ เช่น status = 1 เราจะไม่ใส่ค่า 1 แต่จะใส่แบบนี้แทน 1 ซึ่งเป็นของ status
        $this->view->status = Enum::positive;
        $this->view->create = $create;
        $this->view->permis = $permis;
    }

    public function createAction()
    {
        // $this->assets->addCss('sml/regis.css');
        // $this->assets->addCss('sml/navindex.css');
        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;
    }

    public function editAction()
    {
       $id = $this->request->getPost('id');
        
        $pro = Project::findById($id);
        $permission = array();
                foreach($pro->permission as $data){
                    $user = Users::findById($data);
                    array_push($permission,$user);
                }
                $this->view->permission = $permission;

                $this->view->pro  = $pro;
                $this->tag->setDefault("edprojectname", $pro->name);
                $this->tag->setDefault("eddescription", $pro->description);
                
                $session = $this->session->get('login');
                
                $user = Users::find(
                [
                    "conditions" => 
                    [
                        '_id' => ['$ne'=>$session]
                    ]
                ]);

                $this->view->user = $user;
                
                $userLogin = $this->session->get('userLogin');
                $this->view->userLogin = $userLogin;
    }
    public function findUserAction()
    {
        $session = $this->session->get('login');
        // $session = $this->request->getPost("session");
        // $condition = [];
        
        // if($session){
        //     $condition["_id"] =["$ne"=>$session];
        // }
        $user = Users::find([
        "conditions" => [
            '_id' => ['$ne'=>$session]
        ]
        ]);
        return json_encode($user);
    }
    public function saveAction()
    {
        $id=$this->session->get('login');
        $projectid = $this->request->getPost("projectid");
        if(!$projectid){
            $project = new Project;
            $project->createrId =(String)$id;
        }else{
            $project = Project::findById($projectid);
        }
        
        $project->name =$this->request->getPost("projectname");
        $project->description =$this->request->getPost("description");
        $project->permission =$this->request->getPost("permission");
        
        try {
        	$project->save();
        	$this->flashSession->success('Your information was stored correctly!');
        } catch (\Exception $e) {
        	$this->flashSession->error($e->getMessage());
        }
        
    }


    public function testAction()
    {
        $session = $this->session->get('login');
        $session =(String)$session;
        var_dump ($session);
        // $project = Project::Find(array(
        // array(  
        //     '$or' => array(
        //             array('createrId' => $session),
        //             array('permission' => $session)
        //         )
        //     )
        // ));
        $project = Project::find(array( 
        '$or' => array(
                array('createrId' => $session),
                array('permission' => $session)
            )
        ));
        // $project = Project::Find(
        // [
        // 'conditions' => [
        //     '$or' =>[
        //         ['createrId' => $session],
        //         ['permission' => $session],
        //         ],
        //     ]
        // ]
        // );
        $this->view->project = $project;
    }

    public function goTaskAction($id)
    {
        if($id){
            $this->session->set("idProject", $id);   
            return $this->response->redirect("task");
            
        }
        return $this->response->redirect("project");
    }

    public function checkDupAction()
    {
        $result = true;
        $projectname = $this->request->getPost('projectname');
        $condition = [];
        if($projectname){
            $condition["name"] = $projectname;
        }
        $project = Project::Find(array($condition));
        if($project){
            $result = false;
        }
        return json_encode($result);
    }
    
    public function checkDuptoEditAction()
    {
        $result = true;
        $projectname = $this->request->getPost('projectname');
        $idproject = $this->request->getPost('id');
        $project = Project::find([
        "conditions" => [
            '_id' => ['$ne'=> new MongoId($idproject)]
        ]
        ]);
        foreach($project as $key => $pro)
        {
            if($pro->name==$projectname)
            {
                $result = false;
            }
        }
        
        return json_encode($result);
    }
    public function deleteProjectAction()
    {
        $id = $this->request->getPost('idProject');
       
        $condition = [];
        $condition["idProject"] = $id;
        $task = Tasks::find(array($condition));
        $resource = Resource::find(array($condition));
        $stakeholder = Stakeholders::find(array($condition));
        $collaburation = Collaboration::find(array($condition));

        if(!$task && !$resource && !$stakeholder && !$collaburation ){
            $project= Project::findById($id);
            $project->delete();
            $this->flashSession->success('Your Project was delete');
        }else{
            $this->flashSession->error("Your Project can't delete please check data in Project");
        }
        return json_encode('true');
    }

}

