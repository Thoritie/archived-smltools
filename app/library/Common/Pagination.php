<?php
namespace Library\Common;
use MongoDB\BSON\ObjectId;

class Pagination{
	
	private $model;
	private $limitRows;
	private $page;
	private $query;
	private $data;
	private $sort;
	private $baseUrl;
	private $showNumberOfPage;
	private $aggregate;
	
	public function __construct($config) {

		if (isset($config['model'])) {
			$this->model = $config['model'];
		}
		
		if (isset($config['limit'])) {
			$this->limitRows = $config['limit'];
		}else{
			$this->limitRows = 10;
		}
		
		if (isset($config['page'])) {
			$this->page	= $config['page'];
		}
		
		if (isset($config['query'])) {
			$this->query = $config['query'];
		}else{
			$this->query = array();
		}
		
		if (isset($config['data'])) {
			$this->data	= $config['data'];
		}else{
			$this->data = [];
		}
		
		if (isset($config['sort'])) {
			$this->sort	= $config['sort'];
		}else{
			$this->sort = '_id';
		}
		
		if (isset($config['baseUrl'])) {
			$this->baseUrl = $config['baseUrl'];
		}else{
			$this->baseUrl = "";
		}
		
		if (isset($config['showNumberOfPage'])) {
			$this->showNumberOfPage = $config['showNumberOfPage'];
		}else{
			$this->showNumberOfPage = 5;
		}

		if (isset($config['aggregate'])) {
			$this->aggregate = $config['aggregate'];
		}else{
			$this->aggregate = "";
		}

	}
	
	public function getPaginate() {
		$model = null;

		if ($this->model != null) {
			$model = $this->model;
		}else{
			throw new \Exception("Invalid data for paginator");
		}
		
		$dataProvider = $model::find(
			array($this->query)
		);
		
		$number = count($dataProvider);
		$nLimit = intval($this->limitRows);
		$pageNumber = intval($this->page);
		
		if ($pageNumber <= 0 ) {
			$pageNumber = 1;
		}
		
		$roundedTotal = $number / floatval($nLimit);
		$totalPages = intval($roundedTotal);
		
		/**
		 * Increase total_pages if wasn't integer
		 */
		if ($totalPages != $roundedTotal) {
			$totalPages++;
		}
		
		if($pageNumber > $totalPages){
			$pageNumber = 1;
		}
		
		$page = new \stdClass();
	
		if (is_a($model, 'Stakeholders')) {
			$page->items = $model::aggregate(
				array(
					$this->aggregate,
					//===================================== version 1 =====================================
					array( '$addFields' => array( 'userId' => array('$toString' => '$_id'))),
					//lookup in task
					array( '$lookup' => array(
						'from' => 'tasks',
						'localField' => 'userId',
						'foreignField' => 'owner',
						'as' =>  'taskOwner'
					)),
					array( '$lookup' => array(
						'from' => 'tasks',
						'localField' => 'userId',
						'foreignField' => 'collaburator',
						'as' =>  'taskCollaburator'
					)),
					array( '$lookup' => array(
						'from' => 'tasks',
						'localField' => 'userId',
						'foreignField' => 'regulator',
						'as' =>  'taskRegulator'
					)),
					array( '$lookup' => array(
						'from' => 'tasks',
						'localField' => 'userId',
						'foreignField' => 'ownerToBe',
						'as' =>  'taskOwnerToBer'
					)),
					array( '$lookup' => array(
						'from' => 'tasks',
						'localField' => 'userId',
						'foreignField' => 'collaboratorToBe',
						'as' =>  'taskCollaboratorToBe'
					)),

					//lookup in reasource
					array( '$lookup' => array(
						'from' => 'resource',
						'localField' => 'userId',
						'foreignField' => 'rOwner',
						'as' =>  'reasourceROwner'
					)),
					array( '$lookup' => array(
						'from' => 'resource',
						'localField' => 'userId',
						'foreignField' => 'pOwner',
						'as' =>  'reasourcePOwnerr'
					)),
					array( '$lookup' => array(
						'from' => 'resource',
						'localField' => 'userId',
						'foreignField' => 'maintainer',
						'as' =>  'reasourceMaintainer'
					)),

					//lookup in stakeholeder
					array( '$lookup' => array(
						'from' => 'stakeholders',
						'localField' => 'userId',
						'foreignField' => 'representative',
						'as' =>  'stakeholdersRepresentative'
					)),
					array( '$lookup' => array(
						'from' => 'stakeholders',
						'localField' => 'userId',
						'foreignField' => 'reports',
						'as' =>  'stakeholdersReports'
					)),
					array( '$lookup' => array(
						'from' => 'stakeholders',
						'localField' => 'userId',
						'foreignField' => 'consults',
						'as' =>  'stakeholdersConsults'
					)),
					array( '$lookup' => array(
						'from' => 'stakeholders',
						'localField' => 'userId',
						'foreignField' => 'liaises',
						'as' =>  'stakeholdersLiaises'
					)),
					array( '$lookup' => array(
						'from' => 'stakeholders',
						'localField' => 'userId',
						'foreignField' => 'delegate',
						'as' =>  'stakeholdersDelegate'
					)),
					array( '$lookup' => array(
						'from' => 'stakeholders',
						'localField' => 'userId',
						'foreignField' => 'playRole',
						'as' =>  'stakeholdersPlayRole'
					)),


					array( '$project' => array (
						'name' => 1,
						'sumStake' => array('$sum' => array(
							array('$size' => '$taskOwner'),
							array('$size' => '$taskCollaburator'),
							array('$size' => '$taskRegulator'),
							array('$size' => '$taskOwnerToBer'),
							array('$size' => '$taskCollaboratorToBe'),
							)),
						'sumResource' => array('$sum' => array(
							array('$size' => '$reasourceROwner'),
							array('$size' => '$reasourcePOwnerr'),
							array('$size' => '$reasourceMaintainer'),
							)),
						'sumStakeholder' => array('$sum' => array(
							array('$size' => '$stakeholdersRepresentative'),
							array('$size' => '$stakeholdersReports'),
							array('$size' => '$stakeholdersConsults'),
							array('$size' => '$stakeholdersLiaises'),
							array('$size' => '$stakeholdersDelegate'),
							array('$size' => '$stakeholdersPlayRole'),
							)),
							'type' => '$type'
					)),

					//===================================== version 1 =====================================
						
					//===================================== version 2 =====================================
						// array( '$addFields' => array( 'userId' => array('$toString' => '$_id'))),
						// array( '$lookup' => array(
						// 	'from' =>  'tasks',
						// 	'let' => array( 'userstake' => 'userId'),
						// 	'pipeline' => array(
						// 		// array('$match' => array('$expr' => array( '$or' => array(
						// 		// 			'$in' => array('$userId','$owner')
						// 		// 			)
						// 		// )))
						// ),
						// 	'as'=> "task"
						// 	)
						// ),
						// array( '$project' => array (
						// 	'name' => 1,
						// 	'NoTask' => array('$size' => '$task'),
						// 	'userid' => '$userId',
						// 	'owner' => array('$task.name','$task.owner'),
						// 	'tasketest' => array('$in' => array('$userId' , '$task.owner'))
						// )),
					//===================================== version2 =====================================

					array('$sort' => array ($this->sort => 1)),
					array('$skip' => $nLimit * ($pageNumber - 1)),
					array('$limit' => $nLimit)
				),
				array('cursor' => array('batchSize' => 1000))
			);
		}else{
			$page->items = $model::find(
					array(
						$this->query,
						'sort' => array($this->sort => 1),
						'skip' => $nLimit * ($pageNumber - 1),
						'limit' => $nLimit
					)
			);
		}
		
		//Fix next
		if ($pageNumber < $totalPages) {
			$next = $pageNumber + 1;
		} else {
			$next = $totalPages;
		}

		$page->next = $next;

		if ($pageNumber > 1) {
			$before = $pageNumber - 1;
		} else {
			$before = 1;
		}

		$page->first = 1;
		$page->before = $before;
		$page->current = $pageNumber;
		$page->last = $totalPages;
		$page->total_pages = $totalPages;
		$page->total_items = $number;
		$page->widgetPagination = $this->WidgetPaginate($page->current, $page->total_pages);
		
		return $page;
	}
	
