<?php

class TaskController extends ControllerBase
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
        //// $this->assets->addCss('jslif/sb-admin.css');
        //// $this->assets->addCss('jslif/sb-admin-override.css');
        //// $this->assets->addCss('projectCard/proCard.css');

    
        $this->assets->addJs('pro/js/jquery-3.2.1.min.js');
        $this->assets->addJs('assetsThor/js/bootstrap.min.js');
       
       

        //// $this->assets->addJs('jquery/jquery.js');
        //// $this->assets->addJs('jquery/jquery.min.js');
        $this->assets->addJs('popper/popper.min.js');
        $this->assets->addJs('bootstrap-4/js/bootstrap.min.js');
        $this->assets->addJs('scrollreveal/scrollreveal.min.js');
        $this->assets->addJs('magnific-popup/jquery.magnific-popup.min.js');
        //// $this->assets->addJs('jslif/sb-admin.js');

        $this->assets->addJs('jslif/jquery.easing.min.js');
        $this->assets->addJs('jslif/typeahead.bundle.min.js');
        $this->assets->addJs('jslif/bootstrap-tagsinput.js');
        //// $this->assets->addJs('jslif/bootstrap-tagsinput.min.js');
        //// $this->assets->addJs('jslif/sb-admin.min.js');
       
        $this->assets->addJs('assetsThor/js/light-bootstrap-dashboard.js');
        $this->assets->addJs('assetsThor/js/demo.js');
       
        //// $this->assets->addJs('projectCard/proCard.js');

        $this->assets->addJs('dist/jquery.validate.js');
        $this->assets->addJs('jquery/createTaskValidate.js');
        $this->assets->addJs('jquery/jquery.redirect.js');
        $this->assets->addJs('jquery/taskEditRedirect.js');

        $this->assets->addJs('jslif/tagTaskCreate.js');


    }

    public function indexAction()
    {
        
        $id = $this->session->get('idProject');
        $condition = [];
        if($id){
                
            $condition["idProject"] = $id;
            $task = Tasks::Find(array($condition));
            
        }else{
            $this->view->task = 0;
        }

        $this->view->task = $task;

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

    public function indextestAction($id)
    {
        
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

    public function saveAction()
    {
       
        $id = $this->request->getPost("idTask");
        if(!$id){
            $task = new Tasks();
        }else{
            $task = Tasks::findById($id);
        }

       
        $task->name = $this->request->getPost("taskname");
        $task->isA = $this->request->getPost("isA");
        $task->Description = $this->request->getPost("Description");
        $task->includes = $this->request->getPost("includes");
        $task->asIsState = $this->request->getPost("asIsState");
        $task->owner = $this->request->getPost("owner");
        $task->collaburator = $this->request->getPost("collaburator");
        $task->regulator = $this->request->getPost("regulator");
        $task->uses = $this->request->getPost("uses");
        $task->produces = $this->request->getPost("produces");
        $task->toBeState = $this->request->getPost("toBeState");
        $task->ownerToBe = $this->request->getPost("ownerToBe");
        $task->collaboratorToBe =  $this->request->getPost("collaboratorToBe");
        $task->toUse = $this->request->getPost("toUse");
        $task->toProduce = $this->request->getPost("toProduce");
        $task->idProject = $this->request->getPost("idProject");

        if (!$task->save()) {
            foreach ($teacher->getMessages() as $message) {
                $this->flash->error($message);
               
            }
        }
        //     $this->dispatcher->forward([
        //         'controller' => "task",
        //         'action' => 'index'
        //     ]);

        //     return;
        // }
         return;
            // return json_encode('true');
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


    public function findResourceAction()
    {
        $this->view->disable();
        $input = $this->request->getPost('project');
        
        $condition = [];
        
        if($input){
            $condition["project"] = $input;
        }

        $resource = Resource::Find(array($condition));

        return json_encode($resource);
    }

    public function editAction()
    {
                // $this->view->disable();
                $id = $this->request->getPost('id');
                $task = Tasks::findById($id);
                
                if (!$task) {
                    $this->flash->error("task was not found");
            
                    $this->dispatcher->forward([
                        'controller' => "task",
                        'action' => 'index'
                    ]);
            
                    return;
                }

                $owner = array();
                foreach($task->owner as $data){
                    $item = Stakeholders::findById($data);
                    array_push($owner,$item);
                }
                $this->view->owner = $owner;
               

                $collaburator = array();
                foreach($task->collaburator as $data){
                    $item = Stakeholders::findById($data);
                    array_push($collaburator,$item);
                }
                $this->view->collaburator = $collaburator;

                $ownerToBe = array();
                foreach($task->ownerToBe as $data){
                    $item = Stakeholders::findById($data);
                    array_push($ownerToBe,$item);
                }
                $this->view->ownerTobe = $ownerToBe;

                $collaboratorToBe = array();
                foreach($task->collaboratorToBe as $data){
                    $item = Stakeholders::findById($data);
                    array_push($collaboratorToBe,$item);
                }
                $this->view->collaboratorTobe = $collaboratorToBe;


                $idProject = $this->session->get('idProject');

                $this->view->idTask  = $task->_id;
                $this->tag->setDefault("idProject", $idProject);
                $this->tag->setDefault("idTask", $id);
                $this->tag->setDefault("taskname", $task->name);
                $this->tag->setDefault("isA", $task->isA);
                $this->tag->setDefault("Description", $task->Description);
                $this->tag->setDefault("includes", $task->includes);
                $this->tag->setDefault("asIsState", $task->asIsState);
               
                $this->tag->setDefault("regulator", $task->regulator);
                $this->tag->setDefault("uses", $task->uses);
                $this->tag->setDefault("produces", $task->produces);
                $this->tag->setDefault("toBeState", $task->toBeState);
               
                $this->tag->setDefault("toUse", $task->toUse);
                $this->tag->setDefault("toProduce", $task->toProduce);
                   


                $input = "1";
                $condition = [];
                
                if($input){
                    $condition["project"] = $input;
                }
        
                $stake = Stakeholders::Find(array($condition));
        
                $this->view->stake = $stake;

                


                $userLogin = $this->session->get('userLogin');
                $this->view->userLogin = $userLogin;

                $projectname = $this->session->get('projectname');
                $this->view->projectname = $projectname;
                
                $ownerLayout =   $projectname = $this->session->get('ownerLayout');
                $this->view->ownerLayout = $ownerLayout;
    }
    
    public function deleteTaskAction()
    {
        $id = $this->request->getPost('idTask');
        $task = Tasks::findById($id);
        
        $task->delete();
        return json_encode('true');
    }

    public function checkDupTaskNameAction()
    {
        $idProject = $this->request->getPost('idProject');
        $taskname = $this->request->getPost('taskname');
        $result = true;
        $condition = [];
            
        $condition["idProject"] = $idProject;
        $condition["name"] = $taskname;


        $task = Tasks::Find(array($condition));

        if($task){
            $result = false;
        }
        return json_encode($result);
    }

    public function saveResourceFormModalAction()
    {
        $res = new Resource();

        $res->name = $this->request->getPost("resourcename");
        $res->description = $this->request->getPost("Description");
        $res->includes = $this->request->getPost("includes");
        $res->rOwner = $this->request->getPost("rOwner");
        $res->pOwner = $this->request->getPost("pOwner");
        $res->maintainer = $this->request->getPost("maintainer");
        $res->project = $this->request->getPost("idProject");
        $res->save();
    }

    public function checkDupEditTaskNameAction()
    {
        $idTask = $this->request->getPost('idTask');
        $idProject = $this->request->getPost('idProject');
        $taskname = $this->request->getPost('taskname');
        $result = true;
        $condition = [];
            
        $condition["idProject"] = $idProject;
        $condition["name"] = $taskname;
       

        $taskCompare = Tasks::findById($idTask);
        $task = Tasks::Find(array($condition));

        if($task){
            $result = false;
            if($task[0]->name == $taskCompare->name){
                $result = true;
            }
        }
        return json_encode($result);
       
    }
   
    public function testAction(){
        $taskname = "firstTask";
        $condition = [];
        
        $condition["name"] = "qwerty";
            //  $condition["_id"] = [
            //          '$ne' => 'ObjectId("5a2ca92c541804e42d000029")'
            //  ];   
            
             $task = Tasks::Find(array($condition));
           $qwe = $task[0]->name;
        var_dump($qwe);
    }


}

    

