<?php
use MongoDB\BSON\ObjectId;
use Library\Enum\Enum;
use Library\Common\Common;
use Library\Common\Pagination;

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

        $this->assets->addJs('modal/cloneModal.js');
        $this->assets->addJs('jslif/tagResource.js');


    }

    public function indexAction()
    {
        //Layout
        $projectname = $this->session->get('projectname');
        $this->view->projectname = $projectname;

        $ownerLayout =   $projectname = $this->session->get('ownerLayout');
        $this->view->ownerLayout = $ownerLayout;


        $userLogin = $this->session->get('userLogin');
        $this->view->userLogin = $userLogin;

        $id = $this->session->get('idProject');


        //Sort
        $currentPage = $this->request->get('page');
        $idProject = $this->session->get('idProject');
        $sortBy = $this->request->getPost('sortBy');
        $filter = $this->request->getPost('filter');

        $arrSortBy = array(
            'name' => 'Name',
            '_id' => 'Create Date'
        );

        $this->view->arrSortBy = $arrSortBy;
        if($sortBy == null) $sortBy = $this->request->get('sortBy');
        if($sortBy == null) $sortBy = $arrSortBy['name'];
        $this->view->sortBy = $sortBy;
        if($filter == null) $filter = $this->request->get('filter');
        if($filter == null) $filter = '';
        $this->view->filter = $filter;

        //Pagination
        $model = new Resource();
        $query = array(
        	'$and' => array(
        		array('name' => new MongoRegex("/$filter/")),
        		array(
        			'$or' => array(
        				array('idProject' => $idProject)
        			),
        		)
        	)
        );

        $paginator = new Pagination(
        	array(
        		'model' => $model,
        		'limit' => 8,
        		'page' => $currentPage,
        		'query' => $query,
        		'sort' => $sortBy,
        		'baseUrl' => $this->url->get('Resource'),
        		'showNumberOfPage' => 6,
        		'data' => array(
        			'sortBy' => $sortBy,
        			'filter' => $filter
        		)
        	)
        );

        //pagination results
        $resource = $paginator->getPaginate();
        $this->view->resource = $resource;





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
        $this->view->idProject = $id;
        $this->view->LayerWorld = Enum::$LayerWorld;

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
        $res->layerWorld = $this->request->getPost("layerWorld");
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
        $this->view->idProject = $idProject;

        $id = $this->request->getPost('id');
        $res = Resource::findById($id);

        $this->view->res = $res;
        $this->tag->setDefault("idProject", $res->idProject);
        $this->tag->setDefault("idResource", $id);
        $this->tag->setDefault("editResName", $res->name);
        $this->tag->setDefault("editResDesCription", $res->description);
        $this->tag->setDefault("layerWorld", $res->layerWorld);

        $this->view->LayerWorld = Enum::$LayerWorld;
        $this->view->includes = Common::addDataArray(new Resource(), $res->includes);

        $this->view->rOwner = Common::addDataArray(new Stakeholders(), $res->rOwner);

        $this->view->pOwner = Common::addDataArray(new Stakeholders(), $res->pOwner);

        $this->view->maintainer = Common::addDataArray(new Stakeholders(), $res->maintainer);

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

    public function showDetailResAction()
    {
        $id = $this->request->getPost('resId');
        $res = Resource::findById($id);

        $arrRes = [];
        $arrRes['name'] = $res->name;
        $arrRes['description'] = $res->description;

        $model = new Resource();

        $tempArray = [];
        if($res->includes != null)
        foreach($res->includes as $id){
        	$value = Common::getResourceNameById($model, $id);
        	if($value != null)
            	$tempArray[] = $value;
        };
        $arrRes['includes'] = $tempArray;


        $model = new Stakeholders();
        $tempArray = [];
        if($res->rOwner != null)
        foreach($res->rOwner as $id){
            $tempArray[] = Common::getStakeholderNameById($model, $id);
        };
        $arrRes['rOwner'] = $tempArray;

        $tempArray = [];
        if($res->pOwner != null)
        foreach($res->pOwner as $id){
            $tempArray[] = Common::getStakeholderNameById($model, $id);
        };
        $arrRes['pOwner'] = $tempArray;

        $tempArray = [];
        if($res->maintainer != null)
        foreach($res->maintainer as $id){
            $tempArray[] = Common::getStakeholderNameById($model, $id);
        };
        $arrRes['maintainer'] = $tempArray;
        return json_encode($arrRes);
    }

}