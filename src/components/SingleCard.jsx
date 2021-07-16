import { Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const SingleCard = (props) => {
 
    return (

          <Card onClick={() => props.history.push('/album/' + props.cardId)} style={{border: "none"}} className="cardEffect">
            <Card.Img variant="top" src={props.imgPoster} style={{height: "192px", width: "330px"}} className="img-fluid cover-img"/>
          </Card>
    );
}

export default withRouter(SingleCard)