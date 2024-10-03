export interface ContentProps {
  title: string;
  children: React.ReactNode;
}

const ContentSection: React.FC<ContentProps> = ({ title, children }) => {
  return (
    <div className='flex-grow'>
      <div className='container flex flex-wrap items-center justify-center mx-auto relative my-15 w-7/12 rounded-lg'>
        <h2 className='text-4xl font-semibold mt-10 mb-4 w-full mx-auto text-center font-titleFont'>
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default ContentSection;
