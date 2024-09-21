import { useState } from "react";
import { Header } from "../components/Header";
import { useOpenModal } from "../hooks/useOpenModal";
import { RxCross2 } from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";

export const Index = () => {
  const { isOpen, openModal, closeModal } = useOpenModal();
  const [type, setType] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeType = (type) => {
    setType(type);
  };
  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <Header openModal={openModal} handleChangeType={handleChangeType} />
      <div
        className={`w-screen ${
          isOpen ? "visible opacity-100" : "invisible opacity-30"
        } transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center`}
      >
        <div className="w-[350px] bg-[#323335] m-auto px-6 py-4 rounded-md relative">
          <div
            className="absolute right-4 top-4 text-xl cursor-pointer text-white"
            onClick={closeModal}
          >
            <RxCross2 />
          </div>
          <h2 className="text-white pb-4 text-center text-xl">
            Login and Sign up in seconds
          </h2>
          {type === "signin" && (
            <form>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button className="px-3 py-2 rounded-md bg-purple-500 w-full outline-none hover:bg-purple-600 text-white">
                  SignIn
                </button>
              </div>
              <div className="flex py-4 justify-between items-center px-3">
                <div className="w-[45%] h-[1px] bg-slate-500"></div>
                <div className="w-[10%] text-center flex pb-1 px-1 text-white">
                  Or
                </div>
                <div className="w-[45%] h-[1px] bg-slate-500"></div>
              </div>
              <div className="pb-4">
                <button className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-red-500 w-full outline-none hover:bg-red-600 text-white">
                  <span>
                    <BiLogoGmail />
                  </span>
                  <span>Login with gmail</span>
                </button>
              </div>
              <div className="pb-4">
                <button className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-blue-500 w-full outline-none hover:bg-blue-600 text-white">
                  <span>
                    <FaFacebook />
                  </span>
                  <span>Login with facebook</span>
                </button>
              </div>
            </form>
          )}
          {type === "signup" && (
            <form>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="email">Name</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                  value={userData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button className="px-3 py-2 rounded-md bg-purple-500 w-full outline-none hover:bg-purple-600 text-white">
                  SignUp
                </button>
              </div>
              <div className="flex py-4 justify-between items-center px-3">
                <div className="w-[45%] h-[1px] bg-slate-500"></div>
                <div className="w-[10%] text-center flex pb-1 px-1 text-white">
                  Or
                </div>
                <div className="w-[45%] h-[1px] bg-slate-500"></div>
              </div>
              <div className="pb-4">
                <button className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-red-500 w-full outline-none hover:bg-red-600 text-white">
                  <span>
                    <BiLogoGmail />
                  </span>
                  <span>Login with gmail</span>
                </button>
              </div>
              <div className="pb-4">
                <button className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-blue-500 w-full outline-none hover:bg-blue-600 text-white">
                  <span>
                    <FaFacebook />
                  </span>
                  <span>Login with facebook</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="w-full h-full justify-center items-center p-4">
        <div className="py-[170px] flex justify-center items-center flex-col gap-6">
          <h2 className="text-5xl text-[#c7c5c5] font-bold">
            What you will design today?
          </h2>
          <span className="text-[#aca9a9] text-2xl font-medium">
            Canva makes it easy to create and share professional designs
          </span>
          <button
            className="py-2 w-[200px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium"
            onClick={() => {
              openModal();
              handleChangeType("signup");
            }}
          >
            SignUp for Free
          </button>
        </div>
      </div>
    </div>
  );
};
