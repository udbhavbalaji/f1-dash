import { ScheduleItem } from "@app-types/front-end/display";
import ContentSection from "@components/ContentSection";
import FooterNote from "@components/FooterNote";
import Navbar from "@components/Navbar";

const RacePage = (data: ScheduleItem) => {
  return (
    <div className='bg-gray-900 text-stone-100 w-full font-regularFont'>
      <Navbar />
      <ContentSection title=''>
        <></>
      </ContentSection>
      <FooterNote className='text-xs mt-6' />
    </div>
  );
};

export default RacePage;