	function WidgetPaginate($current, $total_pages){
		$data = "";
		foreach ($this->data as $index => $val){
			$data .= "&".$index."=".$val;
		}
		$css = "<style>
			
			
			/* GENERAL STYLES */
			
			.pagination{
			  padding: 30px 0;
			  margin-top: 10px;
    		  padding-top: 0px;
			  margin-bottom: 10px;
    		  padding-bottom: 0px;
			}
			
			.pagination ul{
			  margin: 0;
			  padding: 0;
			  list-style-type: none;
			}
			
			.pagination a{
			  display: inline-block;
			  padding: 8px 15px;
			  color: #222;
			}
			
			.p12 a:first-of-type, .p12 a:last-of-type, .p12 .is-active{
			  background-color: #2ecc71;
			  color: #fff;
			  font-weight: bold;
			  margin: 3px;
			}
				
			.p12 .is-active{
				pointer-events: none;
			}
				
			</style>";
		
		$html .= "<div class='text-center'>";
		$html .= "<div class='pagination p12'>
			  <ul>
				<a href='".$this->baseUrl."?page=1".$data."'><li><<</li></a>";
			$showNumberPage = $this->showNumberOfPage;
			if($current == 1){
				for ($n=1; $n <= $showNumberPage && $n <= $total_pages; $n++){
					$html .= "<a href='".$this->baseUrl."?page=".$n.$data."' ";
					if($n == $current){
						$html .= "class='is-active'";
					}
					$html .= "><li>".$n."</li></a>";
				}
			}else if($total_pages - $current >= $showNumberPage-1){
				for ($n=$current-1; $n < $current+$showNumberPage-1; $n++){
					$html .= "<a href='".$this->baseUrl."?page=".$n.$data."' ";
					if($n == $current){
						$html .= "class='is-active'";
					}
					$html .= "><li>".$n."</li></a>";
				}
			}else{
				$start = 0;
				if($n=$total_pages-$showNumberPage+1 <= 0){
					$start = 1;
				}else{
					$start = $total_pages-$showNumberPage+1;
				}
				for ($n=$start; $n <= $total_pages; $n++){
					$html .= "<a href='".$this->baseUrl."?page=".$n.$data."' ";
					if($n == $current){
						$html .= "class='is-active'";
					}
					$html .= "><li>".$n."</li></a>";
				}
			}

			$html .= "<a href='".$this->baseUrl."?page=".$total_pages.$data."'><li>>></li></a></ul></div>";
			$html .= "<br/>Showing ".$current." of ".$total_pages." pages </div>";
		return $css.$html;
	}
	
}