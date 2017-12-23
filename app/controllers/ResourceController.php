<?php

class ResourceController extends ControllerBase
{
    public function onConstruct(){
        $this->assets->addCss('sml/regis.css');
        
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
       
        $this->assets->addJs('pro/js/jquery-3.2.1.min.js');
        $this->assets->addJs('assetsThor/js/bootstrap.min.js');
       
       

        $this->assets->addJs('popper/popper.min.js');
        $this->assets->addJs('bootstrap-4/js/bootstrap.min.js');
        $this->assets->addJs('scrollreveal/scrollreveal.min.js');
        $this->assets->addJs('magnific-popup/jquery.magnific-popup.min.js');
       

        $this->assets->addJs('jslif/jquery.easing.min.js');
        $this->assets->addJs('jslif/typeahead.bundle.min.js');
        $this->assets->addJs('jslif/bootstrap-tagsinput.js');

        $this->assets->addJs('assetsThor/js/light-bootstrap-dashboard.js');
        $this->assets->addJs('assetsThor/js/demo.js');
       
        

        $this->assets->addJs('jquery/jquery.redirect.js');
        $this->assets->addJs('dist/jquery.validate.js');
       
        $this->assets->addJs('jquery/resourceRedirect.js');
       
       
       


    }

    public function indexAction()
    {
        $this->assets->addCss('dataTable/css/fresh-bootstrap-table.css');

        //Layout
        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;
        
        $ownerLayout =   $projectname = $this->session->get('ownerLayout');
        $this->view->ownerLayout = $ownerLayout;


        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;

        $id = $this->session->get('idProject');
        $condition = [];
        if($id){
            $condition["idProject"] = $id;
            $res = Resource::Find(array($condition));
        
        }else{
            $this->view->res = 0;
        }
        
        $this->view->res = $res;

        

        
    }

    public function createAction()
    {

        //Layout
        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;

        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;

        $ownerLayout =   $projectname = $this->session->get('ownerLayout');
        $this->view->ownerLayout = $ownerLayout;

        $id = $this->session->get('idProject');
        $this->tag->setDefault("idProject", $id);
        $this->view->idproject = $id;

        
    }   

    public function saveAction()
    {    
        $resid = $this->request->getPost("idResource");
        if(!$resid){
            $res = new Resource();
        }else{
            $res = Resource::findById($resid);
        }

       

        $res->name = $this->request->getPost("resourcename");
        $res->description = $this->request->getPost("Description");
        $res->includes = $this->request->getPost("includes");
        $res->rOwner = $this->request->getPost("rOwner");
        $res->pOwner = $this->request->getPost("pOwner");
        $res->maintainer = $this->request->getPost("maintainer");
        $res->idProject = $this->request->getPost("idProject");
       
        $res->save();
       

        
    }


    public function deleteResourceAction()
    {
        $id = $this->request->getPost('idResource');
        $res = Resource::findById($id);
        
        $res->delete();
        return json_encode('true');
    }

    public function checkDupplicateResourceNameAction()
    {
        $result = true;
        $resourcename = $this->request->getPost('resourcename');
        $idProject = $this->request->getPost('idProject');
        
        $condition = [];
        
        $condition["name"] = $resourcename;
        $condition["idProject"] = $idProject;
        
        $res = Resource::Find(array($condition));
        if($res){
            $result = false;
        }

        return json_encode($result);

    }

    public function checkDupplicateResourceEditNameAction()
    {
        $resourcename = $this->request->getPost('resourcename');
        $idProject = $this->request->getPost('idProject');
        $idResource = $this->request->getPost('idResource');
        $result = true;
        $condition = [];
            
        $condition["idProject"] = $idProject;
        $condition["name"] = $resourcename;
       
        $ResourceCompare = Resource::findById($idResource);
        $resource = Resource::Find(array($condition));

        if($resource){
            $result = false;
            if($resource[0]->name == $ResourceCompare->name){
                $result = true;
            }
        }
        return json_encode($result);
       

    }

    public function editAction()
    {
        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;

        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;

        $ownerLayout =   $projectname = $this->session->get('ownerLayout');
        $this->view->ownerLayout = $ownerLayout;


        $idProject = $this->session->get('idProject');
        $this->view->idproject = $idProject;

        $id = $this->request->getPost('id');
        $res = Resource::findById($id);
        
        $this->view->res = $res;
        $this->tag->setDefault("idProject", $res->idProject);
        $this->tag->setDefault("idResource", $id);
        $this->tag->setDefault("editResName", $res->name);
        $this->tag->setDefault("editResDesCription", $res->description);


        $includes = array();
        foreach($res->includes as $data){
            $item = Resource::findById($data);
            array_push($includes,$item);
        }
        $this->view->includes = $includes;

        $rOwner = array();
        foreach($res->rOwner as $data){
            $item = Stakeholders::findById($data);
            array_push($rOwner,$item);
        }
        $this->view->rOwner = $rOwner;

        $pOwner = array();
        foreach($res->pOwner as $data){
            $item = Stakeholders::findById($data);
            array_push($pOwner,$item);
        }
        $this->view->pOwner = $pOwner;

        $maintainer = array();
        foreach($res->maintainer as $data){
            $item = Stakeholders::findById($data);
            array_push($maintainer,$item);
        }
        $this->view->maintainer = $maintainer;


        $conditionStake = [];
        $conditionStake["idProject"] = $idProject;
        $tagsStake = Stakeholders::Find(array($conditionStake));
        $this->view->tagsStake = $tagsStake;

        $conditionResource = [];
        $conditionResource["idProject"] = $idProject;
        $conditionResource["name"] = ['$ne' => $res->name];
        $resourceTags = Resource::Find(array($conditionResource));
        $this->view->resourceTags = $resourceTags;




    }

}