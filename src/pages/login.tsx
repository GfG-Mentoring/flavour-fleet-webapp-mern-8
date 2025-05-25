import { LoginForm } from '@/components/LoginForm';
import { SignupForm } from '@/components/SignupForm';
import DefaultLayout from '@/layouts/default';
import { Card, CardBody } from '@heroui/card';
import { Tab, Tabs } from '@heroui/tabs';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [selected, setSelected] = React.useState('login');

  const navigate = useNavigate();


  const auth = useSelector(state=> state.auth);

    useEffect(()=> {
        if(auth.user.id){
            navigate("/", {replace:true})
        }
    },[auth])

 
  return (
    <DefaultLayout>
      <section className="flex justify-center flex-row w-full">
        <div className="flex flex-col">
          <Card className="max-w-full w-[340px] h-[400px]">
            <CardBody className="overflow-hidden">
              <Tabs
                fullWidth
                aria-label="Tabs form"
                selectedKey={selected}
                size="md"
                onSelectionChange={setSelected}
              >
                <Tab key="login" title="Login">
                    <LoginForm/>
                </Tab>
                <Tab key="sign-up" title="Sign up">
                  <SignupForm/>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default LoginPage;
