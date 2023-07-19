import {FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom';
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
         placeholder='Password'
         type='password'
         icon={FiLock}
        />

        <Button title= 'Register'/>

        <Link to="/">
          Back to Login
        </Link>

      </Form>
    </Container>
  );
}