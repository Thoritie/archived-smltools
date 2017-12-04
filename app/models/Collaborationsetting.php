<?php 
use Phalcon\Mvc\Collection;  

class CollaborationSetting extends Collection { 
   public function initialize() { 
      $this->setSource("collaborationSetting"); 
   } 
}