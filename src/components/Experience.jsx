import React from "react";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="flex flex-col py-20 justify-center w-[90vw] md:w-[85vw] mx-auto pb-10 h-fit"
    >
      <div className="capitalize text-5xl font-bold w-[90vw] md:w-[80vw] mx-auto pb-10 h-fit">
        Experience
      </div>

      <div className="">
        <div className="min-h-[70vh] w-[20vw] flex flex-col gap-10 px-10 pt-10 ">
            <div className="text-2xl">Hacktoberfest 2024</div>
            <div className="text-2xl">Rentalog.in</div>
            <div className="text-2xl">CampusDocs</div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Experience;
