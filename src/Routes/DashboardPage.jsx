import SupplementsList from "../Components/SupplementsList";

function DashboardPage(props) {
  return (
    <SupplementsList
      supplementsList={props.supplementsList}
      onDelete={props.onDelete}
    />
  );
}

export default DashboardPage;