<?php
namespace Library\Common;

class Common {

    public static function getTaskNameById($model, $id){
        $task = $model::findById($id);
        $arrTask = [];
        $arrTask['name'] = $task->name;
        $arrTask['id'] = (string)$task->_id;
        return $arrTask;
    }

    public static function getResourceNameById($model, $id){
        $res = $model::findByID($id);
        $arrRes = [];
        $arrRes['name'] = $res->name;
        $arrRes['id'] = (string)$res->_id;

       return $arrRes;
    }

    public static function getStakeholderNameById($model, $id){
        $stake = $model::findByID($id);
        $arrStake = [];
        $arrStake['name'] = $stake->name;
        $arrStake['id'] = (string)$stake->_id;
        return $arrStake;
    }
}
