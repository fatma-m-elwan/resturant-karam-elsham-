import React from "react";
import logo from "../../assets/Karamelsham015.jpg";
import mainBgImg from "../../assets/default-cover.png";
import { Link, NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaPhoneAlt,
  FaStar,
  FaTiktok,
  FaWhatsapp,
  FaLink,
  FaCarSide,
  FaFacebook,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav>
      <div className="w-full   h-[17vh] sm:h-[30vh]  md:h-[40vh] relative">
        <img className="w-full h-full" src={mainBgImg} alt="" />
        <div className="border-4 w-28 md:w-auto border-amber-50 absolute left-[80%]  md:left-[50%] bottom-[-100%] sm:bottom-[-50%] xl:b ottom-[-50%] translate-y-[-50%] translate-x-[-50%] rounded-full">
          <img className="rounded-full " src={logo} alt="" />
        </div>
      </div>
      <div className="mt-22">
        <h1 className="text-center text-xl md:text-3xl font-bold">
          كـــــــــــــرم الشــــــــام Karam EL-Sham
        </h1>
        <div className=" flex flex-col items-center gap-y-8 justify-between lg:flex-row-reverse px-6 md:px-18 border-4 py-4 mt-4 border-transparent border-b-[#dea739]">
          <ul className="flex items-center justify-center space-x-4 md:space-x-6  ">
            <li className="text-2xl">
              <Link>
                <FaCarSide />
              </Link>
            </li>
            <li className="text-xl">
              <Link
                to={
                  "https://www.google.com/maps/search/%D9%83%D8%B1%D9%85+%D8%A7%D9%84%D8%B4%D8%A7%D9%85+%D9%85%D8%B5%D8%B1%E2%80%AD/@30.5638396,30.1403988,9z/data=!3m1!4b1"
                }
              >
                <FaLocationDot />
              </Link>
            </li>
            <li className="text-xl">
              <Link to={"https://tiktok.com/@ZS8URGEnQ"}>
                <FaTiktok />
              </Link>
            </li>
            <li className="text-xl">
              <Link to={"https://www.facebook.com/karamelshaam/"}>
                <FaFacebook />
              </Link>
            </li>
            <li className="text-xl">
              <Link to={"https://www.instagram.com/karamelshamfoods/"}>
                <FaInstagram />
              </Link>
            </li>
            <li className="text-xl">
              <Link to={"https://wa.me/201211748854"}>
                <FaWhatsapp />
              </Link>
            </li>
            <li className="text-xl">
              <Link to={"tel:+2019509"}>
                <FaPhoneAlt />
              </Link>
            </li>
            <li className="text-xl">
              <Link
                to={"https://ww12.karam-elsham.com/?usid=19&utid=22510478568"}
              >
                <FaLink />
              </Link>
            </li>
          </ul>
          <ul className="flex items-center space-x-9 md:space-x-7 font-semibold text-[17px] lg:text-xl">
            <li>
              <NavLink to={""}>الرئيسية</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>عن المطعم</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>القائمة</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>تواصل معنا</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
