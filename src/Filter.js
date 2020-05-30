import React from "react";
import "./Filter.css";

function Filter(props) {
  console.log(props);

  const powerstats = [
    {
      value: "combat",
    },
    {
      value: "durability",
    },
    {
      value: "intelligence",
    },
    {
      value: "power",
    },
    {
      value: "speed",
    },
    {
      value: "strength",
    },
  ];

  return (
    <div className="filter-by-name">
      <h2>SORT BY:</h2>
      <div className="filter">
        <select
        //onChange={(e) => this.onSortBy(e)}
        >
          <option value="name" disabled>
            Name
          </option>
          {props.heros &&
            props.heros.map((hero) => (
              <option key={hero.id} value={hero.name}>
                {hero.name}
              </option>
            ))}
        </select>

        <select
        //onChange={(e) => this.onSortBy(e)}
        >
          <option value="powerstats" disabled>
            Powerstats
          </option>
          {powerstats.map((powerstat) => (
            <option key={powerstat.value} value={powerstat.value}>
              {powerstat.value}
            </option>
          ))}
          ;
        </select>
      </div>
    </div>
  );
}

export default Filter;
