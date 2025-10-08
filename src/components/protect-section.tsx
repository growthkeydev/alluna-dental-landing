import { ArrowRightIcon, CheckIcon } from "@/icons"
import Image from "next/image"

export const ProtectSection = () => {

    const protections = [
        {
            title: 'Daily Care',
            description: 'Brush and floss as you would your natural teeth, using non-abrasive toothpaste.',
        },
        {
            title: 'Regular Visits',
            description: 'Professional cleanings and bite analysis every 4–6 months to keep your veneers polished and healthy.',
        },
        {
            title: 'Mindful Habits',
            description: 'Avoid chewing ice, nail-biting, or using your teeth as tools.',
        },
        {
            title: 'Follow-Up Supports',
            description: 'We provide custom aftercare kits and are always here for touch-ups, maintenance, or questions.',
        }
    ]

    return (
        <div className="md:px-2 px-4 xl:px-24 flex flex-col md:flex-row items-stretch justify-center gap-10 pt-16">
            <div className="w-full md:w-[50%] flex flex-col justify-between">
                <p className="text-black text-2xl font-semibold">Here’s how to protect your investment:</p>
                <div className="space-y-5 bg-gradient-to-r from-teal-blue-5 to-teal-blue-15 rounded-2xl px-3 pb-6 mt-6">
                    {
                        protections.map((protection, index) => (
                            <div key={index} className="flex flex-row items-start gap-2 pt-6">
                                <div>
                                    <CheckIcon />
                                </div>
                                <p className="text-black text-base xl:text-lg"><b>{protection.title}:</b> {protection.description}</p>

                            </div>
                        ))
                    }
                </div>
                <p className="text-gray text-base xl:text-lg font-normal pt-8">When you take care of your veneers, they’ll take care of you—keeping your smile natural, radiant, and confident for decades.</p>
                <div className="flex items-center justify-center gap-4 mt-6 w-full bg-teal-blue rounded-2xl md:rounded-2xl pr-[34px] pl-10 md:px-8 py-5">
                    <p className="text-base xl:text-lg font-normal text-white">Keep My Smile Looking Its Best</p>
                    <ArrowRightIcon className="text-white" />
                </div>

            </div>

            <div className="w-full md:w-[50%] flex flex-col justify-between">
                <p className="text-space-blue text-base xl:text-lg text-center md:text-left">Your Smile is Built to Last - With the Right Care</p>
                <p className="text-dark font-bold text-4xl 2xl:text-[40px] py-4 text-center md:text-left">Protecting Your Investment</p>
                <p className="text-gray text-base xl:text-lg pb-12 text-center md:text-left">Your veneers are designed to last 10–20 years when cared for properly. At Alluna Dental, we make sure you leave with more than just a new smile—you leave with the knowledge, tools, and support to keep it looking flawless.</p>

                <Image
                    width={796}
                    height={400}
                    alt="mouth"
                    src="/svg/mouth.svg"
                    className="rounded-2xl object-cover w-full h-full hidden md:block"
                />

                <Image
                    width={796}
                    height={400}
                    alt="mouth"
                    src="/svg/protection-section-responsive.svg"
                    className="rounded-2xl object-cover w-full h-full block md:hidden"
                />

            </div>
        </div>
    )
}