import supplements from "../data/supplements.json";
import "./SupplementsList.css"
import { useState } from 'react';
import List from "./List";
import EditItem from "./EditItem.jsx"

function SupplementsList() {

  const [supplementsList, setSupplementsList] = useState(supplements);
  const [itemToEdit, setItemToEdit] = useState(null);


  const deleteItem = (id) => {
    const newItemList = supplementsList.filter((item) => item.id !== id);
    setSupplementsList(newItemList);
  }

  const addItem = (newItem) => {
    setSupplementsList([newItem, ...supplementsList]);
  };

  const updateItem = (updatedItem) => {
    const updatedList = supplementsList.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );

    setSupplementsList(updatedList);
    setItemToEdit(null);
  };

  return (
    <div className='SupplementsList'>
      
      {itemToEdit && (
        <EditItem item={itemToEdit} onUpdate={updateItem} />
      )}
      <List items={supplementsList} onDelete={deleteItem} onEdit={setItemToEdit} />
      
    </div>
  );
}

export default SupplementsList;
