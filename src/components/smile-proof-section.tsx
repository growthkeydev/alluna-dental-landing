"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const SmileProofSection = () => {

    const smileProofs = [
        "/svg/smile-proof-1.svg",
        "/svg/smile-proof-2.svg",
        "/svg/smile-proof-3.svg",
    ];

    return (
        <div className="px-4 md:px-12 xl:px-24 py12 md:py-24 flex flex-col items-center justify-center relative">
            <p className="text-lg text-space-blue">Smile Proof</p>
            <p className="text-dark font-bold text-3xl xl:text-[40px] pt-4 text-center md:text-left">The Art of Natural Results</p>
            <p className="text-dark-gray font-normal text-lg pt-3 md:pb-14 text-center">Tailored veneers designed to enhance your beauty — never fake, always authentic</p>
            <Image
                width={100}
                height={100}
                src="/svg/smile-section.svg"
                alt="Smile"
                className="w-full md:block hidden"
            />
            <div className="block md:hidden pt-8 w-full">
                <Swiper
                    spaceBetween={12}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="custom-dots w-full"
                >
                    {smileProofs.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center">
                                <Image
                                    width={300}
                                    height={200}
                                    src={src}
                                    alt={`Certificate ${index + 1}`}
                                    className="rounded-3xl pb-14 w-full h-auto"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}