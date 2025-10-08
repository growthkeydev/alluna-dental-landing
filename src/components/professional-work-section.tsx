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

    const secrets = [
        {
            title: '1. The Importance of Translucency',
            description: 'Well-proportioned veneers ensure vitality and balance in your smile—showing the right length of upper front teeth when you speak and smile.'
        },
        {
            title: '2. Proportions and Tooth Length',
            description: 'Natural teeth reflect light with subtle translucency. Our veneers mimic this quality, avoiding the artificial, “opaque” look.'
        },
        {
            title: '3. Selecting the Ideal Shade',
            description: 'The whitest shade isn’t always best. We select tones that harmonize with your skin and features, so people see you—not your dental work.'
        },
        {
            title: '4. Functional Bite Alignment',
            description: 'We analyze your bite to ensure comfort and durability. Proper alignment prevents chips, discomfort, and premature wear.'
        },
        {
            title: '5. Veneers Should Be Unique to You',
            description: 'Every smile we design is bespoke, taking into account age, gender, lip shape, and facial structure for a natural, personal result.'
        },
        {
            title: '6. The Value of Temporaries',
            description: 'Custom temporaries let you “test drive” your new smile. You’ll preview shape, length, and shade—so the final veneers match your vision perfectly.'
        },
    ]

    return (
        <div className="px-4 md:px-12 xl:px-24 md:py-24 py-12 flex flex-col items-center justify-center w-[100%] md:bg-[url('/svg/professional-section-background.svg')] md:bg-cover md:bg-no-repeat md:bg-center">
            <Image
                width={100}
                height={100}
                src="/svg/expert-section.svg"
                alt="expert-section"
                className="hidden md:block w-full"
            />
            <div className="px-4 flex flex-col items-center justify-center md:hidden">
                <p className="text-space-blue text-lg ">Expert Insights</p>
                <p className="text-dark text-3xl font-bold mt-4 text-center">Six Expert Secrets to Veneers You’ll Love for a Lifetime</p>
                <p className="text-dark-gray text-base font-normal mt-3 text-center">Avoid the common pitfalls of cosmetic dentistry. Learn what truly makes veneers look natural, last long, and feel like your own teeth.</p>
                <div className="mt-8 space-y-6">
                    {
                        secrets.map((secret, index) => (
                            <div key={index}>
                                <p className="text-dark text-xl font-bold pb-3">{secret.title}</p>
                                <p className="text-space-blue text-sm font-normal">{secret.description}</p>
                            </div>
                        ))
                    }
                </div>


            </div>
            <Image
                width={100}
                height={100}
                src="/svg/expert-section-responsive.svg"
                alt="expert-section"
                className="block md:hidden w-full mt-8"
            />
            <p className="text-space-blue text-base xl:text-lg pt-12">Professional Work</p>
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
            <div className="flex items-center justify-center gap-4 w-full md:w-max mt-12 bg-teal-blue rounded-2xl md:rounded-2xl pr-[34px] pl-10 md:px-8 py-5">
                <p className="text-lg font-medium md:font-bold text-white">Get Your Free Quote</p>
                <ArrowRightIcon className="text-white" />
            </div>
        </div>
    )
}