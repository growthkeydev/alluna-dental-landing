import { ArrowRightIcon, PhoneIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {

    return (
        <div
            style={{
                backgroundImage: "url('/svg/hero-section-background.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh'
            }}
            className="md:px-2 px-12 xl:px-24 relative"
        >
            <div className="pt-6 flex items-center justify-between ">
                <div className="flex items-center gap-10">
                    <Image
                        src="/images/logo.png"
                        alt="Alluna Dental Logo"
                        width={150}
                        height={50}
                        
                    />
                    <Link href="#" className="text-base font-semibold text-dark text-nowrap">About Us</Link>
                    <Link href="#" className="text-base font-semibold text-dark">Veneers</Link>
                    <Link href="#" className="text-base font-semibold text-dark text-nowrap">Before & After</Link>
                </div>

                <div className="flex items-center gap-3 xl:gap-6">
                    <div className="flex items-center gap-2 ">
                        <PhoneIcon />
                        <p className="text-dark text-lg xl:text-xl font-semibold text-nowrap">+1 818 980 3333</p>
                    </div>

                    <div className="flex items-center gap-2 border-2 border-blue rounded-2xl px-4 py-3">
                        <p className="text-blue text-base xl:text-lg font-semibold text-nowrap">Schedule free consultation</p>
                        <ArrowRightIcon className="text-blue" />
                    </div>
                </div>
            </div>

            <div className="mt-12 2xl:mt-24">
                <div className="">
                    <div className="bg-white rounded-full px-5 py-1 flex items-center justify-center gap-2 w-max">
                        <div className="w-2 h-2 bg-teal-blue rounded-full"></div>
                        <p className="text-space-blue font-bold text-lg">Award Winning Veneers </p>
                    </div>

                    <p className="font-bold text-5xl 2xl:text-[64px] text-white pt-10">A Natural, <br />Confident Smile <br />Designed Just for You</p>
                    <p className="font-bold text-xl 2xl:text-2xl text-white pt-6">From Studio City to Beverly Hills, see why hundreds of <br />patients choose Alluna Dental for natural results, luxury <br />comfort, and world-class smile makeovers.</p>
                    <div className="flex items-center justify-center gap-4 mt-14 w-max bg-space-blue rounded-2xl px-8 py-5">
                        <p className="text-lg font-bold text-white">Begin Your Smile Journey</p>
                        <ArrowRightIcon className="text-white" />
                    </div>
                </div>
                <div className="w-[48%] h-[93%] absolute bottom-0 right-0 2xl:right-12">
                    <Image
                        src="/svg/hero-section-smile.svg"
                        alt="Hero Section Image"
                        width={500}
                        height={500}
                        className="w-full h-full"
                    />
                </div>
                <div className="bg-white p-3 2xl:p-5 rounded-3xl w-max flex flex-col items-center justify-center absolute right-12 xl:right-24 bottom-6 2xl:bottom-28">
                    <Image
                        src="/svg/tooth.svg"
                        alt="Tooth Image"
                        width={40}
                        height={40}
                        className="pb-4"
                    />
                    <p className="text-primary font-semibold xl:text-base 2xl:text-xl ">Number of Patients</p>
                    <p className="text-primary font-extrabold xl:text-xl 2xl:text-3xl pt-2 2xl:pt-4">1000+</p>
                    <p className="text-blue-gray text-sm ">Last Season</p>
                </div>
            </div>
        </div>
    )
}