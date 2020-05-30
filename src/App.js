import React, { useState } from "react";
import { getHeros } from "./service";
import Form from "./Form";
import Hero from "./Hero";
import Filter from "./Filter";
import "./App.css";

function App() {
  const [heros, setHeros] = useState();

  async function searchHeros(search) {
    const response = await getHeros(search);
    setHeros(response);
  }

  function filterByPowerstats(power) {
    return (
      heros &&
      Object.keys(heros).sort(
        (a, b) =>
          heros[b].powerstats[`${power}`] - heros[a].powerstats[`${power}`]
      )
    );
  }

  console.log(filterByPowerstats("combat"));
  return (
    <div className="App">
      <Form searchHeros={searchHeros} />
      {heros && (
        <>
          <Filter heros={heros} />
          <Hero heros={heros} />
        </>
      )}
    </div>
  );
}

export default App;
