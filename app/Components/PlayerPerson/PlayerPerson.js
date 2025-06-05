import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import classes from "./PlayerPerson.module.css";

const PlayerPerson = ({ pim, pname, psurname, ptitle }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 6,
        speed: 200,
        scale: 1,
        glare: false,
        "max-glare": 0,
        perspective: 800,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        gyroscope: false
      });
    }

    return () => {
      if (cardRef.current?.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div className={`mx-auto ${classes.player}`}>
      <div ref={cardRef} className={`${classes.card} `}>
        <img
          src={pim}
          alt={`${pname} ${psurname}`}
          className={classes.pimage}
        />
        <h3 className={`fw-normal ${classes.name}`}>{pname}</h3>
        <h3 className={classes.surname}>{psurname}</h3>
        <h5 className={classes.title}>{ptitle.slice(0, -1)}</h5>
      </div>
    </div>
  );
};

export default PlayerPerson;
