import React from "react";
import Michael from "../../assets/icons/Michael.svg";
import Verifyicon from "../../assets/icons/Verified.svg";

const ArtistInfo = () => {
  return (
    <section className="flex items-center poppins-thin px-10 py-10  ">
      <div className="flex items-center m-auto  mt-20   justify-center ">
        <div className="background-image flex justify-between  gap-1">
          <div className="left px-4 flex flex-col justify-center ">
            <div className=" border-cyan-500">
              <img
                src={Verifyicon}
                alt="Icon"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="relative  -top-12 text-start  border-blue-500 ">
              <h2 className="text-[1.5rem] w-[100%] font-bold pb-6">
                Michael Jackson
              </h2>
              <p className="text-sm text-[#F6F6F6]">
                27,852,501 monthly listeners
              </p>
            </div>
          </div>
          <div className="flex justify-center  border-pink-500">
            <img
              src={Michael}
              alt="Michael"
              className="relative bottom-0 w-full max-w-[66vh] object-contain rounded-lg shadow-lg -mt-28"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistInfo;
