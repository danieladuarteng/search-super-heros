import React from "react";
import "./Hero.css";

function Hero(props) {
  const powerstats = [
    {
      label: "Combat",
      color: "red",
      value: "combat",
    },
    {
      label: "Durability",
      color: "orangered",
      value: "durability",
    },
    {
      label: "Intelligence",
      color: "orange",
      value: "intelligence",
    },
    {
      label: "Power",
      color: "green",
      value: "power",
    },
    {
      label: "Speed",
      color: "blue",
      value: "speed",
    },
    {
      label: "Strength",
      color: "blueviolet",
      value: "strength",
    },
  ];

  return (
    <>
      <table>
        <tbody>
          <tr>
            {props.heros &&
              props.heros.map((hero) => (
                <td key={hero.id}>
                  <img src={hero.image.url} alt="About hero" />
                  <p>
                    <strong>{hero.name}</strong>
                  </p>
                  <legend>Powerstats: </legend>

                  {powerstats.map((powerstat) => (
                    <div key={powerstat.label} className="powestats">
                      <label>{powerstat.label}</label>
                      <div className="progress">
                        <div
                          className={`progress-${powerstat.color}`}
                          style={{
                            width: `${
                              hero.powerstats[`${powerstat.value}`] === "null"
                                ? 0
                                : hero.powerstats[`${powerstat.value}`]
                            }%`,
                          }}
                        >
                          {hero.powerstats[`${powerstat.value}`] === "null"
                            ? 0
                            : hero.powerstats[`${powerstat.value}`]}
                        </div>
                      </div>
                    </div>
                  ))}

                  <button>See more details</button>
                </td>
              ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Hero;
