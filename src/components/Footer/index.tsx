import { Container } from './styled';

export const Footer = () => {
  return (
    <Container>
      Feito com carinho por Otávio Miranda &{' '}
      <a href="https://github.com/rodrigoganchieta" target="_blank">
        <i className="devicon-github-original" /> RODRIGOGANCHIETA
      </a>
    </Container>
  );
};
