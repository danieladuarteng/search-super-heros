import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import "./Hero.css";

function Hero(props) {
  const [open, setOpen] = useState(false);
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

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  console.log(props.heros);
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

                  <button onClick={handleOpen}>See more details</button>
                  <div className="root" ref={null}>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      className="modal"
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                    >
                      <div className="paper">
                        <h2 id="server-modal-title">{hero.name}</h2>
                        <div id="server-modal-description">
                          <img src={hero.image.url} alt="About hero" />
                          <table>
                            <tbody>
                              <tr>
                                <th>Appearance</th>
                                <th>Biography</th>
                                <th>Powerstats</th>
                                <th>Work</th>
                              </tr>
                              <tr>
                                <td>
                                  <p>
                                    Eye color: {hero.appearance["eye-color"]}
                                  </p>
                                  <p>Gender: {hero.appearance.gender}</p>
                                  <p>
                                    Hair color: {hero.appearance["hair-color"]}
                                  </p>
                                  <p>Height: {hero.appearance.height[0]}</p>
                                  <p>Race: {hero.appearance.race}</p>
                                  <p>Weight: {hero.appearance.weight[0]}</p>
                                </td>
                                <td>
                                  <p>
                                    Aliases: {hero.biography.aliases.toString()}
                                  </p>
                                  <p>Alignment: {hero.biography.alignment}</p>
                                  <p>
                                    Alter egos: {hero.biography["alter-egos"]}
                                  </p>
                                  <p>
                                    First appearance:{" "}
                                    {hero.biography["first-appearance"]}
                                  </p>
                                  <p>
                                    Full name: {hero.biography["full-name"]}
                                  </p>
                                  <p>
                                    Place of birth:{" "}
                                    {hero.biography["place-of-birth"]}
                                  </p>
                                  <p>Publisher: {hero.biography.publisher}</p>
                                </td>
                                <td>
                                  <p>Combat: {hero.powerstats.combat}</p>
                                  <p>
                                    Durability: {hero.powerstats.durability}
                                  </p>
                                  <p>
                                    Intelligence: {hero.powerstats.intelligence}
                                  </p>
                                  <p>Power: {hero.powerstats.power}</p>
                                  <p>Speed: {hero.powerstats.speed}</p>
                                  <p>Strength: {hero.powerstats.strength}</p>
                                </td>
                                <td>
                                  <p>Base: {hero.work.base}</p>
                                  <p>Occupation: {hero.work.occupation}</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Modal>
                  </div>
                </td>
              ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Hero;
