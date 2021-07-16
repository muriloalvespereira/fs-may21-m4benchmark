import { Row, Col } from "react-bootstrap";
import SingleCard from "./SingleCard";
import { useState } from "react";
import { useEffect } from "react";

const Section = (props) => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState(props.genres);

  useEffect(() => {
    setCategory(props.genres);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.genres > 2]);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + category
      );
      let data = await response.json();
      setMovies(data.data);
    } catch (err) {
      console.log("cai no catch", err);
    }
  };

  return (
    <>
      <Row style={{ display: "flex" }} className="mb-3 pl-3">
        {movies
          .map((movie) => (
            <Col key={movie.id} className="pr-0">
              <SingleCard
                imgPoster={movie.album.cover_medium}
                cardId={movie.id}
              />
            </Col>
          ))
          .slice(0, 6)}
      </Row>
    </>
  );
};

export default Section;
