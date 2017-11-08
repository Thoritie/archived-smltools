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
        $this->view->disable();
        
        $username = $this->request->getPost('username');
        $name = $this->request->getPost('name');
        $sirname = $this->request->getPost('sirname');
        $email = $this->request->getPost('email');
        $password = $this->request->getPost('password');
        $condition = [];
        if($input){
            $condition["username"] = $username;
        }
        $user = Users::Find(array($condition));
        if($user){
            $check=0;
        }else{
            $user = new Users();
            $user->username = $username;
            $user->name = $name;
            $user->sirname = $sirname;
            $user->email = $email;
            $user->password = $this->security->hash($password);
            $user->save();
            $check=1;
        }
        return json_encode($check);
        
    }
     public function testAction()
    {
        echo "1234";
        $user = Users::findById("59ffb1df6e0588c00d00002a");
        echo $user->name;
    }
}