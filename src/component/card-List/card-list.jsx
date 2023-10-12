import React from "react";
import "./card-list.css";
import { Card } from "../card/card";

export const CardList = (props) => {
  return (
    //this card-list is only responsible for rendering the monsters
    <div className="card-list">
      {props.monsters.map((monster) => (
        //this card component will handle every single card of the page
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
