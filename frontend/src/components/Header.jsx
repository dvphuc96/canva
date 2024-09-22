// import { useOpenModal } from "hooks/useOpenModal";

export const Header = ({ openModal, handleChangeType, isIndex }) => {
  return (
    <header className="bg-[#212223] shadow-md">
      <div className="w-[93%] m-auto py-3">
        <div className="flex justify-between items-center">
          <div className="w-[80px] h-[48px]">
            <img
              className="w-full h-full"
              src="/logo.svg"
              alt="Logo"
            />
          </div>
          {!isIndex && <span className='text-xl text-gray-400'>Easy Canva</span>}
          {isIndex ? (
            <div className="flex gap-4">
              <button
                className="py-2 w-[80px] text-center bg-teal-700 text-white transition-all hover:bg-teal-500 rounded-[5px] font-medium"
                onClick={() => {
                  openModal();
                  handleChangeType("signin");
                }}
              >
                SignIn
              </button>
              <button
                className="py-2 w-[80px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium"
                onClick={() => {
                  openModal();
                  handleChangeType("signup");
                }}
              >
                SignUp
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2 text-gray-200">
              <button className="px-3 py-[6px] outline-none bg-[#7482f6] rounded-md">
                Save
              </button>
              <button className="px-3 py-[6px] outline-none bg-[#a855f7] rounded-md">
                Download
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
