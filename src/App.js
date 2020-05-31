import React, { useState } from "react";
import { actionGetHeros } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import Search from "./components/Search";
import Hero from "./Hero";
import Filter from "./Filter";
import "./App.css";

function App() {
  const { heros } = useSelector((state) => state.search);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  function searchHeros(search) {
    console.log(search);
    setLoading(true);
    const response = actionGetHeros(search);
    console.log(response);
    dispatch(response);
    setLoading(false);
  }

  // async function filterByName(value) {
  //   const herosFiltered = heros && heros.filter((hero) => hero.name === value);
  //   await setHeros(herosFiltered);
  // }

  console.log(heros);
  return (
    <div className="App">
      <Search loading={loading} searchHeros={searchHeros} />
      {heros && heros.length !== 0 && (
        <>
          <Filter
          // heros={heros}
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
