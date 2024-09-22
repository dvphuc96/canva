import React from "react";

export const TemplateDesign = () => {
  return (
    <>
      {[1, 2, 3, 4].map((design, index) => (
        <div
          key={index}
          className={`group w-full rounded-md overflow-hidden bg-[#fff] cursor-pointer`}
        >
          <img className="w-full h-full" src="/canva.png" alt="" />
        </div>
      ))}
    </>
  );
};
