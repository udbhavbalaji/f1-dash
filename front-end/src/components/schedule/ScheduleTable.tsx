import {
  ScheduleCardItemType,
  ScheduleItem,
} from "@app-types/front-end/display";
import Table from "@components/Table";
import { useErgastData } from "@services/ErgastDataProvider";
import { getScheduleCard } from "@services/format";
import ScheduleCard from "./ScheduleCard";

const ScheduleTable = () => {
  const { raceSchedule } = useErgastData();

  if (raceSchedule.length === 0) {
    console.error("errorrrrrrr");
    return <div>Error: Length of Array is 0</div>;
  }

  const cardData = raceSchedule.map((item: ScheduleItem) =>
    getScheduleCard(item)
  );

  const columns = Object.keys(cardData[0]) as Array<keyof ScheduleCardItemType>;

  return (
    <>
      <Table data={cardData} columns={columns} />
      {/* todo: component needs to be completed completely */}
      {/* <ScheduleCard data={cardData} /> */}
    </>
  );
};

export default ScheduleTable;
