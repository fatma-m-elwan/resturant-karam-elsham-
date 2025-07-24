import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import api from "./../../api/recipes.js";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaStar, FaTiktok } from "react-icons/fa";

import { FaLocationDot ,FaStarHalfStroke } from "react-icons/fa6";

export default function Menu() {
  const [categories, setCategories] = useState([]);

  async function callApi() {
    await api
      .get("/recipes")
      .then((res) => {
        setCategories(res.data);
        console.log(res);
        console.log(res.data[0].data);
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
      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            440: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 9,
              spaceBetween: 30,
            },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Link className="flex justify-center items-center flex-col  ">
                <img
                  className=" w-28 h-28 rounded-full border-2 border-white"
                  src={category.image}
                  alt=""
                />
                <h3>{category.category}</h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>




<div className="container mx-auto max-w-[90%] sm:max-w-[36rem] md:max-w-[45rem] lg:max-w-[62rem] xl:max-w-[74rem] 2xl:max-w-[88rem]  ">
  {
    categories?.map((cat) => (

      <div key={cat.id} >
        <h3 key={cat.id} className="my-8 text-3xl font-semibold mt-18" >{cat.category}</h3>




   <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  space-x-6 space-y-8 ">
          {cat.data.map((meal) => (
            <Link to={""} key={meal.id}>
            <div key={meal.id}>
              <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <img
                    className="w-full h-[250px] "
                    src={meal?.image}
                    alt="ui/ux review check"
                  />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {meal.name}
                    </h5>
                    <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                      {/* <FaStar />
                      <IoStarHalfSharp />
                      {} */}
                      {meal.star == 5.0 ?  <FaStar className="text-yellow-400 text-xl" /> : <FaStarHalfStroke className="text-yellow-400 text-xl" />}
                      {meal.star}
                    </p>
                  </div>
                  <p className="h-[50px] block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                    {meal.description}
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
                  </div>
                </div>
                <div className="p-6 pt-3">
                  <button
                    className="block w-full  select-none rounded-lg bg-yellow-500 py-3.5 px-7 text-center align-middle font-sans  font-bold capitalize text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-md hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    price :  {`${meal.pricee} EGP`} 
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



      </div>

    ))
  }
</div>


    </>
  );
}
