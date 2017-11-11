<?php

class TaskController extends ControllerBase
{

    public function indexAction()
    {
        // $idProject = $this->request->getPost("idProject");

        // $condition = [];
        // if($input){
        //     $condition["project"] = $input;
        // }
        // $task = Task::Find(array($condition));
        
        $task = Tasks::Find();

        $this->view->task = $task;

    }

    public function createAction()
    {
        
    }

    public function saveAction()
    {
        $task = new Tasks();
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
        // $this->flash->success("teacher was created successfully");

        // $this->dispatcher->forward([
        //     'controller' => "task",
        //     'action' => 'index'
        // ]);
        // return $this->response->redirect("task/index");
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

                $this->view->owner = $task->owner;
                $this->view->idTask  = $task->_id;
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
                        
               
        }
    
    public function testAction()
    {
         
        $this->view->disable();
        $input = $this->request->getPost('name');
        
        return json_encode($input);
    }

   
}

