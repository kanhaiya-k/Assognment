/** @format */
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
import { useState, useEffect } from "react";
import { Col, Container, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  filter_Data,
  search_Data,
  setData,
  sortA_Z,
  sortDATE_ASC,
  sortDATE_DESC,
  sortQUALITY_ASC,
  sortQUALITY_DESC,
  sortZ_A,
} from "../Redux/actions";

export const SearchResults = () => {
  let { search } = useLocation();

  search = search.slice(3);

  const { results } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(results);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`https://fast-reef-22226.herokuapp.com/data?q=${search}`).then(
      ({ data }) => dispatch(search_Data(data))
      // dispatch(search_Data(search))
    );
  };
  return (
    <div style={{ textAlign: "left" }}>
      <Header />
      <br />

      <Container id="search-result">
        <Button
          variant="secondary"
          onClick={() => dispatch(sortA_Z())}
          id="sort-alphabetically"
        >
          Sort A-Z
        </Button>{" "}
        <Button
          variant="secondary"
          onClick={() => dispatch(sortZ_A())}
          id="sort-alphabetically-desc"
        >
          Sort Z-A
        </Button>{" "}
        <Button
          variant="secondary"
          onClick={() => dispatch(sortDATE_ASC())}
          id="sort-by-date"
        >
          Sort By Date(ASC)
        </Button>{" "}
        <Button
          variant="secondary"
          onClick={() => dispatch(sortDATE_DESC())}
          id="sort-by-date-desc"
        >
          Sort By Date(DESC)
        </Button>{" "}
        <Button
          variant="secondary"
          onClick={() => dispatch(sortQUALITY_ASC())}
          id="sort-by-quality"
        >
          Sort By Quality(ASC)
        </Button>{" "}
        <Button
          variant="secondary"
          onClick={() => dispatch(sortQUALITY_DESC())}
          id="sort-by-quality-desc"
        >
          Sort By Quality(DESC)
        </Button>{" "}
        <Button
          variant="secondary"
          onClick={() => dispatch(filter_Data())}
          id="filter-explicit"
        >
          Explicit Filter
        </Button>{" "}
        <br />
        <br />
        {results.map((e) => (
          <Col md={9} className="mb-3">
            <Card className="result" style={{}}>
              <Card.Body>
                <p>{e.url}</p>
                <Card.Title>
                  <Link to={`/page/${e.id}`}>{e.title}</Link> | {e.author}
                </Card.Title>
                <Card.Text>{e.description}</Card.Text>
                <p>
                  <b>Creation Date: {Date(e.creation_date)}</b>
                </p>
                <span>
                  <b>
                    Explicit: {e.explicit ? "Yes" : "No"} || Quality %:{" "}
                    {e.quality}
                  </b>
                </span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Container>
    </div>
  );
};
