import React, { useState } from "react";
import PropTypes from "prop-types";
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

        <ButtonCustom
          disabled={search === ""}
          type="submit"
          variant="contained"
          color="secondary"
        >
          Search
        </ButtonCustom>
      </fieldset>
    </Form>
  );
}

Search.propTypes = {
  searchHeros: PropTypes.func.isRequired,
};

export default Search;
