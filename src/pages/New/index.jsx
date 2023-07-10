import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/Noteitem';
import { Section } from '../../components/Section';

import { Container, Form } from './styles'

export function New(){
  return(
    <Container>
      <Header />
        <main>
          <Form >
            <header>
              <h1>Create Note</h1>
              <a href="/">Back</a>
            </header>

            <Input placeholder='title' />
            <TextArea placeholder='Comments'/>
            <Section title='links uteis'>
              <NoteItem  />


            </Section>
          </Form>
        </main>

    </Container>
 )
}