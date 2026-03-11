import ListItem from "./ListItem";

function List(props) {
  return (
    <div>
      {props.items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
}

export default List;