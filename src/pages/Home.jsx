import React from "react";
import Main from "../components/Main";
import Row from "../components/row/Row";
import requests from "../requests/Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="1" title="UP COMING" fetchURL={requests.requestUpcoming} />
      <Row rowId="2" title="TOP RATED" fetchURL={requests.requestTopRated} />
      <Row rowId="3" title="TRENDING" fetchURL={requests.requestTrending} />
      <Row rowId="4" title="POPULAR" fetchURL={requests.requestPopular} />
      <Row
        rowId="5"
        title="IN THEATRES"
        fetchURL={requests.requestNowPlaying}
      />
    </>
  );
};

export default Home;
