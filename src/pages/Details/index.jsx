import { Container } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/button';
import { Section } from '../../components/Section';

export function Details() {

  return(
    <Container>
       <Header /> 
       < Section title ="links uteis">
        <ul>
          <li>item1</li>
          <li>item1</li>
          <li>item1</li>
        </ul>
       </Section>

      <Button  title="back" />
    </Container>

   );
}

