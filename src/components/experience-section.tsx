import { ArrowRightIcon } from "@/icons"
import Image from "next/image"

export const ExperienceSection = () => {

    return (
        <div
            style={{
                backgroundImage: "url('/svg/experience-section-background.svg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            }}
            className="px-32 pt-10 relative bg-gradient-to-r from-teal-blue to-dusty-rose flex flex-col items-center justify-center"
        >
            <div>
                <Image
                    width={394}
                    height={474}
                    src="/svg/experience-section-patient.svg"
                    alt="Experience Section Background"
                    className="w-full h-[600px]"
                />
            </div>
            <div className="flex items-center gap-11 mt-20">
                <p className="text-white font-bold text-[46px] w-[520px]">Proven Experience in Smile Transformations</p>
                <p className="text-white font-normal text-lg w-[588px]">With hundreds of smiles transformed in Studio City and beyond, Alluna Dental is trusted by patients who want natural results, luxury comfort, and precision care. From veneers to complete makeovers, our boutique approach has earned us 5-star reviews and national recognition.</p>


            </div>
            <div className="flex items-center justify-between w-full max-w-[1176px] mt-28">

                <div>
                    <p className="font-semibold text-[76px] text-white">780+</p>
                    <p className="font-normal text-lg text-white">Smiles Transformed</p>
                </div>

                <div>
                    <p className="font-semibold text-[76px] text-white">560+</p>
                    <p className="font-normal text-lg text-white">Appointments Booked Online</p>
                </div>

                <div>
                    <p className="font-semibold text-[76px] text-white">340+</p>
                    <p className="font-normal text-lg text-white">5-Star Reviews & Recognitions</p>
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-16 w-max bg-white rounded-2xl px-8 py-5">
                <p className="text-lg font-bold text-space-blue">Join 780+ Patients Who Already Transformed Their Smiles</p>
                <ArrowRightIcon className="text-space-blue" />
            </div>
        </div>
    )
}