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
		}
		
		if (isset($config['sort'])) {
			$this->sort	= array('sort' => array($config['sort'] => 1));
		}else{
			$this->sort = array();
		}
		
		if (isset($config['baseUrl'])) {
			$this->baseUrl = $config['baseUrl'];
		}else{
			$this->baseUrl = "";
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
		
		if ($pageNumber <= 0) {
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
		
		$page = new \stdClass();
		$page->items = $model::find(
				array(
					$this->query,
					$this->sort,
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
		$page->widgetPagination = $this->WidgetPaginate($page);
		
		return $page;
	}
	
	function WidgetPaginate($page){
		$css = "<style>
			.pagination {
			    display: inline-block;
			}
			
			.pagination a {
			    color: black;
			    float: left;
			    padding: 8px 16px;
			    text-decoration: none;
			}
			
			.pagination a.active {
			    background-color: #4CAF50;
			    color: white;
			    border-radius: 5px;
				pointer-events: none;
			}
			
			.pagination a:hover:not(.active) {
			    background-color: #ddd;
			    border-radius: 5px;
			}
			</style>";
		
		$html = "<div class='pagination'>
				<a href='".$this->baseUrl."project/index?page=1'>&laquo;</a>";
		
			if($page->current == 1){
				for ($n=1; $n <= 6; $n++){
					$html .= "<a href='".$this->baseUrl."project/index?page=".$n."' ";
					if($n == $page->current){
						$html .= "class='active'";
					}
					$html .= ">".$n."</a>";
				}
			}else if($page->total_pages - $page->current >= 5){
				for ($n=$page->current-1; $n < $page->current+5; $n++){
					$html .= "<a href='".$this->baseUrl."project/index?page=".$n."' ";
					if($n == $page->current){
						$html .= "class='active'";
					}
					$html .= ">".$n."</a>";
				}
			}else{
				for ($n=$page->total_pages-5; $n <= $page->total_pages; $n++){
					$html .= "<a href='".$this->baseUrl."project/index?page=".$n."' ";
					if($n == $page->current){
						$html .= "class='active'";
					}
					$html .= ">".$n."</a>";
				}
			}

			$html .= "<a href='".$this->baseUrl."project/index?page=".$page->total_pages."'>&raquo;</a></div>";
		
		$html .= "<br/>You are in page ".$page->current." of ".$page->total_pages;
		
		return $css.$html;
	}
	
}