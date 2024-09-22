import React from "react";
import { Image } from "./Image";

export const UploadImage = () => {
  return (
    <div>
      <div className="w-full h-[40px] flex justify-center items-center bg-purple-500 rounded-md text-white mb-3">
        <label htmlFor="uploadImage" className="text-center cursor-pointer">
          Upload Image
        </label>
        <input type="file" id="uploadImage" className="hidden" />
      </div>
      <div className="h-[80vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
        <Image />
      </div>
    </div>
  );
};
