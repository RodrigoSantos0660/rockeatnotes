import {FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input';
import { Button } from '../../components/button';

import { Container, Form, Background } from './styles';

export function SignUp (){
  return(
    <Container>
     <Background />
      <Form>
        <h1>Rockeat Notes</h1>
        <p>App for save and to manage your util links </p>

        <h2> Create your Account </h2>
        <Input 
         placeholder='Name'
         type='text'
         icon={FiLogIn}
        />

        <Input 
         placeholder='E-maiL'
         type='text'
         icon={FiMail}
        />
        
        <Input 
         placeholder='Senha'
         type='password'
         icon={FiLock}
        />

        <Button title= 'Register'/>

        <a href="#">
          Back to Login
        </a>

      </Form>
    </Container>
  );
}