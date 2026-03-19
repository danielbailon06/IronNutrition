import "./SupplementsList.css";
import List from "./List";
import EditItem from "./EditItem.jsx";
import { useState } from "react";

function SupplementsList(props) {
  const [search, setSearch] = useState("");

  const filteredItems = props.supplementsList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.brand.toLowerCase().includes(search.toLowerCase()) ||
    item.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='SupplementsList'>
      <input
        className="search-bar"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {props.itemToEdit && (
        <EditItem item={props.itemToEdit} onUpdate={props.onUpdate} />
      )}

      <List
        items={filteredItems}
        onDelete={props.onDelete}
        onEdit={props.onEdit}
      />
    </div>
  );
}

export default SupplementsList;