"use client";
import { DoubleQoutationIcon } from "@/icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const CertificateSection = () => {
    const certificates = [
        "/svg/certificate-1.svg",
        "/svg/certificate-2.svg",
        "/svg/certificate-3.svg",
        "/svg/certificate-4.svg",
        "/svg/certificate-5.svg",
        "/svg/certificate-6.svg",
        "/svg/certificate-7.svg",
    ];

    return (
        <div className="px-4 md:px-12 xl:px-24 md:pt-24 pt-12 flex items-stretch justify-between gap-6">
            <div className="w-full md:w-[810px] flex flex-col justify-between">
                <p className="text-space-blue text-base xl:text-lg pt-4 text-center md:text-left">
                    The Man Behind the Story
                </p>
                <p className="text-dark font-bold text-3xl xl:text-5xl text-center md:text-left">
                    Meet Dr. David Cohen
                </p>

                <div className="block md:hidden pt-8 ">
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="custom-dots "
                    >
                        {certificates.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center">
                                    <Image
                                        width={92}
                                        height={92}
                                        src={src}
                                        alt={`Certificate ${index + 1}`}
                                        className="rounded-3xl pb-14"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

                <div className="flex items-center justify-between md:hidden pt-14">
                    <Image
                        width={1000}
                        height={1000}
                        src="/svg/responsive-sign.svg"
                        alt="sign"
                        className="rounded-3xl w-[60%] h-auto"
                    />

                    <DoubleQoutationIcon />
                </div>

                <div className="flex flex-col md:hidden">
                    <p className="text-gray text-xl">Patients come to us worried about pain or results looking fake. I built Alluna Dental to prove that cosmetic dentistry can be comfortable, precise, and beautifully natural</p>
                    <Image
                        width={1000}
                        height={1000}
                        src="/svg/certificate-doctor.svg"
                        alt="sign"
                        className="rounded-3xl w-full h-full"
                    />
                </div>

                <div className="hidden md:flex gap-4 pt-8">
                    {certificates.map((src, index) => (
                        <div key={index}>
                            <Image
                                width={92}
                                height={92}
                                src={src}
                                alt={`Certificate ${index + 1}`}
                                className="rounded-3xl w-full h-full"
                            />
                        </div>
                    ))}
                </div>

                <div>
                    <Image
                        width={238}
                        height={87}
                        src="/svg/certificate-section-sign.svg"
                        alt="Smile"
                        className="w-full h-full hidden md:block"
                    />
                </div>
            </div>

            <div className="">
                <Image
                    width={1000}
                    height={1000}
                    src="/svg/certificate-doctor.svg"
                    alt="Certificate doctor"
                    className="rounded-3xl w-full h-full hidden md:block"
                />
            </div>
        </div>
    );
};
