import Head from "next/head";
import IndexContainer from "../components/Container";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row, Container, Image, Card, Button } from "react-bootstrap";
const Index = (props) => {
  return (
    <IndexContainer>
      <Head>
        <title>Sala Cuna San Marco - Inicio</title>
      </Head>
      {/* Primer Contenedor */}
      <Container fluid className="mt-4">
        <h1 style={{ fontSize: "3rem" }}>¿Quiénes Somos?</h1>
        {/* Col 1 */}
        <Row className="justify-content-md-center">

        <Col sm={5} >
            <Card border="primary" className="carousel-div shadowCard">
              <Card.Body>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      className="carouselImg"
                      src="img/img1.jpg"
                      alt="1"
                      rounded
                    />
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
        </Col>
         {/* COL 2 */}
         <Col sm={6}>
            <p className="parrafo">
              Al igual que tú, somos padres que pasamos por la difícil tarea de
              buscar un buen jardín infantil para nuestros hijos, donde
              aprendieran, jugaran seguros y, sobre todo, fueran tratad
              <span style={{color:"#000000"}}>os con cari</span>ño por las tías.
            </p>

        </Col>
        </Row>

       
      </Container>
      <Container fluid className="secondContainer shadowCard">
        <Row className="justify-content-md-center">
          <Col md="3">
            <Card className="shadowCard infoCard mt-5">
              <Card.Body>
                <h1>¿ERES MENOR DE EDAD?</h1>
                <p>
                  Lo principal es tu seguridad y la tranquilidad de tus padres.
                  Si tienes entre 10 y 14 años necesitarás una autorización de
                  un adulto responsable para jugar.
                </p>
                <Button className="mt-3">Indicaciones</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="shadowCard infoCard mt-5">
              <Card.Body>
                <h1>RESERVA Y VEN A DISFRUTAR CON NOSOTROS</h1>
                <p>
                  Libera todas tus tensiones acumuladas de la vida diaria,
                  prueba esta nueva receta para relajarte y desconéctate
                  practicando Paintball. Para reservar ponte en contacto con
                  nosotros:
                </p>
                <Button className="mt-1">Reservar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="shadowCard infoCard mt-5">
              <Card.Body>
                <h1>RESERVA Y VEN A DISFRUTAR CON NOSOTROS</h1>
                Libera todas tus tensiones acumuladas de la vida diaria, prueba
                esta nueva receta para relajarte y desconéctate practicando
                Paintball. Para reservar ponte en contacto con nosotros:
                <br></br>
                <Button className="mt-3">Ver Todas</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Tercer contenedor */}

      <Container
        fluid
        className="secondContainer shadowCard mt-0"
        style={{ backgroundColor: "white" }}
      >
        <Row className="justify-content-md-center mt-4">
          <Col>
            <h2 style={{ color: "black" }}>VALORES</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <Card className="shadowCard infoCard2 mt-5">
              <Card.Body>
                <h2>
                  <strong>BÁSICO</strong>
                </h2>
                <p>Arriendo equipamiento + 100 paintballs</p>
                <h1>$ 9.000</h1>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadowCard infoCard2 mt-5">
              <Card.Body>
                <h2>
                  <strong>INTERMEDIO</strong>
                </h2>
                <p>Arriendo equipamiento + 200 paintballs</p>
                <h1>$ 10.500</h1>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadowCard infoCard2 mt-5">
              <Card.Body>
                <h2>
                  <strong>FULL GAME</strong>
                </h2>
                <p>Arriendo equipamiento + 300 paintballs</p>
                <h1>$ 13.500</h1>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadowCard infoCard2 mt-5">
              <Card.Body>
                <h2>
                  <strong>FANÁTICO</strong>
                </h2>
                <p>Arriendo equipamiento + 400 paintballs</p>
                <h1>$ 15.500</h1>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadowCard infoCard2 mt-5">
              <Card.Body>
                <h2>
                  <strong>PRO PLAYER</strong>
                </h2>
                <p>Arriendo equipamiento + 500 paintballs</p>
                <h1>$ 17.000</h1>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="text-muted text-left mt-5 ">
        <Container>
          <p className="float-right">
            <a href="/"> Ir al inicio</a>
          </p>
          <p>Centro recreativo de Paintball</p>
          <p>
            <img className="mr-2" src="img/instagram.png" alt="Second slide" />
            Instagram
          </p>
          <p>
            <img className="mr-2" src="img/facebook.png" alt="Second slide" />
            Facebook
          </p>
        </Container>
      </footer>
    </IndexContainer>
  );
};

export default Index;
