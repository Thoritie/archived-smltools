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
		$page->items = $model::find(
				array(
					$this->query,
					'sort' => array($this->sort => 1),
					'skip' => $nLimit * ($pageNumber - 1),
					'limit' => $nLimit
				)
		);
		
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
				<a href='".$this->baseUrl."project/index?page=1".$data."'><li><<</li></a>";
			$showNumberPage = $this->showNumberOfPage;
			if($current == 1){
				for ($n=1; $n <= $showNumberPage && $n <= $total_pages; $n++){
					$html .= "<a href='".$this->baseUrl."project/index?page=".$n.$data."' ";
					if($n == $current){
						$html .= "class='is-active'";
					}
					$html .= "><li>".$n."</li></a>";
				}
			}else if($total_pages - $current >= $showNumberPage-1){
				for ($n=$current-1; $n < $current+$showNumberPage-1; $n++){
					$html .= "<a href='".$this->baseUrl."project/index?page=".$n.$data."' ";
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
					$html .= "<a href='".$this->baseUrl."project/index?page=".$n.$data."' ";
					if($n == $current){
						$html .= "class='is-active'";
					}
					$html .= "><li>".$n."</li></a>";
				}
			}

			$html .= "<a href='".$this->baseUrl."project/index?page=".$total_pages.$data."'><li>>></li></a></ul></div>";
			$html .= "<br/>Showing ".$current." of ".$total_pages." pages </div>";
		return $css.$html;
	}
	
}