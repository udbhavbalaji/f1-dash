import { navbarItems, navbarItem } from "@data/homepage";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='py-8 z-20 top-0 left-0 bg-black text-red-600 font-titleFont'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <div className='flex items-center h-6 sm:h-9 mr-3 self-center text-2xl font-semibold font-wideFont'>
          {/* <a href='' className='hover:text-white'> */}
          TR.
          {/* </a> */}
        </div>
        <div>
          <h1 className='text-5xl font-bold text-stone-200'>
            <Link to='/' className='hover:text-white'>
              TrackRev
            </Link>
          </h1>
        </div>
        <div>
          <ul className='inline-flex text-md font-medium'>
            {navbarItems.map((item, index) => (
              <li key={index} className='mx-4 my-2'>
                {item.linkType === "route" ? (
                  <Link to={item.link} className='hover:text-white'>
                    {item.title}
                  </Link>
                ) : (
                  <a href={item.link} className='hover:text-white'>
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
