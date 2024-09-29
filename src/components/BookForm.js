import React, { useContext } from 'react';
//components
import AdultsDropdown from '../components/AdultsDropdown.js';
import KidsDropdown from '../components/KidsDropdown.js';
import CheckIn from '../components/CheckIn.js';
import CheckOut from '../components/CheckOut.js';
import { RoomContext } from '../context/RoomContext.js';


const BookForm = () => {
  const {handleClick} = useContext(RoomContext);
  return (
      <form className="h-[300px] w-full lg:h-[70px] rounded-lg">
        <div className="flex flex-col w-full h-full lg:flex-row ">
          <div className="flex-1 border-r rounded-lg">
            <CheckIn />
          </div>
          <div className="flex-1 border-r">
            <CheckOut />
          </div>
          <div className="flex-1 border-r">
            <AdultsDropdown />
          </div>
          <div className="flex-1 border-r rounded-lg">
            <KidsDropdown />
          </div>
          {/* btn */}
          <button
            onClick={(e)=>handleClick(e)}
            type="submit"
            className="btn btn-primary"
          >
            Check Now
          </button>
        </div>
      </form>
  );
};

export default BookForm;
