import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { logoImg, routes } from "../../constant";
import { X } from "lucide-react";
import { Helmet } from "react-helmet";

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = routes.filter(
    (option) => option.path !== "/contact-us" && option.path !== "/blogs/:id"
  );

  const smNavLinks = routes.filter((option) => option.path !== "/blogs/:id");

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4 fixed top-0 w-full backdrop-blur-md z-50 text-primary_text">
      <div className="wrapper w-full flex justify-between items-center gap-10">
        <div className="w-full flex justify-between items-center gap-20">
          <Helmet>
            {/* Preload the logo image */}
            <NavLink rel="preload" href={logoImg} as="image" type="image/png" />
          </Helmet>
          <NavLink
            aria-label="Home"
            smooth={true}
            to="/"
            className="cursor-pointer"
          >
            <img
              src={logoImg}
              width="75"
              height="75"
              className="w-[6rem] md:w-[8rem] object-contain"
              alt="logo"
            />
          </NavLink>
          <div className="lg:flex items-center gap-10 hidden">
            {navLinks.map((option) => (
              <NavLink
                to={`${option.path}`}
                className={`link ${
                  option.path === pathname && "text-secondary font-semibold"
                }`}
                key={option.id}
              >
                {option.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact-us"
              className="primary-btn"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        <button
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
        >
          <Hamburger
            color="#011F3D"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </button>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="py-4 px-10 z-10"
      >
        <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-primary_text text-[2.2rem]"
          >
            <X size={35} />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {smNavLinks.map(({ name, path, id }) => (
            <NavLink
              onClick={() => setIsOpen(false)}
              key={id}
              className="text-3xl text-primary_text font-medium transition-colors duration-300 link"
              to={path}
            >
              {name}
            </NavLink>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default WebsiteHeader;
