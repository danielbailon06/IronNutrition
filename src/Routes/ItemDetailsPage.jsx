import { useParams } from "react-router-dom";
import EditItem from "../Components/EditItem";
import "./ItemDetailsPage.css";

function ItemDetailsPage(props) {
  const { itemId } = useParams();

  const item = props.supplementsList.find(
    (el) => el.id === Number(itemId)
  );

  if (!item) return <h1>Product not found</h1>;

  return (
    <div className="item-details">
      <h1>{item.name}</h1>

      <div className="info">
        <div>
          <span>Brand</span>
          <strong>{item.brand}</strong>
        </div>

        <div>
          <span>Type</span>
          <strong>{item.type}</strong>
        </div>

        <div>
          <span>Flavor</span>
          <strong>{item.flavor}</strong>
        </div>

        <div>
          <span>Weight</span>
          <strong>{item.weight}</strong>
        </div>
      </div>

      <div className="bottom-info">
        <p className={`stock ${item.stock > 0 ? "in-stock" : "out-stock"}`}>
          {item.stock > 0 ? `Stock: ${item.stock}` : "Out of stock"}
        </p>

        <p className="price">{item.price} €</p>
      </div>

      <button className="details-edit-btn" onClick={() => props.onEdit(item)}>
        Edit
      </button>

      {props.itemToEdit && props.itemToEdit.id === item.id && (
        <EditItem item={props.itemToEdit} onUpdate={props.onUpdate} />
      )}
    </div>
  );
}

export default ItemDetailsPage;