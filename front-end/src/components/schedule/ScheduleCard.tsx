import { ScheduleCardItemType } from "@app-types/front-end/display";
import ScheduleCardItem from "./ScheduleCardItem";

interface ScheduleCardProps {
  data: ScheduleCardItemType[];
}

const ScheduleCard = ({ data }: ScheduleCardProps) => {
  return (
    <div className='container flex flex-wrap items-center justify-center mx-auto mt-5 bg-yellow-300 text-red-400 w-3/4'>
      <div className='bg-red-300 text-white flex flex-col md:flex-row justify-start my-20 mb-10 w-11/12 rounded-md'>
        <ol className='flex flex-wrap'>
          {data.map((item, index) => (
            <ScheduleCardItem key={index} index={index} cardData={item} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ScheduleCard;
