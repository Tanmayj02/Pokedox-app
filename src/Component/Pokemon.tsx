/* eslint-disable react/button-has-type */
import { Card, Col, Container } from "react-bootstrap";

function Pokemon(props: any) {
  const { name, image } = props;
  return (
    <Col xs={12} sm={6} md={3} lg={4} className="p-3">
      <Container fluid>
        <Card>
          <Card.Header className="text-center">{name}</Card.Header>
          <Card.Img
            src={image}
            className="mx-auto"
            style={{ width: 300, height: 300 }}
          />
          <Card.Footer className="text-center">
            <button> Details </button>
          </Card.Footer>
        </Card>
        {/* <h5> {props.name} </h5>
        <img src={props.image} alt={props.name} /> */}
      </Container>
    </Col>
  );
}

export default Pokemon;
