import { useParams } from "react-router-dom";

function ItemDetailsPage(props) {
  const { itemId } = useParams();

  const item = props.supplementsList.find(
    (el) => el.id === Number(itemId)
  );

  if (!item) return <h1>Product not found</h1>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Brand: {item.brand}</p>
      <p>Type: {item.type}</p>
      <p>Flavor: {item.flavor}</p>
      <p>Price: {item.price} €</p>
      <p>Weight: {item.weight}</p>
      <p>{item.stock > 0 ? `Stock: ${item.stock}` : "Out of stock"}</p>
    </div>
  );
}

export default ItemDetailsPage;