<?php

use MongoDB\BSON\ObjectId;
use Library\Enum\Enum;
use Library\Common\Common;

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
        $this->assets->addCss('jslif/sb-admin-override.css');

        $this->assets->addCss('modal/scrollhidden.css');

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
        $this->assets->addJs('jquery/jquery.redirect.js');
        $this->assets->addJs('jquery/taskEditRedirect.js');



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

        $this->view->ToBeState = Enum::$ToBeState;
    }

    public function saveAction()
    {
        $oldTask = null;
        $id = $this->request->getPost("idTask");
        if(!$id){
            $task = new Tasks();
        }else{
            $task = Tasks::findById($id);
            $oldTask = $task->includes;
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
       
        $save=0;
        if($task->save()) {
            $save=1;
        }

        //delete task->mom
        $NewTask = $task->includes;

        foreach($oldTask as $index => $old){
            foreach($NewTask as $new){
                if((string)$new == (string)$old){
                    unset($oldTask[$index]);
                    break;
                }
            }
        }

        foreach($oldTask as $oldId){
            $task = Tasks::findById($oldId);
            $task->mom = null;
            $task->save();
        }


        if($task->includes){
            foreach($task->includes as $data){
                $taskSon = Tasks::findById($data);
                $taskSon->mom = (string)$task->_id;
                $taskSon->save();
            }
        }

        if($save==1){
            $this->flashSession->success('Your Task was save');
        }
        return json_encode($oldTask);
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


    public function findResourceAction()
    {
        $this->view->disable();
        $input = $this->request->getPost('project');
        
        $condition = [];
        
        if($input){
            $condition["idProject"] = $input;
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
                
                $this->view->includes = Common::addDataArray(new Tasks(), $task->includes);

                $this->view->owner = Common::addDataArray(new Stakeholders(), $task->owner);
            
                $this->view->collaburator = Common::addDataArray(new Stakeholders(), $task->collaburator);

                $this->view->regulator = Common::addDataArray(new Stakeholders(), $task->regulator);

                $this->view->ownerTobe = Common::addDataArray(new Stakeholders(), $task->ownerToBe);

                $this->view->collaboratorTobe = Common::addDataArray(new Stakeholders(), $task->collaboratorToBe);

                $this->view->uses = Common::addDataArray(new Resource(), $task->uses);

                $this->view->produces = Common::addDataArray(new Resource(), $task->produces);

                $this->view->toUse = Common::addDataArray(new Resource(), $task->toUse);

                $this->view->toProduce = Common::addDataArray(new Resource(), $task->toProduce);

                $idProject = $this->session->get('idProject');
                $this->view->idProject = $idProject;

                $this->view->idTask  = $task->_id;
                $this->tag->setDefault("idProject", $idProject);
                $this->tag->setDefault("idTask", $id);
                $this->tag->setDefault("taskname", $task->name);
                $this->tag->setDefault("isA", $task->isA);
                $this->tag->setDefault("Description", $task->Description);
                $this->tag->setDefault("asIsState", $task->asIsState);
                $this->tag->setDefault("toBeState", $task->toBeState);
               
                   
    
                
                $conditionStake = [];
                $conditionStake["idProject"] = $idProject;
                $tagsStake = Stakeholders::Find(array($conditionStake));
                $this->view->tagsStake = $tagsStake;


                $conditionTask = [];
                $conditionTask["idProject"] = $idProject;
                $conditionTask["mom"] = null;
                $conditionTask["name"] = ['$ne' => $task->name];
                $taskTags = Tasks::Find(array($conditionTask));
                $this->view->taskTags = $taskTags;


                $conditionResource = [];
                $conditionResource["idProject"] = $idProject;
                $resourceTags = Resource::Find(array($conditionResource));
                $this->view->resourceTags = $resourceTags;
 


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
        $this->flashSession->success('Your Task was delete');
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
        $res->idProject = $this->request->getPost("idProject");
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

    public function findTaskAction()
    {
        $this->view->disable();
        $input = $this->request->getPost('project');
        $taskname = $this->request->getPost('taskname');
        
        $condition = [];
        $condition["idProject"] = $input;   
        $condition["mom"] = null;
        
        $tasks = Tasks::Find(array($condition));

        return json_encode($tasks);
    }

    public function showDetailTaskAction()
    {
        $id = $this->request->getPost('taskId');
        $task = Tasks::findById($id);

        $arrTask = [];
        $arrTask['name'] = $task->name;
        $arrTask['isA'] = $task->isA;
        $arrTask['Description'] = $task->Description;
        
        $tempArray = [];
        $model = new Tasks();
        if($task->includes != null)
        foreach($task->includes as $id){
        	$value = Common::getTaskNameById($model, $id);
        	if($value != null)
            	$tempArray[] = $value;
        };

        $arrTask['includes'] = $tempArray;
        $arrTask['asIsState'] =  Enum::$AsIsstate[$task->asIsState];
        $arrTask['toBeState'] = Enum::$ToBeState[$task->toBeState];


        // Details of Resouce
        $model = new Resource();
        $tempArray = [];
        if($task->uses != null)
        foreach($task->uses as $id){
            $tempArray[] = Common::getResourceNameById($model, $id);
        };
        $arrTask['uses'] = $tempArray;

        $tempArray = [];
        if($task->produces != null)
        foreach($task->produces as $id){
            $tempArray[] = Common::getResourceNameById($model, $id);
        };
        $arrTask['produces'] = $tempArray;
        
        $tempArray = [];
        if($task->toUse != null)
        foreach($task->toUse as $id){
            $tempArray[] = Common::getResourceNameById($model, $id);
        };
        $arrTask['toUse'] = $tempArray;

        $tempArray = [];
        if($task->toProduce != null)
        foreach($task->toProduce as $id){
            $tempArray[] = Common::getResourceNameById($model, $id);
        };
        $arrTask['toProduce'] = $tempArray;

        
        // Details of Stakeholder
        $model = new Stakeholders();
        $tempArray = [];
        if($task->owner != null)
        foreach($task->owner as $id){
            $tempArray[] = Common::getStakeholderNameById($model, $id);
        };
        $arrTask['owner'] = $tempArray;
        
        $tempArray = [];
        if($task->collaburator != null)
        foreach($task->collaburator as $id){
            $tempArray[] = Common::getStakeholderNameById($model, $id);
        };
        $arrTask['collaburator'] = $tempArray;

        $tempArray = [];
        if($task->regulator != null)
        foreach($task->regulator as $id){
            $tempArray[] = Common::getStakeholderNameById($model, $id);
        };
        $arrTask['regulator'] = $tempArray;

        $tempArray = [];
        if($task->ownerToBe != null)
        foreach($task->ownerToBe as $id){
            $tempArray[] = Common::getStakeholderNameById($model, $id);
        };
        $arrTask['ownerToBe'] = $tempArray;

        $tempArray = [];
        if($task->collaboratorToBe != null)
        foreach($task->collaboratorToBe as $id){
            $tempArray[] = Common::getStakeholderNameById($model, $id);
        };
        $arrTask['collaboratorToBe'] = $tempArray;
        
        return json_encode($arrTask);

    }

}

    

