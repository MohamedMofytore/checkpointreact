import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function App() {


  return ( 
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Form style={{width:"300px"}}>
    <fieldset disabled>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
        <Form.Control id="disabledTextInput" placeholder="Disabled input" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
        <Form.Select id="disabledSelect">
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          id="disabledFieldsetCheck"
          label="Can't check this"
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </fieldset>
  </Form>

    </>
  );
}

export default App;
