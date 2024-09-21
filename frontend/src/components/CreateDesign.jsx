import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { CreateComponent } from "./CreateComponent";

export const CreateDesign = () => {
  const ref = useRef();
  const { location } = useLocation();

  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <div ref={ref} className="relative w-auto h-auto overflow-auto">
        <CreateComponent />
      </div>
    </div>
  );
};
