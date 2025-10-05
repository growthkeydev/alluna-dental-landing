import { ArrowRightIcon, DoctorIcon, FinanceToothIcon, HappyToothIcon, ToothIcon, TreatmentIcon } from "@/icons"

export const BenefitSection = () => {

    const benefits = [
        {
            title: 'Smile preview before treatment',
            description: 'you’ll know exactly what your final smile looks like.',
            icon: <TreatmentIcon />
        },
        {
            title: 'Luxury comfort experience',
            description: 'spa-like environment, not a dental “factory.',
            icon: <DoctorIcon />
        },
        {
            title: 'Hand-crafted artistry',
            description: 'veneers custom-designed by a master ceramist.',
            icon: <HappyToothIcon />
        },
        {
            title: 'Financing options available',
            description: 'flexible monthly plans through Cherry 0% APR',
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
            className="px-32 pt-20 pb-32 flex items-center justify-center flex-col">
            <p className="text-lg">Key Benefits</p>
            <p className="text-dark mt-1 font-bold text-[40px]">Why Choose Alluna Dental?</p>

            <div className="flex flex-row mt-20">
                {
                    benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 w-[330px] text-center">
                            {benefit.icon}
                            <p className="text-dark font-semibold text-[28px]">{benefit.title}</p>
                            <p className="text-arsenic text-lg font-normal">{benefit.description}</p>
                        </div>
                    ))
                }
            </div>

            <div className="flex items-center justify-center gap-4 mt-10 w-max bg-teal-blue rounded-2xl px-8 py-5">
                <p className="text-lg font-bold text-white">Make Appointment</p>
                <ArrowRightIcon className="text-white" />
            </div>
        </div>
    )
}