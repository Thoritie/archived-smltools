<?php 
use Phalcon\Mvc\Collection;  

class Collaboration extends Collection { 
   public function initialize() { 
      $this->setSource("collaboration"); 
   } 
}