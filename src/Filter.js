import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Filter.css";

function Filter(props) {
  const { heros } = useSelector((state) => state.search);

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
