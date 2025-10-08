import { ArrowRightIcon, MailIcon } from "@/icons";
import { CallIcon } from "@/icons/call";
import { LocationIcon } from "@/icons/location";
import Image from "next/image";

export const GetInTouchSection = () => (
    <div className="mt-0 pt-20 md:pt-0 md:mt-24 md:relative"
        style={{
            backgroundImage: "url('/svg/map.svg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh',
        }}
    >
        {/* <Image
            width={1000}
            height={1000}
            src="/svg/map.svg"
            alt="Get In Touch Section Background"
            className="w-full h-[871px] object-cover hidden md:block"
        /> */}
        <div className="bg-white p-6 xl:p-12 rounded-3xl md:absolute md:top-40 md:left-12 xl:left-24 md:w-max h-max mx-4 md:mx-0">
            <p className="text-space-blue text-lg">Get in Touch</p>
            <p className="text-dark text-bold text-2xl xl:text-[40px] py-4">Get A Free Professional <br /> Consultation Session</p>

            <div className="flex items-center">
                <MailIcon />
                <p className="text-dark text-base font-normal">allunadental@gmail.com</p>
            </div>
            <div className="flex items-center py-5">
                <CallIcon />
                <p className="text-dark text-base font-normal">(818) 980-3333</p>
            </div>
            <div className="flex items-center pb-8">
                <LocationIcon />
                <p className="text-dark text-base font-normal">4233 Coldwater Canyon Ave. Studio City, CA 91604</p>
            </div>
            <div className="flex items-center justify-center gap-[10px] w-full md:w-max bg-space-blue rounded-2xl md:rounded-2xl pr-[34px] pl-10 md:px-8 py-5">
                <p className="text-base xl:text-lg font-bold text-white">Book Your Free Consultation</p>
                <ArrowRightIcon className="text-white" />
            </div>
        </div>
    </div>
)