<?php

class TaskController extends ControllerBase
{

    public function indexAction()
    {
        
        $id = $this->session->get('idProject');
        $condition = [];
        if($id){
                
            $condition["idProject"] = $id;

            $task = Tasks::Find(array($condition));
            $this->view->idProject = $id;
            $this->view->task = $task;
        }
        
    }

    public function indextestAction($id)
    {
        
    }

    public function createAction()
    {
        $id = $this->session->get('idProject');
        $this->tag->setDefault("idProject", $id);
        
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

            $this->dispatcher->forward([
                'controller' => "task",
                'action' => 'index'
            ]);

            return;
        }
        return;
    
    }

    public function findStakeAction()
    {
        $this->view->disable();
        $input = $this->request->getPost('project');
        
        $condition = [];
        
        if($input){
            $condition["project"] = $input;
        }

        $test = Stakeholders::Find(array($condition));

        return json_encode($test);
    }


    public function findResourceAction()
    {
        $this->view->disable();
        $input = $this->request->getPost('project');
        
        $condition = [];
        
        if($input){
            $condition["project"] = $input;
        }

        $test = Resource::Find(array($condition));

        return json_encode($test);
    }

    public function editAction($id)
    {
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
        
                $test = Stakeholders::Find(array($condition));
        
                $this->view->test = $test;
               
    }
    
    public function deleteTaskAction()
    {
        $id = $this->request->getPost('idTask');
        $task = Tasks::findById($id);

        $task->delete();
        return;
    }

   
}

