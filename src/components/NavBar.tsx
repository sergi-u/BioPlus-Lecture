import { Container, Dropdown, NavbarBrand } from "react-bootstrap";
import "../components/css/NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="sticky-top NavBar-Font myColor">
        <ul
          className="nav nav-pills myColor border-body justify-content-end myColor myColor"
          data-bs-theme="dark"
        >
          <li className="nav-item">
            <a
              className="nav-link nav-btn-ovr item-hover"
              aria-current="page"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <Dropdown>
              <Dropdown.Toggle className="myColor-DropDown" id="dropdown-basic">
                Lecti
              </Dropdown.Toggle>
              <Dropdown.Menu className="Dropdown-bg-color">
                <Dropdown.Divider className="Divider-color" />
                <Dropdown.Item href="/Ch1/Lecture1" className="Dropdown-color">
                  1# Toxiinfectie Alimentara
                </Dropdown.Item>
                <Dropdown.Item href="/Ch1/Lecture2" className="Dropdown-color">
                  2# TBC
                </Dropdown.Item>
                <Dropdown.Item href="/Ch1/Lecture3" className="Dropdown-color">
                  3# Accident vascular
                </Dropdown.Item>
                <Dropdown.Item href="/Ch1/Lecture4" className="Dropdown-color">
                  4# Epilepsie
                </Dropdown.Item>
                <Dropdown.Item href="/Ch1/Lecture5" className="Dropdown-color">
                  5# SIDA
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-btn-ovr item-hover" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <Container>
              <NavbarBrand href="/">
                <img
                  src="https://www.svgrepo.com/show/923/leaf.svg"
                  width={30}
                  height={30}
                  className="NavBarImage"
                  alt="Biology Logo"
                />
              </NavbarBrand>
            </Container>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
