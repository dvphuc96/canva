import React from "react";

export const UploadImage = () => {
  return (
    <div>
      <div className="w-full h-[40px] flex justify-center items-center bg-purple-500 rounded-md text-white mb-3">
        <label htmlFor="uploadImage" className="text-center cursor-pointer">
          Upload Image
        </label>
        <input type="file" id="uploadImage" className="hidden" />
      </div>
    </div>
  );
};
