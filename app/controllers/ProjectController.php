<?php

class ProjectController extends ControllerBase
{

    public function indexAction()
    {

    }

    public function createAction()
    {

    }
    public function findUserAction()
    {
        $user = Users::find();
        return json_encode($user);
    }

}

