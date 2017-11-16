<?php

class ProjectController extends ControllerBase
{

    public function indexAction()
    {
        $session = $this->session->get('login');
        $session =(String)$session;

        // $project = Project::Find(array(
        // array(  
        //     '$or' => array(
        //             array('createrId' => $session),
        //             array('permission' => $session)
        //         )
        //     )
        // ));
        // $project = Project::find(array( 
        // '$or' => array(
        //         array('createrId' => $session),
        //         array('permission' => $session)
        //     )
        // ));
        $create = Project::Find(
            [
                [
                    'createrId' => $session,
                ]
            ]
        );
        $permis = Project::Find(
            [
                [
                    'permission' => $session,
                ]
            ]
        );
        // $project = Project::Find(
        // [
        // 'conditions' => [
        //     '$or' =>[
        //         array('createrId' => $session),
        //         array('permission' => $session)
        //         ]
        //     ],
        // ]
        // );
        $this->view->create = $create;
        $this->view->permis = $permis;
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
        $id=$this->session->get('login');
        $project = new Project;
        $project->name =$this->request->getPost("projectname");
        $project->description =$this->request->getPost("description");
        $project->createrId =(String)$id;
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

    public function taskAction($id)
    {
        if($id){
            $this->session->set("idProject", $id);   
            return $this->response->redirect("task");
            
        }
        return $this->response->redirect("project");
    }


}

