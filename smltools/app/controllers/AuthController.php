<?php

class AuthController extends ControllerBase
{

    public function loginAction()
    {

    }

    public function registerAction()
    {
        
    }

    public function signinAction()
    {
        if ($this->request->isPost()) 
        {
            if ($this->security->checkToken()) 
            {
                $login    = $this->request->getPost("username");
                $password = $this->request->getPost("password");

                $user = Users::findFirst(
                [
                    [
                        'username' => $login,
                    ]
                ]
                );
                if ($user) 
                {
                    if ($this->security->checkHash($password, $user->password)) 
                    {
                        $this->session->set("login", $user->_id);
                        $this->flashSession->success("Successful login");
                        return $this->response->redirect("project");
                    }else
                    {
                        $this->security->hash(rand());
                        $this->flashSession->error("Unsuccessful login, please try again");
                        return $this->response->redirect("Auth/login");
                    }
                } else 
                {
                // To protect against timing attacks. Regardless of whether a user exists or not, the script will take roughly the same amount as it will always be computing a hash.
                    $this->security->hash(rand());
                    $this->flashSession->error("Unsuccessful login, please try again");
                    return $this->response->redirect("Auth/login");
                }
            }
        }
        

        // The validation has failed
    }

    public function signupAction()
    {   
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
        return;   
    }

    public function logoutAction(){
        if($this->session->has("login")){
        $this->session->remove("login"); ///only one
        //$this->session->destroy();
        
        return $this->response->redirect("index");
      }
    }

    public function checkDupAction()
    {
        $result = true;
        $username = $this->request->getPost('username');
        $condition = [];
        if($username){
            $condition["username"] = $username;
        }
        $user = Users::Find(array($condition));
        if($user){
            $result = false;
        }
        return json_encode($result);
    }

    
}