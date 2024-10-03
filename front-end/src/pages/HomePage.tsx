import ContentSection from "@components/ContentSection";
import FooterNote from "@components/FooterNote";
import Navbar from "@components/Navbar";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className='bg-gray-900 text-stone-100 w-full font-regularFont'>
      <Navbar />
      <ContentSection title='Home Page'>
        <></>
      </ContentSection>
      <FooterNote className='text-xs mt-6' />
    </div>
  );
};

export default HomePage;
