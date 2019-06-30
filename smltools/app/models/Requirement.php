<?php 
use Phalcon\Mvc\Collection;  

class Requirement extends Collection { 
   public function initialize() { 
      $this->setSource("requirement"); 
   } 
}
