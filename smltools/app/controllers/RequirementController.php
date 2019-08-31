<?php
use MongoDB\BSON\ObjectId;
use Library\Common\Pagination;

class RequirementController extends ControllerBase
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

        $this->assets->addJs('modal/cloneModal.js');
        $this->assets->addJs('jslif/tagRequirementCreate.js');
    }

    public function indexAction()
    {
        $this->view->projectname = $this->session->get('projectname');
        $this->view->ownerLayout = $this->session->get('ownerLayout');
        $this->view->userLogin   = $this->session->get('userLogin');

        $id = $this->session->get('idProject');

        $currentPage = $this->request->get('page');
        $sortBy      = $this->request->getPost('sortBy');
        $filter      = $this->request->getPost('filter');

        //Pagination
        $model = new Requirement();
        $query = array(
        	'$and' => array(
        		array('name' => new MongoRegex("/$filter/")),
        		array(
        			'$or' => array(
        				array('idProject' => $id)
        			),
        		)
        	)
        );

        $arrSortBy = array(
            'name' => 'Name',
            '_id'  => 'Create Date'
        );

        $this->view->arrSortBy = $arrSortBy;
        if($sortBy == null) {
            $sortBy = $this->request->get('sortBy');
            $sortBy = $arrSortBy['name'];
        }

        $this->view->sortBy = $sortBy;

        if($filter == null) {
            $filter = $this->request->get('filter');
            $filter = '';
        }

        $this->view->filter = $filter;

        $paginator = new Pagination(
        	array(
        		'model'            => $model,
        		'limit'            => 8,
        		'page'             => $currentPage,
        		'query'            => $query,
        		'sort'             => $sortBy,
        		'baseUrl'          => $this->url->get('Requirement'),
        		'showNumberOfPage' => 6,
        		'data'             => array(
        			'sortBy' => $sortBy,
        			'filter' => $filter
        		)
        	)
        );

         //pagination results
         $requirement = $paginator->getPaginate();
         $this->view->requirement = $requirement;
    }

    public function createAction() {
        $this->view->projectname = $this->session->get('projectname');
        $this->view->ownerLayout = $this->session->get('ownerLayout');
        $this->view->userLogin   = $this->session->get('userLogin');

        $id = $this->session->get('idProject');

        $this->tag->setDefault("idProject", $id);
        $this->view->idProject = $id;
    }

    public function saveAction() {
        $requirement_id = $this->request->getPost("idRequirement");

        if(!$requirement_id){
            $requirement = new Requirement();
        }else{
            $requirement = Requirement::findById($requirement_id);
        }

        $requirement->name        = $this->request->getPost("requirementname");
        $requirement->description = $this->request->getPost("description");
        $requirement->type        = $this->request->getPost("requirementtype");
        $requirement->source_type = $this->request->getPost("sourcetype");
        $requirement->idProject   = $this->request->getPost("idProject");
        // $requirement->from        = $this->request->getPost("from");

        $requirement->save();
    }

    public function findRequirementSourceAction() {
        $this->view->disable();

        $projectId  = $this->request->getPost('projectId');
        $sourceType = $this->request->getPost('sourceType');

        $condition  = [];

        if( $projectId ) {
            $condition["idProject"] = $projectId;
        }

        $source = $sourceType::Find(array($condition));

        return json_encode($source);
    }
}

