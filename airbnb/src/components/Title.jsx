import React from "react";

const Title = ({ city }) => {
  return (
    <div className="mt-24 container mx-auto px-4 md:px-8 font-[inter]">
      <h1 className="text-2xl md:text-4xl font-semibold ">
        Popular homes in {city}
      </h1>
    </div>
  );
};

export default Title;
