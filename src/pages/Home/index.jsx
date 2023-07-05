import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RockeatNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="All" />
        </li>
        <li>
          <ButtonText title="node" />
        </li>

      </Menu>

      <Search>
        <Input placeholder="Search for title" />

      </Search>

      <Content>
        <Section title="My Notes">
          <Note data={{title: 'React', tags:[
            {id: '1',name:'React'},
            {id: '2',name:'Rockeatseat'},
          ]
          }}/>

        </Section>

      </Content>

      <NewNote>
        <FiPlus />
        Create Note
      </NewNote>

    </Container>

  )

}