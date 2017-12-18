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


        $this->assets->addJs('jquery/collaburationEditRedirect.js');  
       
        

    }
    public function indexAction()
    {
        $id = $this->session->get('idProject');
        $condition = [];
        if($id){
            $condition["idProject"] = $id;
            $collaboration = Collaboration::Find(array($condition));
            
        }else{
            $this->view->task = 0;
        }

        $this->view->collaboration = $collaboration;



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
       
        
         $include = array();
         foreach($collaboration->include as $data){
            $item = Tasks::findById($data);
            array_push($include,$item);
        }
        $this->view->include = $include;


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

}
