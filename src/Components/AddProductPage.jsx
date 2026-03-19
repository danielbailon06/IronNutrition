import AddItem from "./AddItem";

function AddProductPage(props) {
  return (
    <div>
      <h1>Add new product</h1>
      <AddItem onAddItem={props.onAddItem} />
    </div>
  );
}

export default AddProductPage;