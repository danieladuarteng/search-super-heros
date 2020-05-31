import React, { useState } from "react";
import Form from "../Form";
import Header from "../Header";
import Field from "../Field";
import ButtonCustom from "../ButtonCustom";
import "./Search.css";

function Search(props) {
  const [search, setSearch] = useState("");

  return (
    <Form
      autoComplete="off"
      noValidate
      onSubmit={(event) => {
        console.log("bo");
        event.preventDefault();
        props.searchHeros(search);
        setSearch("");
      }}
    >
      <Header title="Know more about your favorite hero or heroine" />

      <fieldset>
        <Field
          id="search"
          label="Search your hero favorite"
          type="search"
          name="search"
          variant="outlined"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          value={search}
          required
        />

        <ButtonCustom type="submit" variant="contained" color="secondary">
          Search
        </ButtonCustom>
      </fieldset>
    </Form>
  );
}

export default Search;
