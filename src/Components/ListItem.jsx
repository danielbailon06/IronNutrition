
function ListItem(props) {
  const item = props.item;

  return (
    <div className="product-row">
   
      <h3 className="product-name">{item.name}</h3>
      <p className="product-brand">{item.brand}</p>
      <p className="product-price">{item.price} €</p>
      <p className="product-stock">
        {item.stock > 0 ? `Stock: ${item.stock}` : "Out of stock"}
      </p>
     
      <button
        className="product-btn delete-btn"
        onClick={() => props.onDelete(item.id)}
      >
        Delete
      </button>
      <button
        className="product-btn edit-btn"
        onClick={() => props.onEdit(item)}
      >
        Edit
      </button>
    </div>
  );
}

export default ListItem;