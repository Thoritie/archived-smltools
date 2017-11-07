<?php 
use Phalcon\Mvc\Collection;  

class Stakeholder extends Collection { 
   public function initialize() { 
      $this->setSource("resource"); 
   } 
}