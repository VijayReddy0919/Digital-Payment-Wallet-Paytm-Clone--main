import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';
import Transaction from './Pages/Transaction.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
    return (
        <Router>
            <div className="App">
            <Navbar bg="dark" variant="dark">
                    <Container className="me-auto">
                        <Navbar.Brand href="/">My App</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signup">Signup</Nav.Link>
                            <Nav.Link href="/transaction">Transaction</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/transaction" element={<Transaction />} />
                    </Routes>
                </Container>
            </div>
        </Router>
    );
}

export default App;