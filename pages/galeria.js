import Head from "next/head";
import IndexContainer from "../components/Container";
import { Col, Row, Container, Image, Card } from "react-bootstrap";

const imgArray = [
    "img12.jpg",
    "img11.jpg",
    "img13.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",




]

const Galeria = (props) => {
    return (
        <IndexContainer>
            <Head>
                <title>Sala Cuna San Marco - Nosotros</title>

            </Head>

            <Container className="mt-4">
                <Row>
                    <Col>
                        <h1>GALERIA</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                {imgArray.map(i => {
                    return<Col sm="6" className="mt-3 ml-0 mr-0 p-1 ">
                        
                             <Card border="primary" className="carousel-div shadowCard">
                                <Card.Body>

                                    <Image
                                        className="carouselImg"
                                        src={`img/${i}`}
                                        alt="1"
                                        rounded
                                    />

                                </Card.Body>
                            </Card>
                        
                    </Col>
                    })}
                </Row>
            </Container>

        </IndexContainer>
    )
};

export default Galeria;