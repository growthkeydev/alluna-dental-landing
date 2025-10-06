import { ArrowRightIcon } from "@/icons"
import Image from "next/image"

export const TimeOfferSection = () => {

    return (
        <div
            style={{
                backgroundImage: `url('/svg/time-offer-section-background.svg')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            className="md:px-2 px-12 xl:px-24"
        >

            <div className="relative bg-gradient-to-r from-teal-blue to-dusty-rose h-full w-full rounded-3xl grid grid-cols-2 md:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-7 py-16 justify-center">
                <Image
                    width={394}
                    height={474}
                    src="/svg/time-section-person.svg"
                    alt="Time Offer Section Background"
                    className="absolute left-0 bottom-0 rounded-bl-2xl"
                />
                <div className="flex flex-col items-start text-left col-start-2 md:col-start-4 md:col-span-2 xl:col-start-3 xl:col-span-2 2xl:col-start-4 2xl:col-span-3">
                    <p className="text-white font-bold text-3xl xl:text-[40px] ">Limited-Time Offer</p>
                    <p className="text-white font-normal text-base xl:text-lg mt-2 ">
                        Transform Your Smile with 3D Printed Veneers — Just $7,500 for a Full Upper Set.
                        Book Today and Lock In Your Price.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-10 w-max bg-white rounded-2xl px-8 py-5 cursor-pointer">
                        <p className="text-base xl:text-lg font-bold text-teal-blue">Get Your Free Quote Now</p>
                        <ArrowRightIcon className="text-teal-blue" />
                    </div>
                </div>
            </div>

            <div className="flex items-start justify-center gap-10 mt-20">
                <div className="w-1/2 h-full">
                    <Image
                        width={636}
                        height={618}
                        src="/svg/time-offer-section-dentist.svg"
                        alt="Service Section Background"
                        className="w-full h-full rounded-2xl"
                    />
                </div>
                <div className="w-1/2">
                    <p className="text-space-blue text-lg">What Sets Our Veneers Apart</p>
                    <p className="text-dark font-bold text-[40px] mt-2">Luxury Veneers for a Naturally Flawless Smile</p>
                    <p className="text-onyx-gray font-normal text-lg">At Alluna Dental, we don’t believe in “one-size-fits-all” smiles. Using the finest porcelain and advanced 3D technology, we design veneers that are as durable as they are natural. Every detail-from translucency to shape and shade-is customized to your features, ensuring your smile looks flawless, yet completely your own. </p>

                    <p className="text-space-blue font-bold text-[28px] mt-5">Natural, Balanced, and Uniquely Yours</p>
                    <p className="text-onyx-gray font-normal text-lg">Every smile we create is custom-crafted to complement your unqiue facial features. From your initial preview with temporaries to the final placement, you’re involved in every step of the process. The result: veneers that look natural, feel balanced, and reflect exactly the smile you invisioned, beautiful and unqiuely yours. </p>

                    <div className="flex items-center justify-center gap-4 mt-10 w-max bg-teal-blue rounded-2xl px-8 py-5">
                        <p className="text-lg font-bold text-white">Step Into Your New Smile</p>
                        <ArrowRightIcon className="text-white" />
                    </div>
                </div>
            </div>

        </div>
    )
}