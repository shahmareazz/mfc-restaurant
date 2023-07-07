import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
         <Navbar expand="lg" className="bg-body-tertiary" bg="primary"  data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">MFC</Navbar.Brand>
                <Nav className="me-auto"></Nav>
                    <Nav.Link as={Link} to="/Menu">Menu</Nav.Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Nav.Link as={Link} to="/Login"> Login/Registration</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
            
            </Container>
       </Navbar></>
    )
}

export default Header;