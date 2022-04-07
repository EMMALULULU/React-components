import "./App.css";
import "antd/dist/antd.css";
import { Input, Space, Row, Col, Layout } from "antd";
import { useEffect, useState } from "react";
import MovieList from "./Components/MovieList";
const { Search } = Input;
const { Header, Content } = Layout;

function App() {
  const [moviesData, setMoviesData] = useState([]);

  const onSearch = (input) => {
    getMovie(input);
  };

  const formatMovieData = (dataArr) => {
    const formattedDataArr = [];

    for (let movie of dataArr) {
      const movieData = {};
      movieData.title = movie.title;
      movieData.description = movie.overview;
      movieData.posterPath = movie.backdrop_path;
      formattedDataArr.push(movieData);
    }
    return formattedDataArr;
  };

  async function getMovie(input) {
    const query = `https://api.themoviedb.org/3/search/movie?api_key=87f324c2448ce94101a98d188ffbebec&language=en-US&page=1&include_adult=false&query=${input}`;
    const response = await fetch(query);
    // fetch .then
    const data = await response.json();
    console.log(data.results);
    // json.then
    const formattedData = formatMovieData(data.results);
    setMoviesData(formattedData);
    console.log(moviesData);
  }
  return (
    <Layout>
      <Header>Header</Header>
      <Content
        style={{ minHeight: "180px", padding: "60px", background: "#fff" }}
      >
        <Row>
          <Col span={12} offset={8}>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{ width: 450, fontWeight: "bold" }}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={8}>
            <MovieList moviesData={moviesData} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
