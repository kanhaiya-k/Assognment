/** @format */

import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [text, setText] = useState("");

  const handleData = (e) => {
    setText(e.target.value);
  };

  return (
    <Navbar bg="light" expand="lg" id="navbar" sticky="top">
      <Container>
        <Navbar.Brand style={{ width: "120px !important" }}>
          <Link to="/">
            {" "}
            <img
              src="https://doteurope.eu/wp-content/uploads/2020/01/Google_2015_logo.svg_.png"
              width={120}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form
            className="d-flex col-md-8"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `/search?q=${text}`;
            }}
          >
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
              onChange={handleData}
            />

            <Button
              type="submit"
              variant="outline-secondary"
              className="search"
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
