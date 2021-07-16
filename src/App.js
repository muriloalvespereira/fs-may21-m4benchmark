import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Container fluid>
         <Row>
            <Col className="col-1 col-sidebar">
            <SideBar />
            </Col>
            <Col className="col-11 nav-bar">
            <CustomNavbar />
            </Col>

         </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
