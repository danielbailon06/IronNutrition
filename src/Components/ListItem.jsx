import { Link } from "react-router-dom";

function ListItem(props) {
  const item = props.item;

  return (
    <div className="product-row">
      <Link to={`/items/${item.id}`} className="product-link">
        <h3 className="product-name">{item.name}</h3>
        <p className="product-brand">{item.brand}</p>
        <p className="product-price">{item.price} €</p>
        <p className="product-stock">
          {item.stock > 0 ? `Stock: ${item.stock}` : "Out of stock"}
        </p>
      </Link>

      <button
        className="product-btn delete-btn"
        onClick={() => props.onDelete(item.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ListItem;