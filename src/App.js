import React, { useState } from 'react';
import {getHeros} from './service'
import Form from './Form'

function App() {
  const [heros, setHeros] = useState();

  async function searchHeros(queryParams) {
    const { response } = await getHeros(queryParams);
    setHeros(response);
  }

  return (
    <div className="App">
      <Form 
        searchHeros={searchHeros}
      />
    </div>
  );
}

export default App;
