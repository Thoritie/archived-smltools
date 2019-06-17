<?php 
use Phalcon\Mvc\Collection;  

class Requirements extends Collection { 
   public function initialize() { 
      $this->setSource("requirements"); 
   } 
}
