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
            style={{
                backgroundImage: `url('/svg/testimonal-section-background.svg')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            className="px-32 pt-20 flex flex-col items-center justify-center ">
            <Image
                width={1000}
                height={1000}
                src="/svg/transformation-section-header.svg"
                alt="Transformation Section"
                className="w-full"
            />

            <div

                className="grid grid-cols-2 gap-x-3 w-full pb-20">
                {
                    transformations.map((item, index) => (
                        <div key={index} className="flex items-start mt-10">
                            {item.icon}
                            <div className="ml-10">
                                <p className="text-2xl font-bold">{item.title}</p>
                                {
                                    item.items.map((item, index) => (
                                        <li key={index} className="text-lg ml-6">{item}</li>
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