import Head from "next/head";
import IndexContainer from "../components/Container";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row, Container, Image, Card } from "react-bootstrap";


const imgArray = [
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg"
]

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

          <Col sm={6} >
            <Card border="primary" className="carousel-div shadowCard">
              <Card.Body>
                <Carousel>

                  {imgArray.map(i => {
                    return <Carousel.Item>
                      <Image
                        className="carouselImg"
                        src={`img/${i}`}
                        alt="1"
                        rounded
                      />
                    </Carousel.Item>
                  })}


                </Carousel>
              </Card.Body>
            </Card>
          </Col>
          {/* COL 2 */}
          <Col sm={5}>
            <p className="parrafo text-left">
              Sala cuna san marco es un centro educativo particular que tiene como
              objetivo brindar una Atención integral y de calidad a los hijos e hijas de
              las funcionarias de empresas que contratan nuestros servicios y
              responden a los requerimientos educativos de sus familias mientras
              sus madres se encuentran en sus trabajos.
            </p>

          </Col>
        </Row>


      </Container>
      <Container fluid className="secondContainer shadowCard">
        <Row className="justify-content-md-center">
          <Col md="3">
            <Card className="shadowCard infoCard mt-5">
              <Card.Body>
                <h1>VISIÒN</h1>
                <p className="text-left">
                  Lograr  una educación de calidad, que potencie todos los aspectos de los infantes, favoreciendo aprendizajes oportunos y con sentido para los niños y niñas.
                  {/* , formando personas que hagan cambios significativos para la sociedad en la cual están insertos. */}

                </p>

              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="shadowCard infoCard mt-5">
              <Card.Body>
                <h1>MISIÒN</h1>
                <p className="text-left">
                  Ofrecer educación de calidad, oportuna y pertinente que favorezca aprendizaje relevante y significativo.
                   {/* en función al bienestar y al desarrollo pleno de la niña y el niño como persona, en un ambiente propicio para el aprendizaje. */}

                </p>

              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="shadowCard infoCard mt-5">
              <Card.Body>
                <h1>VALORES</h1>
                <ul>
                  <li className="text-left">
                    Educar a los niños y niñas bajo una formación valórica dando énfasis al amor por la familia respeto a las diferencias, responsabilidad y perseverancia.
                    {/* , formando personas de bien para enfrentar con éxito los desafíos de su proyecto de vida. */}
                  </li>
                  <li className="text-left mt-3">
                    Fomentar el amor y respeto a la naturaleza y a la solidaridad en la sociedad.
                    {/* , desarrollar el espíritu emprendedor y su capacidad de aprender a lo largo de la vida */}
                  </li>
                </ul>


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
            <h2 style={{ color: "black" }}>HISTORIA</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <Card className="shadowCard infoCard2 mt-5 text-left">
              <Card.Body>
                {/* <h2>
                  <strong>BÁSICO</strong>
                </h2> */}
                <p>El 1 de Marzo de 1981 se creó el Jardín Infantil San Marco, que contaba con los niveles transición I y transición II con media jornada de mañana y tarde para responder a una necesidad de atención de niños y niñas de la comuna. Estos educando asisten en forma particular.
                  <br></br>
                  <br></br>
En marzo de 1985 se crea además la sala cuna para atender a hijos (as) de madres trabajadoras. 
{/* pertenecientes a la comuna previo contrato.  */}
 {/* La sala cuna atiende de lunes a viernes en jornada completa de 07.30 a 19.30 HRS y de enero a diciembre. También para responder a una necesidad de tener una sala cuna cerca de su lugar de residencia y/o lugar de trabajo. */}
 <br></br>
 <br></br>
 El 28 de febrero de 2010 se comienzan las modificaciones estructurales para cumplir con las normas de la junta nacional de jardines infantiles (JUNJI) para obtener el rol respectivo para atender solo niveles de sala cuna.
</p>

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
          <p>Sala Cuna San Marco</p>
          <p>
            <img className="mr-2" style={{ width: "30px" }} src="img/instagram.png" alt="Second slide" />
            Instagram
          </p>
          <p>
            <img className="mr-2" style={{ width: "30px" }} src="img/facebook.png" alt="Second slide" />
            Facebook
          </p>
        </Container>
      </footer>
    </IndexContainer>
  );
};

export default Index;
