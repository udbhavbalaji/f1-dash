import { ConstructorStandingItem } from "@app-types/front-end/display";
import Table from "@components/Table";
import { useErgastData } from "@services/ErgastDataProvider";

const ConstructorTable = () => {
  const { constructorStandings } = useErgastData();

  if (constructorStandings.length === 0) {
    console.error("length of array is 0");
    return <div>Error: Length of Array is 0</div>;
  }

  const columns = Object.keys(constructorStandings[0]) as Array<
    keyof ConstructorStandingItem
  >;

  return <Table data={constructorStandings} columns={columns} />;
};

export default ConstructorTable;
