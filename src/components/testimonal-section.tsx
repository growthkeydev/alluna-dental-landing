'use client';

import { ArrowRightIcon, DoubleQoutationIcon } from "@/icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { useState } from "react";

export const TestimonalSection = () => {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const quotations = Array(15)
    .fill(0)
    .map((_, index) => (
      <SwiperSlide key={index} className="!w-auto">
        <div className="bg-light-blue rounded-3xl w-[288px] min-w-[288px] p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/images/avatar.png"
                width={48}
                height={48}
                alt="Avatar"
                draggable="false"
              />
              <div>
                <p className="text-dark-brown">Aurelia T. Wainw</p>
                <p className="text-reddish-brown opacity-[62%]">
                  Veneers Patient
                </p>
              </div>
            </div>
            <DoubleQoutationIcon />
          </div>

          <div className="flex items-center justify-start gap-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Image
                  key={i}
                  src="/svg/star.svg"
                  alt="Star"
                  width={25}
                  height={25}
                />
              ))}
          </div>

          <p className="font-bold text-xl">
            "I finally love my smile again, natural and beautiful!"
          </p>
        </div>
      </SwiperSlide>
    ));

  return (
    <div className="md:bg-[url('/svg/testimonal-section-background.svg')] md:bg-cover md:bg-no-repeat md:px-2 px-4 xl:px-24 pt-24 xl:pt-48 2xl:pt-96 flex flex-col items-center justify-center relative">
      <div className="bg-[url('/svg/testimonal-section-background.svg')] bg-cover bg-no-repeat md:hidden flex flex-col items-center justify-center">
        <p className="text-base text-dark">Testimonials</p>
        <p className="text-dark text-3xl md:text-5xl font-bold mt-4 text-center">
          What Our Patients Say About Us
        </p>
        <p className="text-dark text-base md:text-[22px] font-bold mt-4 text-center">
          We're proud to be trusted by patients across Los Angeles who wanted
          natural,
          <br />
          confidence-boosting veneers. These are their words, in their own
          voices.
        </p>

        <div className="flex items-center justify-center md:gap-10 mt-4 ">
          <Image
            src="/svg/google-reviews.svg"
            alt="Google Reviews"
            width={209}
            height={72}
          />
          <Image
            src="/svg/yelp-reviews.svg"
            alt="Yelp Reviews"
            width={150}
            height={82}
          />
        </div>
      </div>

      <p className="text-base text-dark md:block hidden">Testimonials</p>
      <p className="text-dark text-3xl md:text-5xl font-bold mt-4 text-center md:text-left md:block hidden">
        What Our Patients Say About Us
      </p>
      <p className="text-dark text-base md:text-[22px] font-bold mt-4 text-center md:block hidden">
        We're proud to be trusted by patients across Los Angeles who wanted
        natural,
        <br />
        confidence-boosting veneers. These are their words, in their own voices.
      </p>

      <div className="items-center justify-center md:gap-10 mt-4 md:flex hidden">
        <Image
          src="/svg/google-reviews.svg"
          alt="Google Reviews"
          width={209}
          height={72}
        />
        <Image
          src="/svg/yelp-reviews.svg"
          alt="Yelp Reviews"
          width={150}
          height={82}
        />
      </div>


      <div className="relative mt-12 overflow-hidden max-w-[80vw] w-full">

        <div
          className={`absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF00] md:from-[#E9F5F6] md:to-[#E9F5F600] z-10 pointer-events-none transition-opacity duration-100 ${
            atStart ? "opacity-0" : "opacity-100"
          }`}
        />

        <div
          className={`absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#FFFFFF] to-[#FFFFFF00] md:from-[#E9F5F6] md:to-[#E9F5F600] z-10 pointer-events-none transition-opacity duration-100 ${
            atEnd ? "opacity-0" : "opacity-100"
          }`}
        />

        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          slidesPerView="auto"
          spaceBetween={40}
          grabCursor={true}
          onProgress={(swiper) => {
            setAtStart(swiper.progress <= 0.01);
            setAtEnd(swiper.progress >= 0.99);
          }}
          className="!overflow-visible"
        >
          {quotations}
        </Swiper>
      </div>


      <div className="flex items-center justify-center gap-[10px] my-12 w-full md:w-max bg-teal-blue rounded-2xl pr-[34px] pl-10 py-5">
        <p className="text-base md:text-lg font-bold text-white">
          Get Your Free Quote
        </p>
        <ArrowRightIcon className="text-white" />
      </div>
    </div>
  );
};
