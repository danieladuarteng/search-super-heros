import React, { useState } from "react";
import { getHeros } from "./service";
import Form from "./Form";
import Hero from "./Hero";

function App() {
  const [heros, setHeros] = useState();

  async function searchHeros(search, searchType) {
    const response = await getHeros(search);
    setHeros(response);
  }

  return (
    <div className="App">
      <Form searchHeros={searchHeros} />
      {heros && <Hero heros={heros} />}
    </div>
  );
}

export default App;
