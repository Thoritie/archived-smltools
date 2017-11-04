<?php 
use Phalcon\Mvc\Collection;  

class Task extends Collection { 
   public function initialize() { 
      $this->setSource("tasks"); 
   } 
}