import "./SupplementsList.css";
import List from "./List";
import EditItem from "./EditItem.jsx";

function SupplementsList(props) {
  return (
    <div className='SupplementsList'>
      {props.itemToEdit && (
        <EditItem item={props.itemToEdit} onUpdate={props.onUpdate} />
      )}

      <List
        items={props.supplementsList}
        onDelete={props.onDelete}
        onEdit={props.onEdit}
      />
    </div>
  );
}

export default SupplementsList;