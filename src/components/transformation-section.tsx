import { CheckToothIcon, DoctorIcon, FinanceToothIcon, HappyToothIcon, TreatmentIcon } from "@/icons"
import Image from "next/image"

export const TransformationSection = () => {

    const transformations = [

        {
            title: '1. Consultation & Digital Smile Preview',
            items: [
                'Comprehensive exam, photos, and digital scans.',
                'Virtual mock-up created with Digital Smile Design software.',
                'Collaborative discussion about your smile goals.'
            ],
            icon: <TreatmentIcon />
        },
        {
            title: '2. Preparation Day (Porcelain Veneers Only)',
            items: [
                'Spa-like comforts: headphones, blankets, sedation options.',
                'Temporary “test drive” veneers placed.',
                'Minimal or no prep required in many cases.'
            ],
            icon: <DoctorIcon />
        },
        {
            title: '3. Esthetic Check',
            items: [
                'Quick follow-up visit for adjustments.',
                'Fine-tune shape, color, and bite before final veneers.'
            ],
            icon: <HappyToothIcon />
        },
        {
            title: '4. Veneer Delivery Day',
            items: [
                'Final veneers tried in and approved.',
                'Bonded permanently in a sterile environment.',
                'You leave with your new smile + custom aftercare kit.'
            ],
            icon: <CheckToothIcon />
        },
        {
            title: '5. Optional Follow-Up',
            items: [
                'Professional cleaning & bite analysis.',
                'Final photos to celebrate your transformation.'
            ],
            icon: <FinanceToothIcon />
        }
    ]

    return (
        <div
            className="
                md:bg-[url('/svg/testimonal-section-background.svg')]
                md:bg-cover md:bg-no-repeat
              px-4 md:px-12 xl:px-24 pt-12 md:pt-24 flex flex-col items-center justify-center
            "
        >
            <Image
                width={1000}
                height={1000}
                src="/svg/transformation-section-header.svg"
                alt="Transformation Section"
                className="hidden md:block w-full"
            />

            <Image
                width={1000}
                height={1000}
                src="/svg/transformation-section-responsive.svg"
                alt="Transformation Section"
                className="block md:hidden w-full"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8 w-full py-14 pb-20">
                {
                    transformations.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <div>
                                {item.icon}
                            </div>
                            <div className="ml-5">
                                <p className="text-xl xl:text-2xl font-bold pb-5">{item.title}</p>
                                {
                                    item.items.map((item, index) => (
                                        <li key={index} className="text-base xl:text-lg ml-6">{item}</li>
                                    ))
                                }
                            </div>
                        </div>
                    )
                    )
                }
            </div>

            <div className="w-full border-b border-dashed border-teal-blue"></div>
        </div>
    )
}