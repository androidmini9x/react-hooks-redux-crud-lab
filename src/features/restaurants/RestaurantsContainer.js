import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantsContainer() {

  const restaurants = useSelector((state) => state.restaurants.entities);
  const dispatch = useDispatch();

  function onResSubmit(name) {
    dispatch(restaurantAdded(name));
  }

  return (
    <div>
      <RestaurantInput onResSubmit={onResSubmit} />
      <Restaurants restaurants={restaurants} />
    </div>
  );
}

export default RestaurantsContainer;
