import { Form, Container, Col } from "react-bootstrap";
import { useState } from "react";

export const Google = () => {
  const [text, setText] = useState("");

  const handleData = (e) => {
    setText(e.target.value);
  };
  return (
    <Container>
      <Col md={6} className="mx-auto my-5">
        <img
          src="https://doteurope.eu/wp-content/uploads/2020/01/Google_2015_logo.svg_.png"
          className="img-fluid mb-4"
        />
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `/search?q=${text}`;
          }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              size="lg"
              placeholder="Search here..."
              style={{ borderRadius: "30px" }}
              className="search-box"
              onChange={handleData}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="submit"
              value="Search"
              style={{ visibility: "hidden" }}
            />
          </Form.Group>
        </Form>
      </Col>
    </Container>
  );
};
