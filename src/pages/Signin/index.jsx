import {FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/button';

import { Container, Form, Background } from './styles';

export function Signin (){
  return(
    <Container>
      <Form>
        <h1>Rockeat Notes</h1>
        <p>App for save and to manage your util links </p>

        <h2> Login </h2>

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

        <Button title= 'To Enter'/>

        <Link to="/register">
          Create Acconunt
        </Link>

      </Form>
      <Background />
    </Container>
  );
}