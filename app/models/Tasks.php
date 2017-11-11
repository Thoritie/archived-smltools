<?php 
use Phalcon\Mvc\Collection;  

class Tasks extends Collection { 
   public function initialize() { 
      $this->setSource("tasks"); 
   } 
}