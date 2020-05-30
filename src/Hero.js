import React from "react";
import "./Hero.css";

function Hero(props) {
  console.log("props", props);

  return (
    <>
      <table>
        <tr>
          {props.heros &&
            props.heros.map((hero) => (
              <td key={hero.id}>
                <img src={hero.image.url} alt="About hero" />
                <p>{hero.name}</p>
                <button>See more details</button>
              </td>
            ))}
        </tr>
      </table>
    </>
  );
}

export default Hero;
