<?php 
use Phalcon\Mvc\Collection;  

class Stakeholders extends Collection { 
   public function initialize() { 
      $this->setSource("stakeholders"); 
   } 
}