import {Link as ScrollLink}  from 'react-scroll';
import {Link as RouterLink}  from "react-router-dom"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiPixiv } from "react-icons/si";
import Hamburger from "hamburger-react";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: localStorage.getItem("username"),
    },
    {
      id: 2,
      name: "Create",
      url: "/create",
    },
    {
      id: 3,
      name: "Gallery",
      url: "/gallery",
    },
    {
      id: 4,
      name: "User",
      url: "/manageUser",
    },
    {
      id: 5,
      name: "Log out",
      url: "/signin",
    },
  ];
  return (
    <>
      <div className="block">
        <RouterLink to={"/"} className="md:hidden text-4xl absolute top-5">
          HomePage
        </RouterLink>
        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl right-8 top-5 md:hidden"
        >
          <Hamburger />
        </div>
        <nav
          className={` bg-gradient-to-r from-indigo-200 via-purple-200 to-sky-200 font-bold absolute pb-3 transition-all duration-500 ease-in z-1 mt-20 md:mt-0 md:right-0 text-center w-full text-2xl md:flex justify-between items-center mx-auto px-4 md:opacity-100 ${
            open ? "right-0" : "overflow-hidden opacity-0"
          }`}
        >
          <RouterLink to={"/"} className="text-4xl hidden md:block">
            HomePage
          </RouterLink>
          <div className="" id="navbarSupportedContent">
            <ul className="md:flex md:ml-24 mt-5 md:bg-[rgba(255,255,255,0.27)] shadow-[0 4px 30px rgba(0, 0, 0, 0.3)] md:backdrop-blur-sm md:border md:border-white rounded-3xl">
              <li className="md:p-4 text-2xl">
                <RouterLink className='cursor-pointer' to={"/"}>
                  Home
                </RouterLink>
              </li>
              <li className="md:p-4 text-2xl">
                <ScrollLink className='cursor-pointer' to="doll1" spy={true} smooth={true} offset={50} duration={500}>
                  Doll Comm
                </ScrollLink>
              </li>
              <li className="md:p-4 text-2xl">
                <ScrollLink className='cursor-pointer' to="artist" spy={true} smooth={true} offset={-70} duration={500}>
                  Artist
                </ScrollLink>
              </li>
              <li className="md:p-4 text-2xl">
                <ScrollLink className='cursor-pointer' to="collection" spy={true} smooth={true} offset={70} duration={500}>
                  Collection
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div className="" id="navbarSupportedContent">
            <ul className="flex md:mx-auto ml-10 mt-5 md:bg-[rgba(255,255,255,0.27)]  md:shadow-[0 4px 30px rgba(0, 0, 0, 0.1)] md:backdrop-blur-sm  md:border md:border-white rounded-3xl">
              <li className="p-4">
                <RouterLink to={"/"} className="">
                  <FaFacebook className="text-3xl" />
                </RouterLink>
              </li>
              <li className="p-4">
                <RouterLink to={"/"} className="">
                  <FaInstagram className="text-3xl" />
                </RouterLink>
              </li>
              <li className="p-4">
                <RouterLink to={"/"} className="">
                  <FaTwitter className="text-3xl" />
                </RouterLink>
              </li>
              <li className="p-4">
                <RouterLink to={"/"} className="">
                  <SiPixiv className="text-3xl" />
                </RouterLink>
              </li>
              {localStorage.getItem("username") ? (
                <li className="p-3">
                  <img
                    src="image/avatarUser.jpg"
                    className="w-10 rounded-full"
                    onClick={() => setOpenMenu(!openMenu)}
                  ></img>
                  <div className="relative block">
                    {openMenu && (
                      <div className="absolute block z-10 right-5 w-40 divide mt-5 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                        {menuItems.map((val) => (
                          <ul className="p-2" key={val.id}>
                            <RouterLink to={val.url}>
                              <li className="block px-4 font-medium text-center py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                {val.name}
                              </li>
                            </RouterLink>
                          </ul>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ) : (
                <button className="text-base mr-3">
                  <RouterLink to={"/signin"}>Sign in</RouterLink>
                </button>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
