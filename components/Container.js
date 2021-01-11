import Head from "next/head";
import Navigations from "./navigations";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
const Container = (props) => {
  return (
    <div>
      <Head>
        <title>Paintball Project</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/minty/bootstrap.min.css"
        ></link>
        {/* <link rel="stylesheet" href="styles/styles.css"></link> */}
      </Head>

      {/* Encabezado */}
      <Navbar className="header-top" bg="light" variant="light">
        <Nav>
          <Navbar.Text>Bienvenido!</Navbar.Text>
        </Nav>

        <Nav className="ml-auto mr-5">
          <Navbar.Text>
            <Image src="img/phone.png" alt="1" rounded />
            +56 9 7319 8476
          </Navbar.Text>
        </Nav>

        <Nav>
          <Navbar.Text>
            <Image src="img/marker.png" alt="1" rounded />
            Diecinueve Nte 1096, Independencia, Región Metropolitana
          </Navbar.Text>
        </Nav>
      </Navbar>
      <Navigations />

      <div
        className="App"
        // style={{
        //   background:
        //     "linear-gradient(rgba(75, 123, 236,.2), rgba(75, 123, 236,.5)), url(img/bg.jpg) 10% fixed",
        //   backgroundSize: "cover",
        // }}
      >
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Container;
