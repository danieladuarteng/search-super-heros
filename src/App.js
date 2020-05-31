import React, { useState } from "react";
import { actionGetHeros } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import Form from "./Form";
import Hero from "./Hero";
import Filter from "./Filter";
import "./App.css";

function App() {
  const { heros } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  function searchHeros(search) {
    const response = actionGetHeros(search);
    dispatch(response);
  }

  // async function filterByPowerstats(value) {
  //   const separator = value.split("-");
  //   const type = separator[0].toString();
  //   const power = separator[1].toString();

  //   let result = heros;
  //   const greaterPower =
  //     heros &&
  //     heros.sort(
  //       (a, b) => b.powerstats[`${power}`] - a.powerstats[`${power}`]
  //     )[0];
  //   const lessPower =
  //     heros &&
  //     heros.sort(
  //       (a, b) => a.powerstats[`${power}`] - b.powerstats[`${power}`]
  //     )[0];

  //   if (type === "greater") {
  //     result = greaterPower;
  //   } else {
  //     result = lessPower;
  //   }

  //   await setHeros([result]);
  // }

  // async function filterByName(value) {
  //   const herosFiltered = heros && heros.filter((hero) => hero.name === value);
  //   await setHeros(herosFiltered);
  // }

  console.log(heros && heros.length);
  return (
    <div className="App">
      <Form searchHeros={searchHeros} />
      {heros && heros.length !== 0 && (
        <>
          <Filter
            heros={heros}
            //filterByPowerstats={filterByPowerstats}
            //filterByName={filterByName}
          />
          <Hero heros={heros} />
        </>
      )}
    </div>
  );
}

export default App;
