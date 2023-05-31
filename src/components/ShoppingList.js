import React, {useState} from "react";
import Item from "./Item.js"
import Filter from "./Filter.js"

function ShoppingList({ items }) {
 
  const [filteredFoodItems, filterFoodItems] = useState(items);

  function handleCategoryChange(event) {

    let selectedCategory = event.target.value;
    filterFoodItems(items.filter((item) => {
   
      if (selectedCategory === "All") {
        return true;
      } else {
        return item.category === selectedCategory;
      }
    }))
  
  }

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange = { handleCategoryChange }/>
      <ul className="Items">
        {filteredFoodItems.map((item) => (
          <Item key = {item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
