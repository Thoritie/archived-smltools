<?php 
use Phalcon\Mvc\Collection;  

class Test extends Collection { 
   public function initialize() { 
      $this->setSource("test"); 
   } 
}