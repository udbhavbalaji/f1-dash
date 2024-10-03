import ContentSection from "@components/ContentSection";
import FooterNote from "@components/FooterNote";
import Navbar from "@components/Navbar";
import ConstructorTable from "@components/standings/ConstructorTable";
import DriverTable from "@components/standings/DriverTable";
import { requestTypes } from "@app-types/front-end/display";

interface StandingsPageProps {
  reqType: requestTypes;
}

const StandingsPage = ({ reqType }: StandingsPageProps) => {
  if (
    reqType !== requestTypes.ConstructorStandings &&
    reqType !== requestTypes.DriverStandings
  ) {
    throw new Error(
      `Request Being Made to Wrong component. Received reqType:${reqType} for component StandingsPage`
    );
  }

  const title =
    reqType === requestTypes.ConstructorStandings
      ? "Constructor's Championship"
      : "Driver's Championship";

  return (
    <div className='bg-gray-900 text-stone-100 w-full font-regularFont'>
      <Navbar />
      <ContentSection title={title}>
        {reqType === requestTypes.ConstructorStandings ? (
          <ConstructorTable />
        ) : (
          <DriverTable />
        )}
      </ContentSection>
      <FooterNote className='text-xs mt-6' />
    </div>
  );
};

export default StandingsPage;
