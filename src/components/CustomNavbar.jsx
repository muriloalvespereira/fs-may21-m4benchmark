import {
  Navbar,
  Nav,
  Form,
  NavDropdown,
  FormControl,
  Button,
} from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import { useState } from "react";
import avatar from "../assets/muriloavatar.png"
import { BsFillCaretDownFill } from "react-icons/bs";


const CustomNavbar = (props) => {
  const [isSearch, setIsSearch] = useState(false);
  const [hideSearch, setHideSearch] = useState(true);

  const displaySearch = () => {
    setIsSearch(true);
    setHideSearch(false);
  };

  const searchMovies = (message) => {
    props.searchMovies(message);
  };

  return (
    // <Navbar variant="dark" className="sticky-top bg-color">
    //   <Navbar.Brand href="#home">
    //     <img
    //       src="./assets/netflix_logo.png"
    //       className="img-logo"
    //       alt=""
    //     ></img>
    //   </Navbar.Brand>
    //   <Nav className="mr-auto">
    //     <Link to="/" className="nav-link">Home</Link>
    //     <Nav.Link href="#features">TV Shows</Nav.Link>
    //     <Nav.Link href="#pricing">Movies</Nav.Link>
    //     <Nav.Link href="#added">Recently Added</Nav.Link>
    //     <Nav.Link href="#list">My List</Nav.Link>
    //     <Link to="/register" className="nav-link">Register</Link>
    //   </Nav>
    //   <Form inline>
    //     {isSearch && <SearchBar searchMovies={searchMovies}/>}
    //     {hideSearch && (
    //       <FaSearch
    //         className="mr-3 nav-icons search-nav"
    //         onClick={displaySearch}
    //       />
    //     )}
    //     <p className="pt-3 mr-3 text-white">KIDS</p>
    //     <FaBell className="mr-3 nav-icons" />
    //     <img src="./assets/kidssecond.png" className="mr-1" alt=""></img>
    //     <FaSortDown className="nav-icons" />
    //   </Form>
    // </Navbar>

    <Navbar variant="dark" expand="lg" className="sticky-top bg-color">
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
        <Nav className="mr-auto">
          
        </Nav>
        <Form inline>
        <div>
                <div className="avatar-nav d-flex justify-content-between pb-1">
                  <div className="pl-1">
                    <img
                      src={avatar}
                      className="img-fluid img-avatar"
                      alt=""
                    />
                  </div>
                  <div><span>Murilo Alves</span></div>
                  <div className="pr-2"><BsFillCaretDownFill style={{color: "white"}}/></div>
                  <div className="account-avatar">
                    <div className="p-2 d-flex menu-avatar">
                      <div
                        className="
                          d-flex
                          btw-menu-avatar
                          align-items-center
                          hide-over
                        "
                      >
                        <p className="mb-0 py-2">Account</p>
                        <svg
                          role="img"
                          height="16"
                          width="16"
                          viewBox="0 0 16 16"
                          className="Svg-ulyrgf-0 ghlXvf svg-color"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="hide-over text-left">
                        <p className="mb-0 py-2">Profile</p>
                      </div>
                      <div
                        className="
                          d-flex
                          btw-menu-avatar
                          align-items-center
                          hide-over
                        "
                      >
                        <p className="mb-0 py-2">Go to Premium</p>
                        <svg
                          role="img"
                          height="16"
                          width="16"
                          viewBox="0 0 16 16"
                          className="Svg-ulyrgf-0 ghlXvf svg-color"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="hide-over text-left">
                        <p className="mb-0 py-2">
                          <a href="./login.html" className="a-changes-menu">
                            Log out</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(CustomNavbar);
