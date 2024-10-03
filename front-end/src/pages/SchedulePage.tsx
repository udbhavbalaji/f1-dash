import { requestTypes } from "@app-types/front-end/display";
import ContentSection from "@components/ContentSection";
import FooterNote from "@components/FooterNote";
import Navbar from "@components/Navbar";
import ScheduleCard from "@components/schedule/ScheduleCard";
import ScheduleTable from "@components/schedule/ScheduleTable";

interface SchedulePageProps {
  reqType: requestTypes;
}

const SchedulePage = ({ reqType }: SchedulePageProps) => {
  if (reqType !== requestTypes.Schedule) {
    throw new Error("Request being made to wrong component");
  }
  const title = "Race Schedule";

  // todo: HAVE TO CHANGE LOOK OF THE TABLE: MAKE IT LIKE A LIST OF CLICKABLE CARDS LEADING TO MORE DETAILED SCHEDULE & STUFF
  return (
    <div className='bg-gray-900 text-stone-100 w-full font-regularFont'>
      <Navbar />
      <ContentSection title={title}>
        <ScheduleTable />
      </ContentSection>
      <FooterNote className='text-xs mt-6' />
    </div>
  );
};

export default SchedulePage;
