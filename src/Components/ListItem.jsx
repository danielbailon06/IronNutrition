function ListItem(props) {
  const item = props.item;

  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.brand}</p>
      <p>{item.price} €</p>
      {item.stock > 0 ? `Stock: ${item.stock}` : "Out of stock"}
      <button onClick={() => props.onDelete(item.id)}>Delete</button>
    </div>
  );
}

export default ListItem