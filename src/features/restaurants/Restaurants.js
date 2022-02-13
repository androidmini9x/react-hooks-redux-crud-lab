import React from "react";
import { useDispatch } from "react-redux";
import Restaurant from "./Restaurant";

function Restaurants({restaurants}) {

  return <ul>
    {restaurants.map(res => {
      return <Restaurant key={res.id} restaurant={res} />
    })}
  </ul>;
}

export default Restaurants;
