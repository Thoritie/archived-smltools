<?php

class StakeholderController extends ControllerBase
{

    public function indexAction()
    {
        $stakeholders = Stakeholders::Find();
        return $stakeholders;
    }

    public function creOrganAction()
    {
        
    }

    public function creIndivAction()
    {
        
    }

    public function creRoleAction()
    {
        
    }
    public function saveStaketAction()
    {
        $id = $this->request->getPost("idStake");
        if(!$id){
            $stakeholders = new Stakeholders();
        }else{
            $stakeholders = Stakeholders::findById($id);
        }

        //1 == Organisation
        //2 ==
        //3 ==
        $stakeholders->idProject = $this->request->getPost("idProject");
        $stakeholders->type = $this->request->getPost("type");
        if($stakeholders->type==1){

        }else if($stakeholders->type==2){

        }else{

        }
        




    }
}