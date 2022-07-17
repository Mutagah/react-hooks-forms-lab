import React,{useState} from "react"
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [myNewInputValue, setNewInputValue] = useState("")
  const [mySelectedValue, setSelectedValue] = useState("Produce")
  function handleSubmit(event){
    event.preventDefault();
    const newItem = {
      id : uuid(),
      name : myNewInputValue,
      category : mySelectedValue,
    }
    onItemFormSubmit(newItem)g
  }
  function handleChange(event){
    setNewInputValue(event.target.value)
  }
  function handleChangedCategory(event){
    setSelectedValue(event.target.value)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChangedCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
