import React from "react";
import "./Filter.css";

function Filter(props) {
  const powerstats = [
    {
      label: "Greater combat",
      type: "greater-combat",
    },
    {
      label: "Less combat",
      type: "less-combat",
    },
    {
      label: "Greater durability",
      type: "greater-durability",
    },
    {
      label: "Less durability",
      type: "less-durability",
    },
    {
      label: "Greater intelligence",
      type: "greater-intelligence",
    },
    {
      label: "Less intelligence",
      type: "less-intelligence",
    },
    {
      label: "Greater power",
      type: "greater-power",
    },
    {
      label: "Less power",
      type: "less-power",
    },
    {
      label: "Greater speed",
      type: "greater-speed",
    },
    {
      label: "Less speed",
      type: "less-speed",
    },
    {
      label: "Greater strength",
      type: "greater-strength",
    },
    {
      label: "Less strength",
      type: "less-strength",
    },
  ];

  return (
    <>
      <div className="filter-by-name">
        <h2>Filter by name</h2>
        <div className="filter">
          <select onChange={(event) => props.filterByName(event.target.value)}>
            {props.heros &&
              props.heros.map((hero) => (
                <option key={hero.id} value={hero.name}>
                  {hero.name}
                </option>
              ))}
          </select>
        </div>
        <h2>Filter by powerstat</h2>
        <div className="filter">
          <select
            onChange={(event) => props.filterByPowerstats(event.target.value)}
          >
            {powerstats.map((powerstat) => (
              <option key={powerstat.label} value={powerstat.type}>
                {powerstat.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Filter;
