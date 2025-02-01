import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//logo
import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header className={`${ header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"} fixed z-50 w-full transition-all duration-500`}>
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between">
        {/* logo */}
        <Link to="/">
          {header ? <img className="w-[168px]" src={LogoDark} alt="logo"/> : <img className="w-[168px]" src={LogoWhite} alt="logo"/>}
        </Link>
        {/* nav */}
        <nav className={`${header ? "text-primary" : "text-white"} flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}>
          <Link to="/" className="hover:text-accent transition">
            Home
          </Link>
          <Link to="/rooms" className="hover:text-accent transition">
            Rooms
          </Link>
          <Link to="/restaurant" className="hover:text-accent transition">
            Restaurant
          </Link>
          <Link to="/spa" className="hover:text-accent transition">
            Spa
          </Link>
          <Link to="/contact" className="hover:text-accent transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
