import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = props => (
  <div className="card-list">
    {props.kitties.map(kitty => (
      <Card key={kitty.id} kitty={kitty} />
    ))}
  </div>
);
