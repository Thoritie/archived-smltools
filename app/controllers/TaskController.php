<?php

class TaskController extends ControllerBase
{

    public function indexAction()
    {

    }

    public function createAction()
    {
        
    }

    public function saveAction()
    {
        $task = new Task();
        $task->name = $this->request->getPost("taskname");
        $task->isA = $this->request->getPost("isA");
        $task->Description = $this->request->getPost("Description");
        $task->includes = $this->request->getPost("includes");
        $task->asIsState = $this->request->getPost("asIsState");
        $task->owner = $this->request->getPost("owner");
        $task->collaburator = $this->request->getPost("collaburator");
        $task->regular = $this->request->getPost("regular");
        $task->uses = $this->request->getPost("uses");
        $task->produces = $this->request->getPost("produces");
        $task->toBeState = $this->request->getPost("toBeState");
        $task->ownerToBe = $this->request->getPost("ownerToBe");
        $task->collaboratorToBe = $this->request->getPost("collaboratorToBe");
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

        $this->flash->success("teacher was created successfully");

        $this->dispatcher->forward([
            'controller' => "task",
            'action' => 'index'
        ]);
    }
}

