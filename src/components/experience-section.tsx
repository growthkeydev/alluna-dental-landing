import { ArrowRightIcon } from "@/icons"
import Image from "next/image"

export const ExperienceSection = () => {

    return (
        <div
            style={{
                backgroundImage: `
      /* Top fade */
      linear-gradient(to bottom, #E9F4F5 0%, #E9F4F500 100%),
      /* Bottom fade */
      linear-gradient(to top, #E9F4F5 0%, #E9F4F500 100%),
      /* Main overlay & image layers */
      linear-gradient(to bottom, rgba(255, 255, 255, 0.8), transparent),
      linear-gradient(to right, #266279, #9E8085),
      url('/svg/experience-section-background.svg')
    `,
                backgroundSize: `
      100% 200px,  /* top fade height */
      100% 200px,  /* bottom fade height */
      cover,
      cover,
      cover
    `,
                backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat',
                backgroundPosition: 'top, bottom, center, center, center',
            }}
            className="px-4 md:px-12 xl:px-24 relative  flex flex-col items-center justify-center mt-12 md:mt-40"
        >
            <div>
                <Image
                    width={394}
                    height={474}
                    src="/svg/experience-section-patient.svg"
                    alt="Experience Section Background"
                    className="hidden md:block w-full h-[600px]"
                />
            </div>
            <Image
                width={394}
                height={474}
                src="/svg/experience-section-responsive.svg"
                alt="Experience Section Background"
                className="block md:hidden w-full"
            />
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between pt-8 md:pt-16 text-center md:text-left">
                <p className="text-white font-bold text-3xl xl:text-[46px] md:max-w-[520px] md:w-1/2">Proven Experience in Smile Transformations</p>
                <p className="text-white font-normal text-base xl:text-lg md:max-w-[588px] md:w-1/2">With hundreds of smiles transformed in Studio City and beyond, Alluna Dental is trusted by patients who want natural results, luxury comfort, and precision care. From veneers to complete makeovers, our boutique approach has earned us 5-star reviews and national recognition.</p>


            </div>

            <div className="block md:hidden bg-white w-full h-[1px] my-8"></div>
            <div className="flex flex-col justify-center md:flex-row items-center md:justify-between w-full md:max-w-[1176px] md:mt-28">

                <div className="hidden md:block">
                    <p className="font-semibold text-5xl xl:text-[76px] text-white">780+</p>
                    <p className="font-normal text-base xl:text-lg text-white">Smiles Transformed</p>
                </div>

                <div className="hidden md:block">
                    <p className="font-semibold text-5xl xl:text-[76px] text-white">560+</p>
                    <p className="font-normal text-base xl:text-lg text-white">Appointments Booked Online</p>
                </div>

                <div className="hidden md:block">
                    <p className="font-semibold text-5xl xl:text-[76px] text-white">340+</p>
                    <p className="font-normal text-base xl:text-lg text-white">5-Star Reviews & Recognitions</p>
                </div>

                <p className="block md:hidden font-semibold text-5xl xl:text-[76px] text-white">780+</p>
                <p className="block md:hidden font-normal text-base xl:text-lg text-white pt-4">Smiles Transformed</p>
                <p className="block md:hidden font-semibold text-5xl xl:text-[76px] text-white pt-6">560+</p>
                <p className="block md:hidden font-normal text-base xl:text-lg text-white pt-4">Appointments Booked Online</p>
                <p className="block md:hidden font-semibold text-5xl xl:text-[76px] text-white pt-6">340+</p>
                <p className="block md:hidden font-normal text-base xl:text-lg text-white pt-4">5-Star Reviews & Recognitions</p>
            </div>

            <div className="hidden md:flex items-center justify-center gap-4 mt-16 w-max bg-white md:rounded-2xl px-8 py-5 mb-28">
                <p className="text-base xl:text-lg font-bold text-space-blue">Join 780+ Patients Who Already Transformed Their Smiles</p>
                <ArrowRightIcon className="text-space-blue" />
            </div>

             <div className="flex md:hidden items-center justify-center gap-4 mt-16 w-full bg-white rounded-2xl md:rounded-2xl pr-[34px] pl-10 md:px-8 py-5 mb-28">
                <p className="text-base xl:text-lg font-medium text-space-blue">Join 780+ Patients </p>
                <ArrowRightIcon className="text-space-blue" />
            </div>
        </div>
    )
}