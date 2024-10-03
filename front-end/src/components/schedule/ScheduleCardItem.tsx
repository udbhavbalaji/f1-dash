import { ScheduleCardItemType } from "@app-types/front-end/display";

interface ScheduleCardItemProps {
  // key: number;
  index: number;
  cardData: ScheduleCardItemType;
}

const ScheduleCardItem = ({ index, cardData }: ScheduleCardItemProps) => {
  return (
    <li key={index} className=''>
      Items
    </li>
  );
};

export default ScheduleCardItem;
