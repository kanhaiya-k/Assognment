import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export const PageDetail = () => {
  const { id } = useParams();
  const [text, setText] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://fast-reef-22226.herokuapp.com/data/${id}`)
      .then(({ data }) => setText(data));
  };

  return (
    <div>
      <h1>Description</h1>
      <Link to="/search">Search</Link>
      <hr />
      <Container id="detailed-result">
        <Col md={6} className="m-auto" style={{ textAlign: "left" }}>
          <div className="title">
            <b>Title: </b>
            {text.title}
          </div>
          <div className="desc">
            <b>Description: </b>
            {text.description}
          </div>
          <div className="author">
            <b>Author: </b>
            {text.author}
          </div>
          <div className="creation-date">
            <b>Creation Date: </b>
            {Date(text.creation_date)}
          </div>
          <div className="explicit">
            <b>Explicit: </b>
            {text.explicit ? "Yes" : "No"}
          </div>
          <div className="quality">
            <b>Quality: </b>
            {text.quality}
          </div>
        </Col>
      </Container>
    </div>
  );
};
