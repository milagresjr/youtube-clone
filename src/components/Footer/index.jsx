import { Container } from './styles';

function Footer() {
  return (
        <>
            <Container>
                <p>
                    <a href="#">Acerca de</a>
                    <a href="#">Imprensa</a>
                    <a href="#">Direitos de autor</a>
                    <a href="#">Contactar-nos</a>
                    <a href="#">Criadores</a>
                    <a href="#">Publicidade</a><br />
                    <a href="#">Programadores</a>
                </p>
                <p>
                    <a href="#">Termos</a>
                    <a href="#">Privacidade</a>
                    <a href="#">Politica e seguranca</a>
                    <a href="#">Como funciona o YouTube</a>
                    <a href="#">Testar novas funcionalidades</a>
                </p>

                <span>&copy; 2023 Google LLC</span>
            </Container>
        </>
  );
}

export default Footer;