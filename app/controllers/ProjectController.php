<?php

class ProjectController extends ControllerBase
{

    public function indexAction()
    {
        $session = $this->session->get('login');
        // $project = Project::Find(array(
        // array(
        //     '$or' => array(
        //             array('createrId' => $session),
        //             array('permission' => $session)
        //         )
        //     )
        // ));
        $project = Project::Find(
        [
        'conditions' => [
            '$or' =>[
                ['createrId' => $session],
                ['permission' => $session],
                ],
            ]
        ]
        );

        $this->view->project = $project;
    }

    public function createAction()
    {

    }
    public function editAction($id)
    {

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
        $project = new Project;
        $project->name =$this->request->getPost("projectname");
        $project->description =$this->request->getPost("description");
        $project->createrId =$this->session->get('login');
        $project->permission =$this->request->getPost("permission");
        
        if($project->save())
        {
            $this->flashSession->success("Successful Create Project");
            return $this->response->redirect("project");
        }
        else
        {
            $this->flashSession->success("Not Successful Create Project");
            return $this->response->redirect("project");
        }
    }

}

