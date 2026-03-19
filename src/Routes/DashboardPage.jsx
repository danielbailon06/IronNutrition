import SupplementsList from "../Components/SupplementsList";

function DashboardPage(props) {
  return (
    <SupplementsList
      supplementsList={props.supplementsList}
      onDelete={props.onDelete}
      onEdit={props.onEdit}
      itemToEdit={props.itemToEdit}
      onUpdate={props.onUpdate}
    />
  );
}

export default DashboardPage;