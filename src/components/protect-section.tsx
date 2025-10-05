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
        <div className="px-32 flex items-stretch justify-center gap-10 pt-20">
            <div className="w-[50%] h-[644px] flex flex-col justify-between">
                <p className="text-black text-2xl font-semibold">Here’s how to protect your investment:</p>
                <div className="space-y-5 bg-gradient-to-r from-teal-blue-5 to-teal-blue-15 rounded-2xl px-10 py-5 mt-8">
                    {
                        protections.map((protection, index) => (
                            <div key={index} className="flex flex-row items-start gap-2">
                                <div>
                                    <CheckIcon />
                                </div>
                                <p className="text-black text-lg "><b>{protection.title}:</b> {protection.description}</p>

                            </div>
                        ))
                    }
                </div>
                <p className="text-gray text-lg font-normal">When you take care of your veneers, they’ll take care of you—keeping your smile natural, radiant, and confident for decades.</p>
                <div className="flex items-center justify-center gap-4 w-full bg-teal-blue rounded-2xl px-8 py-5">
                    <p className="text-lg font-bold text-white">Keep My Smile Looking Its Best</p>
                    <ArrowRightIcon className="text-white" />
                </div>

            </div>

            <div className="w-[50%] h-[644px] flex flex-col justify-between">
                <p className="text-space-blue text-lg">Your Smile is Built to Last - With the Right Care</p>
                <p className="text-dark font-bold text-[40px]">Protecting Your Investment</p>
                <p className="text-gray text-lg">Your veneers are designed to last 10–20 years when cared for properly. At Alluna Dental, we make sure you leave with more than just a new smile—you leave with the knowledge, tools, and support to keep it looking flawless.</p>

                <Image
                    width={796}
                    height={400}
                    alt="mouth"
                    src="/svg/mouth.svg"
                    className="rounded-2xl "
                />

            </div>
        </div>
    )
}