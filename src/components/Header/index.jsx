import { RiShutDownLine } from "react-icons/ri";

import { Container,Profile,Logout } from "./styles";

export function Header(){
    return(
      <Container>
        <Profile>
          <img src="https://github.com/rodrigosantos0660.png" 
          alt="picture of the user" />
          <div>
            <span>
              welcome
            </span>
            <strong>
              Rodrigo Santos
            </strong>
          </div>
        </Profile>
        <Logout>

          <RiShutDownLine/>

        </Logout>


      </Container>
  );
}