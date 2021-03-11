//Libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";

//bootstrap
import { Row, Col } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <div className="page-footer pt-1">
        <div className="w-75 m-auto">
          <Row className="text-center contacts">
            <Col className="myborder" md={6}>
              <div className="pt-5">
                <Link to="/" className="text-light">
                  {" "}
                  <h3>HOME </h3>
                </Link>

                <h5 className="pt-2">CHECK NOW</h5>
                <ul className="list-unstyled">
                  <Link to="/products/Face">
                    {" "}
                    <li
                      className=""
                      style={{ fontSize: "25px", color: "grey" }}
                    >
                      Face
                    </li>
                  </Link>
                  <Link to="/products/Lips">
                    {" "}
                    <li
                      className=""
                      style={{ fontSize: "25px", color: "grey" }}
                    >
                      Lips
                    </li>
                  </Link>
                  <Link to="/products/Eyes">
                    {" "}
                    <li
                      className=""
                      style={{ fontSize: "25px", color: "grey" }}
                    >
                      Eyes
                    </li>
                  </Link>
                </ul>
              </div>
            </Col>

            <Col md={6} className=" text-center pt-3 ">
              <div className="pt-5">
                <h2> Contact Us</h2>
                <ul className="list-unstyled">
                  <li className="py-3">
                    <i className="fas fa-phone px-2" />
                    +00 0000 0000
                    <br />
                  </li>

                  <li className="py-3">
                    <i className="fas fa-at px-2" />
                    info@cosmetics.com
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        <div className="footer-copyright text-center py-2">
          Copyright© Pretty Woman {new Date().getFullYear()}
        </div>
      </div>
    );
  }
}
