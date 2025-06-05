"use client";

import { useState, useEffect } from "react";
import classes from "./SeasonButton.module.css";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";


const SeasonButton = ({ season, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    axios
      .get("https://appy.trycatchtech.com/v3/puneri_paltan/season_list")
      .then((response) => {
        setSeasons(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

 
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  const handleSelect = (newSeason) => {
    onSelect(newSeason);
    setOpen(false);
  };

  return (
    <div className={classes.dropdown}>
      
      <button className={classes.btn}>
        {season}
        <span className={classes.arrow} onClick={toggleDropdown}>
          <FaChevronDown />
        </span>
      </button>

      {open && (
        <ul className={classes.dropdownMenu}>
          {(
            seasons.map((s,i) => (
              <li key={s.id} onClick={() => handleSelect(s.cat_name)}>
                {s.cat_name}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default SeasonButton;
