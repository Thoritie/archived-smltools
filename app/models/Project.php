<?php 
use Phalcon\Mvc\Collection;  

class Project extends Collection { 
   public function initialize() { 
      $this->setSource("project"); 
   } 
}