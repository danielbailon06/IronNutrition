import supplements from "../data/supplements.json";
import "./SupplementsList.css"
import { useState } from 'react';
import List from "./List";

function SupplementsList() {
  
  const [supplementsList, setSupplementsList] = useState(supplements);
  const deleteItem = (id) => {
    const newItemList = supplementsList.filter((item) => item.id !== id);
    setSupplementsList(newItemList);
  }

  return (
    <div className='SupplementsList'>
      <List items={supplementsList} onDelete={deleteItem} />
    </div>
  );
}

export default SupplementsList;