import { InstagramIcon, MailIcon, TwitterIcon, YoutubeIcon } from "@/icons";
import { CallIcon } from "@/icons/call";
import { LocationIcon } from "@/icons/location";
import Image from "next/image";

export const FooterSection = () => (
    <div className="px-32 flex items-start justify-between pt-8 pb-10 bg-white">
        <div className="w-[40%]">
            <Image
                width={100}
                height={100}
                src="/svg/alluna-logo.svg"
                alt="logo"
            />
            <p className="text-dark font-normal text-base pt-4">Luxury cosmetic dentistry in Studio City, specializing in natural veneers, smile makeovers, and boutique care. We combine artistry, precision, and comfort to give you the confidence of a flawless smile.</p>
            <div className="flex items-center gap-2.5 pt-5">
                <div className="bg-teal-blue p-[13px] rounded-full w-max">
                    <TwitterIcon />
                </div>
                <div className="bg-teal-blue p-[13px] rounded-full w-max">
                    <InstagramIcon />
                </div>
                <div className="bg-teal-blue p-[13px] rounded-full w-max">
                    <YoutubeIcon />
                </div>
            </div>
        </div>

        <div>

            <p className="text-space-blue font-semibold text-2xl">Content</p>


            <p className="text-space-blue font-normal text-base pt-8">About Us</p>

            <p className="text-space-blue font-normal text-base py-5">Veneers</p>

            <p className="text-space-blue font-normal text-base">Before & After</p>

        </div>
        <div className="pl-16">
            <p className="text-space-blue font-semibold text-2xl">Contact us</p>
            <div className="flex items-center pt-8">
                <MailIcon />
                <p className="text-dark text-base font-normal ">allunadental@gmail.com</p>
            </div>
            <div className="flex items-center py-5">
                <CallIcon />
                <p className="text-dark text-base font-normal">(818) 980-3333</p>
            </div>
            <div className="flex items-center">
                <LocationIcon />
                <p className="text-dark text-base font-normal">4233 Coldwater Canyon Ave. Studio City, CA 91604</p>
            </div>

        </div>

       
    </div>
)