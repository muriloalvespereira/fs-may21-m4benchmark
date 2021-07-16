import { Container, Row, Col } from "react-bootstrap"
const Artist = () => {
return (
    <Container fluid className="home-page">
     <Row>
         <Col>
         <Row className="text-white mt-4 mb-2 categories">
          <h3>#THROWBACKTHURSDAY</h3>
        </Row>
         {/* <Section category="rock" /> */}
         <Row className="text-white mt-5 mb-2 categories">
          <h3>Classifiche</h3>
        </Row>
         {/* <Section category="summer" /> */}
         
         </Col>
     </Row>
    </Container>
)
}
 export default Artist