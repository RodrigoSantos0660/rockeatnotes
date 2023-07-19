import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/button'
import { Link } from 'react-router-dom';

import { Container, Form } from './styles'

export function New(){
  return(
    <Container>
      <Header />
        <main>
          <Form >
            <header>
              <h1>Create Note</h1>
              <Link to="/">Back</Link>
            </header>

            <Input placeholder='title' />
            <TextArea placeholder='Comments'/>
            <Section title='links uteis'>
              <div className="tags">
              <NoteItem value="https://rockeatseat.com.br "/>
              <NoteItem isNew placeholder="novo link" />
              </div>
            </Section>
            <Section title='bookmarks'>
              <NoteItem value="react "/>
              <NoteItem isNew placeholder="new tag" />
            </Section>
            <Button title="save"/>
          </Form>
        </main>

    </Container>
 )
}