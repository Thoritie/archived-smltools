<?php 
use Phalcon\Mvc\Collection;  

class Resource extends Collection { 
   public function initialize() { 
      $this->setSource("resource"); 
   } 
}