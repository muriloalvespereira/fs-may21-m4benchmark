import { Navbar, Nav, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
// import { useState } from "react";
import avatar from "../assets/muriloavatar.png";
import { BsFillCaretDownFill } from "react-icons/bs";
import MenuNavbar from "./MenuNavbar";
import { useState } from "react";

const CustomNavbar = () => {
  const [menuNav, setMenuNav] = useState(false);
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
      if (window.scrollY >= 80) {
          setNavbar(true)
      } else {
          setNavbar(false)
      }
  }

  window.addEventListener('scroll', changeBackground);

  const hideMenu = () => {
      setMenuNav(false)
  }
 

  return (
   <>
        <Navbar variant="dark" expand="lg" className={navbar ? 'sticky-top bg-color active' : 'sticky-top bg-color' } >
          <Navbar.Brand href="#home">
            <div className=" d-flex pl-4">
              <div className="button-nav-left">
                <svg
                  role="img"
                  focusable="false"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  className=" arrows-left
                          Svg-sc-1usfroi-0
                          kcaoHR
                          _6fe5d5efc9b4a07d5c424071ac7cdacb-scss
                        "
                >
                  <polyline
                    points="16 4 7 12 16 20"
                    fill="none"
                    stroke="#ffffff"
                  ></polyline>
                </svg>
              </div>
              <div className="button-nav-right ml-3">
                <svg
                  role="img"
                  focusable="false"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  className=" arrows-right
                          Svg-sc-1usfroi-0
                          kcaoHR
                          _6fe5d5efc9b4a07d5c424071ac7cdacb-scss
                        "
                >
                  <polyline
                    points="8 4 17 12 8 20"
                    fill="none"
                    stroke="#ffffff"
                  ></polyline>
                </svg>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <div onClick={() => setMenuNav(!menuNav)} className={menuNav ? 'avatar-nav d-flex justify-content-between pb-1 active' : 'avatar-nav d-flex justify-content-between pb-1'}>
                <div className="pl-1">
                  <img src={avatar} className="img-fluid img-avatar" alt="" />
                </div>
                <div>
                  <span>Murilo Alves</span>
                </div>
                <div className="pr-2">
                  <BsFillCaretDownFill style={{ color: "white" }} />
                </div>
                {
                menuNav &&
                <MenuNavbar hideMenu={hideMenu} />
                }
              </div>
            </Form>
          </Navbar.Collapse>
        </Navbar>
   </>
  );
};

export default withRouter(CustomNavbar);
