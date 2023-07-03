import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/button';
import { Section } from '../../components/Section';
import { Tags } from '../../components/Tags';
import { ButtonText } from '../../components/ButtonText';

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Delete-Note" />

          <h1>
            Intro to React
          </h1>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam qui deserunt. Repudiandae accusantium deserunt perferendis dicta quod sequi qui sint nemo impedit? Eligendi iusto officiis cumque molestiae eos natus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam qui deserunt. Repudiandae accusantium deserunt perferendis dicta quod sequi qui sint nemo impedit? Eligendi iusto officiis cumque molestiae eos natus?
          </p>

          < Section title="links uteis">
            <Links>
              <li>
                <a href="http://www.rockeatseat.com.br">http://www.rockeatseat.com.br/</a>
              </li>
              <li>
                <a href="http://www.rockeatseat.com.br">http://www.rockeatseat.com.br/</a>
              </li>
            </Links>
          </Section>

          < Section title="Bookmarks">
            <Tags title="express" />
            <Tags title="nodejs" />
          </Section>

          <Button title="back" />
        </Content>
      </main>
    </Container>

  );
}

