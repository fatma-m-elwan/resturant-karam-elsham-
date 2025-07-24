import React, { useEffect, useState } from "react";
import logoOffer from "../../assets/offer/عروض icon.webp";
import api from "../../api/recipes.js";
import { FaFacebook, FaInstagram, FaStar, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationDot, FaStarHalfStroke } from "react-icons/fa6";
import { IoStarHalfSharp } from "react-icons/io5";

export default function Home() {
  const [resipesOffers, setRecipesOfers] = useState([]);

  async function callApi() {
    await api
      .get("/offer")
      .then((res) => {
        setRecipesOfers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <div className="flex justify-center flex-col">
        <img
          className="w-32 h-32 rounded-full m-auto border-2 border-[#fff]"
          src={logoOffer}
          alt=""
        />
        <h3 className="text-center text-[#9f6a00] mt-2 text-lg"> العروض</h3>
      </div>

      
      {/* <div> */}
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  space-x-4 space-y-4 container mx-auto max-w-[90%] sm:max-w-[36rem] md:max-w-[45rem] lg:max-w-[62rem] xl:max-w-[74rem] 2xl:max-w-[88rem]">
          {resipesOffers.map((offer) => (
            <Link to={""} key={offer.id}>
            <div key={offer.id}>
              <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <img
                    className="w-full h-[300px]"
                    src={offer?.image}
                    alt="ui/ux review check"
                  />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {offer.name}
                    </h5>
                    <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                      {/* <FaStar />
                      <IoStarHalfSharp />
                      {} */}
                      {offer.star == 5.0 ?  <FaStar className="text-yellow-400 text-xl" /> : <FaStarHalfStroke className="text-yellow-400 text-xl" />}
                      {offer.star}
                    </p>
                  </div>
                  <p className="h-[50px] block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                    {offer.description}
                  </p>
                  <div className="mx-auto w-full text-center group mt-8 inline-flex flex-wrap justify-center items-center gap-3">
                    <span
                      data-tooltip-target="money"
                      className="cursor-pointer rounded-full border border-yellow-500/5 hover:bg-yellow-200/50 p-3 text-black transition-colors hover:border-yellow-500/10 bg-yellow-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                      <Link target="_blank" to={"https://www.facebook.com/karamelshaam/"}>
                        <FaFacebook />
                      </Link>
                    </span>
                    <span
                      data-tooltip-target="wifi"
                      className="cursor-pointer rounded-full border border-yellow-500/5 hover:bg-yellow-200/50 p-3 text-black transition-colors hover:border-yellow-500/10 bg-yellow-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                      <Link to={"https://tiktok.com/@ZS8URGEnQ"}>
                        <FaTiktok />
                      </Link>
                    </span>
                    <span
                      data-tooltip-target="bedrooms"
                      className="cursor-pointer rounded-full border border-yellow-500/5 hover:bg-yellow-200/50 p-3 text-black transition-colors hover:border-yellow-500/10 bg-yellow-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                      <Link to={"https://www.instagram.com/karamelshamfoods/"}>
                        <FaInstagram />
                      </Link>
                    </span>
                    <span
                      data-tooltip-target="tv"
                      className="cursor-pointer rounded-full border border-yellow-500/5 hover:bg-yellow-200/50 p-3 text-black transition-colors hover:border-yellow-500/10 bg-yellow-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                      <Link to={
                          "https://www.google.com/maps/search/%D9%83%D8%B1%D9%85+%D8%A7%D9%84%D8%B4%D8%A7%D9%85+%D9%85%D8%B5%D8%B1%E2%80%AD/@30.5638396,30.1403988,9z/data=!3m1!4b1"
                        }
                      >
                        <FaLocationDot />
                      </Link>
                    </span>
                    {/* <span
                      data-tooltip-target="fire"
                      className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span
                      data-tooltip-target="more"
                      className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                      +20
                    </span> */}
                  </div>
                </div>
                <div className="p-6 pt-3">
                  <button
                    className="block w-full select-none rounded-lg bg-yellow-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold capitalize text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-md hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    price :  {`${offer.price}EGP`} 
                  </button>
                </div>
              </div>
              <link
                rel="stylesheet"
                href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
              />
            </div>
            </Link>
          ))}
        </div>
      {/* </div> */}
    </>
  );
}
