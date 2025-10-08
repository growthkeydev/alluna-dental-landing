import { ArrowRightIcon, DoctorIcon, FinanceToothIcon, HappyToothIcon, TreatmentIcon } from "@/icons"

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
            className="
                md:bg-[url('/svg/testimonal-section-background.svg')]
                md:bg-cover md:bg-no-repeat
                md:px-2 px-4 xl:px-24 md:pt-24 pb-32
                flex items-center justify-center flex-col
            ">
            <p className="text-lg">Key Benefits</p>
            <p className="text-dark pt-4 font-bold text-4xl 2xl:text-[40px] text-center md:text-left">Why Choose Alluna Dental?</p>

            <div className="flex flex-row flex-wrap justify-center space-y-3 py-14">
                {
                    benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center gap-5 w-[330px] text-center">
                            {benefit.icon}
                            <p className="text-dark font-semibold text-xl 2xl:text-[28px]">{benefit.title}</p>
                            <p className="text-arsenic text-lg font-normal">{benefit.description}</p>
                        </div>
                    ))
                }
            </div>

            <div className="flex items-center justify-center gap-4 w-full md:w-max bg-teal-blue rounded-2xl md:rounded-2xl pr-[34px] pl-10 md:px-8 py-5">
                <p className="text-lg font-medium md:font-bold text-white">Make Appointment</p>
                <ArrowRightIcon className="text-white" />
            </div>
        </div>
    )
}