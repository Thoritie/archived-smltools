<?php
namespace Library\Common;

class Common {

    public static function getTaskNameById($model, $id){
        if($id==1){
            $arrTask = [];
            $arrTask['name'] = "?";
            $arrTask['id'] = "1";
            return $arrTask;
        }else{
            $task = $model::findById($id);
            if($task == null){
                return null;
            }
            $arrTask = [];
            $arrTask['name'] = $task->name;
            $arrTask['id'] = (string)$task->_id;
            return $arrTask;
        }
       
    }

    public static function getResourceNameById($model, $id){
        if($id==1){
            $arrRes = [];
            $arrRes['name'] = "?";
            $arrRes['id'] = "1";
            return $arrRes;
        }else{
            $res = $model::findByID($id);
            if($res == null){
                return null;
            }
            $arrRes = [];
            $arrRes['name'] = $res->name;
            $arrRes['id'] = (string)$res->_id;
            return $arrRes;
        }
    }

    public static function getStakeholderNameById($model, $id){
        if($id==1){
            $arrStake = [];
            $arrStake['name'] = "?";
            $arrStake['id'] = "1";
            return $arrStake;
        }else{
            $stake = $model::findByID($id);
            if($stake == null){
                return null;
            }
            $arrStake = [];
            $arrStake['name'] = $stake->name;
            $arrStake['id'] = (string)$stake->_id;
            return $arrStake;
        }
    }
    
    public static function addDataArray($model, $value){
    	$arrData = array();
    	if($value != null){
	    	foreach($value as $id){
                if($id == 1){
                    $item = [];
                    $item ["_id"] = array("\$id"=>"1");
                    $item ["name"] = "?";
                    array_push($arrData,$item);
                }else{
                    $item = $model::findById($id);
                    if($item != null)
	    			    array_push($arrData,$item);
                }

	    		
	    	}
        }
    	return $arrData;
    }

}
