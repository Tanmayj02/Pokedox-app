import { Card, Col, Container } from "react-bootstrap";

const Pokemon = (props: any) => {
  return (
    <Col xs={3} sm={3} md={3} lg={2}>
      <Container>
        <Card>
          <Card.Header className="text-center">{props.name}</Card.Header>
          <Card.Img src={props.image} />
          <Card.Footer className="text-center">
            <button> Details </button>
          </Card.Footer>
        </Card>
        {/* <h5> {props.name} </h5>
        <img src={props.image} alt={props.name} /> */}
      </Container>
    </Col>
  );
};

export default Pokemon;
