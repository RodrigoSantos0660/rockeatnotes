import { FiArrowLeft, FiUser, FiMail, FiLock,FiCamera  } from "react-icons/fi";

import { Input } from "../../components/Input"
import { Button } from "../../components/button"

import { Container, Form, Avatar } from "./styles";

export function Profile (){
  return(
    <Container>
      <header>
        <a href="/">
        <FiArrowLeft />
        </a>
      </header>

      <Form>

        <Avatar>
          <img src="http://github.com/rodrigosantos0660.png" 
          alt="Picture from user" 
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input 
              id="avatar"
              type="file"  
            />
          </label>
        </Avatar>

        <Input 
         placeholder='Name'
         type='text'
         icon={FiUser}
        />

        <Input 
         placeholder='Email'
         type='text'
         icon={FiMail}
        />

         <Input 
         placeholder='Current Password'
         type='password'
         icon={FiLock}
        />

        <Input 
         placeholder='New password'
         type='password'
         icon={FiLock}
        />
        
        <Button title='Save'/>

      </Form>
    </Container>
  )
}