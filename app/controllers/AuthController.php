<?php

class AuthController extends ControllerBase
{

    public function loginAction()
    {

    }

    public function registerAction()
    {
        
    }

    public function signupAction()
    {
        $this->view->disable();
        
        $username = $this->request->getPost('username');
        $name = $this->request->getPost('name');
        $sirname = $this->request->getPost('sirname');
        $email = $this->request->getPost('email');
        $password = $this->request->getPost('password');

        $user = new Users();

        $user->username = $username;
        $user->name = $name;
        $user->sirname = $sirname;
        $user->email = $email;
        $user->password = $this->security->hash($password);
        $user->save();
        
    }
    public function checkLoginAction()
    {
        $this->view->disable();
        $input = $this->request->getPost('username');

        $condition = [];
        
        if($input){
            $condition["username"] = $input;
        }

        $user = Users::Find(array($condition));
        if($user){
            $check=0;
        }else{
            $check=1;
        }
        return json_encode($check);
    }
}

