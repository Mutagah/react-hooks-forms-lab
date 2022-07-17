import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items,myNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mySearchParameter, settingSearchParameter] = useState("");
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handlingSearchChange(event){
    settingSearchParameter(event.target.value)
  }
    console.log(mySearchParameter)
  const itemsToDisplay = items
  .filter((item) => selectedCategory === "All" || selectedCategory === item.category)

    .filter((item) => item.name.toLowerCase().includes(mySearchParameter.toLowerCase()));
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={myNewItem} />
      <Filter onSearchChange={handlingSearchChange} search={mySearchParameter} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
