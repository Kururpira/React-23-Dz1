import './Card.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Card(props) {
  return (
  

    <Container fluid="md">
     
    <Row className="title">
      <Col>{props.title}</Col>
    </Row>
        <Row className="rate">
      <Col>{props.rate}</Col>
    </Row>
    <Row className="description">
      <Col>{props.description}</Col>
    </Row>
        <Row className="descriptionheader">
      <Col>{props.descriptionheader}</Col>
    </Row>

  </Container>

);
         /*
         <div className="card-body">
            <div className = "title">
              <h4 className="card-title">{props.title}</h4>
              </div>
              <div className = "rate">
              <h2 className="rate">{props.rate}</h2>
              </div>
              <div className = "description">
              <p className="card-text">{props.description}</p>
              </div>
              <div className = "descriptionheader">
              <p className="card-text-header">{props.descriptionheader}</p>
              </div>
          </div>
  );
  */
}

export default Card;