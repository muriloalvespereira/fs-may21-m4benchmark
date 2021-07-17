import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import BottomBar from "./components/BottomBar";
import Home from "./components/Home";
import Album from "./components/Album";
import Artist from "./components/Artist";
import { useState } from "react";

const App = () => {

const [toggleCover, setToggleCover] = useState(false)

  const showCover = () => {
    setToggleCover(!toggleCover)
  }

  return (
    <div className="App">
      <Router>
        <Container fluid>
          <Row>
            <Col className="col-1 col-sidebar">
              <SideBar showCover={showCover} toggleCover={toggleCover} />
            </Col>
            <Col className="col-11 nav-bar">
              <CustomNavbar />
            <Route path="/" exact component={Home} />
            <Route path="/album/:id" exact component={Album} />
            <Route path="/artist" exact component={Artist} />
            </Col>
          </Row>
          <Row>
            <BottomBar showCover={showCover} toggleCover={toggleCover} />
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
