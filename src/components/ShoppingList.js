import React, { useState } from "react";
import Item from "./Item";
import RenderFilter from "./Filter";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function setFilter(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <RenderFilter 
        onCategoryChange = {setFilter}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
