import React, { useState } from "react";
import { actionGetHeros } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import Search from "./components/Search";

import Filter from "./components/Filter";
import "./App.css";

function App() {
  const { heros } = useSelector((state) => state.search);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  async function searchHeros(search) {
    // setLoading(true);
    const response = await actionGetHeros(search);
    console.log(response);
    dispatch(response);
    // setLoading(false);
  }

  return (
    <div className="App">
      <Search searchHeros={searchHeros} />
      {heros && heros.length !== 0 && (
        <>
          <Filter />
        </>
      )}
    </div>
  );
}

export default App;
