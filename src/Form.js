import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("name");

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        props.searchHeros(search, searchType);
        setSearch("");
        setSearchType("name");
      }}
    >
      <header>
        <h1>Know more about your favorite hero or heroine</h1>
      </header>

      <fieldset>
        <legend>Search your hero favorite</legend>
        <input
          id="search"
          type="text"
          name="search"
          aria-labelledby="label-search"
          aria-describedby="Search your hero favorite"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          value={search}
        />
        <button>Search</button>
      </fieldset>
    </form>
  );
}

export default Form;
