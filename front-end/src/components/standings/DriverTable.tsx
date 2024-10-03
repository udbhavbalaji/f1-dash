import { DriverStandingItem } from "@app-types/front-end/display";
import Table from "@components/Table";
import { useErgastData } from "@services/ErgastDataProvider";

const DriverTable = () => {
  const { driverStandings } = useErgastData();

  if (driverStandings.length === 0) {
    console.error("length of array is 0");
    return <div>Error: Length of Array is 0</div>;
  }

  const columns = Object.keys(driverStandings[0]) as Array<
    keyof DriverStandingItem
  >;

  return <Table data={driverStandings} columns={columns} />;
};

export default DriverTable;
