<?php

class ProjectController extends ControllerBase
{   
    public function onConstruct(){
        $this->assets->addCss('assetsThor/css/bootstrap.min.css');
        $this->assets->addCss('assetsThor/css/animate.min.css');
        $this->assets->addCss('assetsThor/css/light-bootstrap-dashboard.css');
        $this->assets->addCss('assetsThor/css/demo.css');
        $this->assets->addCss('assetsThor/css/pe-icon-7-stroke.css');
        $this->assets->addCss('assetsThor/css/navbar.css');
      
        
        
        $this->assets->addCss('jslif/bootstrap-tagsinput.css');
        $this->assets->addCss('jslif/app.css');
        $this->assets->addCss('jslif/sb-admin.css');
        $this->assets->addCss('jslif/sb-admin-override.css');
        $this->assets->addCss('projectCard/proCard.css');
        
        $this->assets->addJs('pro/js/jquery-3.2.1.min.js');
        $this->assets->addJs('dist/jquery.validate.js');
        $this->assets->addJs('jquery/jquery.redirect.js');
        $this->assets->addJs('popper/popper.min.js');
      
        $this->assets->addJs('jslif/jquery.easing.min.js');
        $this->assets->addJs('jslif/typeahead.bundle.min.js');
        $this->assets->addJs('assetsThor/js/bootstrap.min.js');
        $this->assets->addJs('jslif/bootstrap-tagsinput.js');
        $this->assets->addJs('jslif/bootstrap-tagsinput.min.js');
        $this->assets->addJs('jslif/sb-admin.js');
        $this->assets->addJs('jslif/sb-admin.min.js');
        $this->assets->addJs('jslif/tagProject.js');
        $this->assets->addJs('jquery/projectRedirect.js');
        $this->assets->addJs('jquery/editProject.js');
        $this->assets->addJs('assetsThor/js/light-bootstrap-dashboard.js');
        $this->assets->addJs('assetsThor/js/demo.js');
       
        $this->assets->addJs('projectCard/proCard.js');
    }

    public function indexAction()
    {
        // $this->assets->addCss('assetsThor/css/bootstrap.min.css');
        // $this->assets->addCss('assetsThor/css/animate.min.css');
        // $this->assets->addCss('assetsThor/css/light-bootstrap-dashboard.css');
        // $this->assets->addCss('assetsThor/css/demo.css');
        // $this->assets->addCss('assetsThor/css/pe-icon-7-stroke.css');
        // $this->assets->addCss('assetsThor/css/navbar.css');

        // $this->assets->addCss('jslif/bootstrap-tagsinput.css');
        // $this->assets->addCss('jslif/app.css');
        // $this->assets->addCss('jslif/sb-admin.css');
        // $this->assets->addCss('jslif/sb-admin-override.css');
        // $this->assets->addCss('projectCard/proCard.css');
        
        
        // $this->assets->addJs('popper/popper.min.js');
        // $this->assets->addJs('pro/js/jquery-3.2.1.min.js');
        // $this->assets->addJs('jslif/sb-admin.js');
        // $this->assets->addJs('jslif/jquery.easing.min.js');
        // $this->assets->addJs('jslif/bootstrap-tagsinput.js');
        // $this->assets->addJs('jslif/bootstrap-tagsinput.min.js');
        // $this->assets->addJs('jslif/sb-admin.min.js');
        // $this->assets->addJs('jslif/tagProject.js');
        // $this->assets->addJs('assetsThor/js/light-bootstrap-dashboard.js');
        // $this->assets->addJs('assetsThor/js/demo.js');
        // $this->assets->addJs('assetsThor/js/bootstrap.min.js');
        // $this->assets->addJs('projectCard/proCard.js');
        
        
        
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
        // $this->assets->addCss('sml/regis.css');
        // $this->assets->addCss('sml/navindex.css');
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
            $project = Project::findById(new MongoId($projectid));
        }
        
        $project->name =$this->request->getPost("projectname");
        $project->description =$this->request->getPost("description");
        $project->permission =$this->request->getPost("permission");
        $project->save();
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

}

