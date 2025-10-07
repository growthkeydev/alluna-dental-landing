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
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',

            }}
            className="px-4 md:px-12 xl:px-24 md:py-24 py-12 flex flex-col items-center justify-center">

            <p className="text-space-blue text-base xl:text-lg">Professional Work</p>
            <p className="text-dark text-3xl xl:text-[40px] font-bold pt-4">Other Services We Offer</p>
            <p className="text-dark-gray text-base xl:text-lg font-normal pt-3 text-center md:text-left">Tailored veneers designed to enhance your beauty — never fake, always authentic</p>

            <div className="flex md:flex-row flex-col items-center md:justify-between gap-y-4 md:flex-wrap w-full pt-8">
                {
                    professionalWork.map((work, index) => (
                        <div key={index} className="flex flex-col items-center md:items-start gap-y-4 w-full md:w-auto">
                            
                                <Image
                                    src={work.image}
                                    alt="Professional Work Image"
                                    width={400}
                                    height={400}
                                    className="w-full"
                                />
                            
                            <p className="text-dark text-xl font-bold">{work.title}</p>
                            <p className="text-space-blue text-sm font-normal max-w-[301px] text-center md:text-left">{work.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center justify-center gap-4 w-full md:w-max mt-12 bg-teal-blue rounded-2xl px-8 py-5">
                <p className="text-lg font-medium md:font-bold text-white">Get Your Free Quote</p>
                <ArrowRightIcon className="text-white" />
            </div>
        </div>
    )
}