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

  async function filterByPowerstats(value) {
    const separator = value.split("-");
    const type = separator[0].toString();
    const power = separator[1].toString();

    let result = heros;
    const greaterPower =
      heros &&
      heros.sort(
        (a, b) => b.powerstats[`${power}`] - a.powerstats[`${power}`]
      )[0];
    const lessPower =
      heros &&
      heros.sort(
        (a, b) => a.powerstats[`${power}`] - b.powerstats[`${power}`]
      )[0];

    if (type === "greater") {
      result = greaterPower;
    } else {
      result = lessPower;
    }

    await setHeros([result]);
  }

  async function filterByName(value) {
    const herosFiltered = heros && heros.filter((hero) => hero.name === value);
    await setHeros(herosFiltered);
  }

  return (
    <div className="App">
      <Form searchHeros={searchHeros} />
      {heros && (
        <>
          <Filter
            heros={heros}
            filterByPowerstats={filterByPowerstats}
            filterByName={filterByName}
          />
          <Hero heros={heros} />
        </>
      )}
    </div>
  );
}

export default App;
