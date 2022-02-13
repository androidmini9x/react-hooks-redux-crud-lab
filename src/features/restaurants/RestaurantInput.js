import React, {useState} from "react";

function RestaurantInput({onResSubmit}) {

  const [name, setName] = useState("");


  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onResSubmit(name);
    setName("");
  }

  return <div>
    <form onSubmit={handleSubmit} >
      <label>Name
        <input type="text" name="name" onChange={handleChange} value={name} />
      </label>
      <input type="submit" value="Add Restaurant" />
    </form>
  </div>;
}

export default RestaurantInput;
