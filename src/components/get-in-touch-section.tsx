import { ArrowRightIcon, MailIcon } from "@/icons";
import { CallIcon } from "@/icons/call";
import { LocationIcon } from "@/icons/location";
import Image from "next/image";

export const GetInTouchSection = () => (
    <div className="mt-20 relative"
    >
        <Image
            width={1000}
            height={1000}
            src="/svg/map.svg"
            alt="Get In Touch Section Background"
            className="w-full h-[871px] object-cover"
        />
        <div className="bg-white p-6 xl:p-12 rounded-3xl absolute top-40 left-11  w-max h-max">
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
            <div className="flex items-center justify-center gap-[10px] w-max bg-space-blue rounded-2xl px-8 py-3 xl:py-5">
                <p className="text-base xl:text-lg font-bold text-white">Book Your Free Consultation</p>
                <ArrowRightIcon className="text-white" />
            </div>
        </div>
    </div>
)