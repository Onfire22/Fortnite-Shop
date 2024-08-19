import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Github Repo</Navbar.Brand>
        <Navbar.Brand>{new Date().getFullYear()}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;