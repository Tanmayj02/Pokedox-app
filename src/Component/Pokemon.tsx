/* eslint-disable react/button-has-type */
import { Card, Col, Container } from "react-bootstrap";

function Pokemon(props: any) {
  const { name, image } = props;
  return (
    <Col xs={12} sm={6} md={3} lg={4} className="p-3">
      <Container fluid>
        <Card>
          <Card.Header className="text-center p-2 bg-gradient-secondary text-black">
            {name}
          </Card.Header>
          <Card.Img
            src={image}
            className="imagefooter mx-auto p-4 bg-gradient-primary img-fluid rounded"
            style={{ width: 300, height: 300 }}
          />
          <Card.Footer className="text-center p-2 bg-gradient-secondary text-black">
            <a href={`/pokemon/${name}`}>
              <button className="btn btn-light"> Explore {name} </button>
            </a>
          </Card.Footer>
        </Card>
      </Container>
    </Col>
  );
}

export default Pokemon;
