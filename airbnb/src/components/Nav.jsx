import React from "react";
import logo from "../assets/airbnb-logo.svg";
import { useState } from "react";

const Nav = () => {
  const [iconRed, setIconRed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <nav className=" flex justify-between items-center bg-white py-4 px-5 font-[poppins] shadow-md fixed w-full top-0 left-0 ">
      {/* LOGO */}
      <div className="flex items-center gap-2 text-2xl font-semibold text-red-500 max-md:hidden">
        <img src={logo} alt="logo" className="w-8 " />
        <span>airbnb</span>
      </div>

      {/* buttons in the middle */}
      <div className="border border-gray-400 max-w-md rounded-full px-4  py-1 flex justify-center items-center space-x-2 bg-white shadow-sm max-md:hidden">
        <button className=" rounded-full p-1 cursor-pointer ">
          {" "}
          <span>
            <i className="fa-regular fa-house"></i>
          </span>
          Anywhere{" "}
        </button>

        <button className="cursor-pointer  p-1 rounded-full">Anytime</button>

        <button className=" rounded-full p-1 cursor-pointer flex justify-center items-center gap-1 ">
          {" "}
          <span>
            <i
              className="fa-solid fa-magnifying-glass p-1 "
              style={{ color: "red" }}
            ></i>
          </span>
          Add guests
        </button>
      </div>

      {/* SEARCH INPUT HIDDEN FOR LARGE SCREENS */}
      <div className="md:hidden max-md:flex max-md:justify-center max-md:items-center max-md:flex-1 px-8 py-4 max-md:text-sm fixed w-full top-0 left-0 z-[1000] bg-white shadow-md">
        <img src={logo} alt="" className="w-8 mr-2" />
        <input
          type="text"
          placeholder="Start your search"
          className="shadow-md px-2 py-4 rounded-full max-md:w-full text-center"
        />
        <i className="fa-solid fa-magnifying-glass p-1 absolute left-1/5 "></i>
      </div>

      {/* ICONS */}

      <div className="flex items-center gap-4 max-md:hidden">
        {/* globe */}
        <div
          onClick={() => setLangMenuOpen(!langMenuOpen)}
          className="p-1 bg-gray-200 rounded-full text-black/90 cursor-pointer"
        >
          <i className="fa-solid fa-globe"></i>
        </div>

        {/* bars */}

        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-1 bg-gray-200 rounded-full text-black/90 cursor-pointer"
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      {/* NAV AT BOTTOM */}
      <div className="bg-white fixed left-1/2 -translate-x-1/2 w-[80%] h-auto shadow-xl z-[1000] border-gray-400 bottom-5 rounded-full py-2 max-md:text-sm text-gray-600  md:hidden">
        <div className="flex justify-center items-center gap-6">
          <div className="block text-center">
            <i
              onClick={() => setIconRed(!iconRed)}
              className={`fa-solid fa-magnifying-glass cursor-pointer hover:scale-[1.2] transition-all duration-300 text-xl ${
                iconRed ? "text-red-500" : ""
              }`}
            ></i>
            <p>Explore</p>
          </div>

          <div className="block text-center">
            <i className="fa-regular fa-heart cursor-pointer hover:scale-[1.2] transition-all duration-300 text-xl"></i>
            <p>Wishlist</p>
          </div>

          <div className="block text-center">
            <i className="fa-regular fa-user cursor-pointer hover:scale-[1.2] transition-all duration-300 text-xl"></i>
            <p>Profile</p>
          </div>
        </div>
      </div>

      {/* menu to be toggled by the hamburger icon */}
      <div
        className={
          menuOpen
            ? "absolute top-16 right-5 transition-all translate-y-5 duration-200 z-10"
            : "absolute top-16 right-5 translate-y-0 transition-all duration-200 opacity-0 pointer-events-auto}> "
        }
      >
        <div className="bg-white border  border-gray-200 rounded-xl shadow-md p-4 text-gray-700 w-48 max-md:hidden text-sm">
          <ul className="space-y-2">
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="#">
                {" "}
                <span>
                  <i className="fa-solid fa-question"></i>
                </span>
                Help Center
              </a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="#">Become a Host</a>
            </li>

            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="#">Refer a Host</a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="#">Find a co-host</a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a href="#">Login or Sign Up</a>
            </li>
          </ul>
        </div>
      </div>

      {/* menu to be toggled by the globe icon */}

      <div
        className={`bg-white w-[50rem] h-[30rem] rounded-lg shadow-xl px-4 py-8 absolute top-[10rem]  left-1/2 -translate-x-1/2 z-[1000] transition-all duration-200 max-md:hidden ${
          langMenuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <h1 className="text-2xl">Choose a language and region</h1>
        {/* languages */}

        <div className="grid grid-cols-4 gap-4">
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>English</p>
            <p className="text-gray-600">United States</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>Bahasa Indonesia</p>
            <p className="text-gray-600">Indonesia</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>Dansk</p>
            <p className="text-gray-600">Danmark</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>Deutsch</p>
            <p className="text-gray-600">Deutschland</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>English</p>
            <p className="text-gray-600">Canada</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>Francais</p>
            <p className="text-gray-600">Togo</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>Eesti</p>
            <p className="text-gray-600">Eesti</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>Espanyol</p>
            <p className="text-gray-600">España</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>Francais</p>
            <p className="text-gray-600">France</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>Espanol</p>
            <p className="text-gray-600">Nicaragua</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>English</p>
            <p className="text-gray-600">Australia</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>English</p>
            <p className="text-gray-600"> United Arab Emirates</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>English</p>
            <p className="text-gray-600">England</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>English</p>
            <p className="text-gray-600">Ghana</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>Portugues</p>
            <p className="text-gray-600">Portugal</p>
          </div>
          <div className=" w-auto rounded-md mt-4 px-2 py-1 cursor-pointer hover:bg-gray-100">
            <p>Tagalog</p>
            <p className="text-gray-600">Pilipinas</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
