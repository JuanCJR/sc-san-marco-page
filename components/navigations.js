import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";

const Navigations = () => {
  return (
    <Navbar bg="primary" variant="dark" style={{padding:"1.2rem"}}>
      <Navbar.Brand>
      <img
        src="img/logo.png"
        width="155"
        height="39"
        className="d-inline-block align-top"
        alt="logo"
      />
      </Navbar.Brand>
     
      <ul className="navbar-nav mr-auto">
       
        {/* <li className="nav-item">
          <Link href="/reservas">
            <a className="nav-link">Reservas</a>
          </Link>
        </li> */}
      </ul>
      <ul className=" navbar-nav ml-auto">
      <li className="nav-item">
          <Link href="/">
            <a className="nav-link">Inicio</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">Nosotros</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">Galeria</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/reservar">
            <a className="nav-link">Contacto</a>
          </Link>
        </li>
      </ul>
    </Navbar>
  );
};

export default Navigations;
