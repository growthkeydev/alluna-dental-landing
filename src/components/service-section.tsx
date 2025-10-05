import { ToothIcon } from "@/icons";
import Image from "next/image";

export const ServiceSection = () => {

    const serices = [
        {
            title: 'Confidence-Boosting Care',
            description: 'Dr. David Cohen creates natural, confidence-boosting smile makeovers with a patient-first, minimally invasive philosophy. Trained at UCLA and USC’s Herman Ostrow School of Dentistry, he combines the highest standards of function, aesthetics, and patient care.',
            icon: <ToothIcon />
        },
        {
            title: 'Artisan Precision, Genuine Care',
            description: 'Raised in a family of tradespeople, Dr. Cohen brings artisan precision to dentistry — pairing advanced science with genuine care. Patients describe the experience as welcoming, collaborative, and surprisingly enjoyable, because education and comfort are built into every visit.',
            icon: <ToothIcon />
        },
        {
            title: 'Advanced Training & Technology',
            description: 'With expertise in full-mouth rehabilitation, TMJ, sleep & airway dentistry, and cosmetic veneers, Dr. Cohen uses 3D/CBCT imaging, 3D printing, and modern materials (including non-metal ceramic implants) to plan precisely for results that look natural and last.',
            icon: <ToothIcon />
        },
        {
            title: 'Educator & Advocate',
            description: 'Beyond the clinic, Dr. Cohen shares practical education with over 2M followers on YouTube, TikTok, and Instagram — empowering people to improve their oral health from home and feel confident when they step into the practice.',
            icon: <ToothIcon />
        },

    ]

    return (
        <div className="px-32 pt-10">
            <div className="flex items-start justify-center gap-10 mt-10">
                <div className="w-1/2 h-full">
                    <Image
                        width={500}
                        height={500}
                        src="/svg/service-section-dentist.svg"
                        alt="Service Section Background"
                        className="w-full h-full"
                    />
                </div>
                <div className="w-1/2">
                    <p className="text-space-blue text-xl">Welcome To Alluna Dental</p>
                    <p className="text-dark font-bold text-[40px] mt-2">The New Face of Cosmetic Dentistry in Studio City</p>
                    <div className="mt-10 flex flex-col gap-10">
                        {
                            serices.map((service, index) => (
                                <div key={index}>
                                    <div className="flex items-center gap-2">
                                        {service.icon}
                                        <p className="text-gray text-base font-semibold">{service.title}</p>
                                    </div>

                                    <p className="text-xl text-dark mt-3">{service.description}</p>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}