import { ArrowRightIcon } from "@/icons";
import Image from "next/image";

export const ProfessionalWorkSection = () => {

    const professionalWork = [
        {
            title: 'TMJ & Sleep Treatment',
            description: 'A personalized treatment that relieves jaw pain, reduces headaches, and improves sleep quality for lasting comfort.',
            image: '/svg/professional-section-1.svg'
        },
        {
            title: 'Veneer Repair & Replacement',
            description: 'Update old or damaged veneers with modern, natural-looking solutions designed to restore your smile’s beauty.',
            image: '/svg/professional-section-2.svg'
        },
        {
            title: 'Invisalign®',
            description: 'Discreet, removable aligners that straighten teeth comfortably and seamlessly — perfect for busy professionals.',
            image: '/svg/professional-section-3.svg'
        },
        {
            title: 'Dental Implants',
            description: 'Permanent, natural-looking replacements for missing teeth that restore both function and aesthetics with unmatched durability.',
            image: '/svg/professional-section-4.svg'
        },

    ]

    return (
        <div
            style={{
                backgroundImage: "url('/svg/professional-section-background.svg')",
                backgroundSize: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',

            }}
            className="px-32 pt-20 pb-72 flex flex-col items-center justify-center">

            <p className="text-space-blue text-lg">Professional Work</p>
            <p className="text-dark text-[40px] font-bold">Other Services We Offer</p>
            <p className="text-dark-gray text-lg font-normal">Tailored veneers designed to enhance your beauty — never fake, always authentic</p>

            <div className="flex items-center justify-between w-full">
                {
                    professionalWork.map((work, index) => (
                        <div key={index} className="flex flex-col items-start gap-y-4 mt-10">
                            <div>
                                <Image
                                    src={work.image}
                                    alt="Professional Work Image"
                                    width={400}
                                    height={400}
                                    className="w-full"
                                />
                            </div>
                            <p className="text-dark text-xl font-bold">{work.title}</p>
                            <p className="text-space-blue text-sm font-normal max-w-[301px]">{work.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center justify-center gap-4 w-max mt-12 bg-teal-blue rounded-2xl px-8 py-5">
                <p className="text-lg font-bold text-white">Get Your Free Quote</p>
                <ArrowRightIcon className="text-white" />
            </div>
        </div>
    )
}