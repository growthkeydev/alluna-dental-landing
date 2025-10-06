import { ToothIcon } from "@/icons";
import Image from "next/image";

export const ServiceSection = () => {
  const services = [
    {
      title: "Confidence-Boosting Care",
      description:
        "Dr. David Cohen creates natural, confidence-boosting smile makeovers with a patient-first, minimally invasive philosophy. Trained at UCLA and USC’s Herman Ostrow School of Dentistry, he combines the highest standards of function, aesthetics, and patient care.",
      icon: <ToothIcon />,
    },
    {
      title: "Artisan Precision, Genuine Care",
      description:
        "Raised in a family of tradespeople, Dr. Cohen brings artisan precision to dentistry — pairing advanced science with genuine care. Patients describe the experience as welcoming, collaborative, and surprisingly enjoyable, because education and comfort are built into every visit.",
      icon: <ToothIcon />,
    },
    {
      title: "Advanced Training & Technology",
      description:
        "With expertise in full-mouth rehabilitation, TMJ, sleep & airway dentistry, and cosmetic veneers, Dr. Cohen uses 3D/CBCT imaging, 3D printing, and modern materials (including non-metal ceramic implants) to plan precisely for results that look natural and last.",
      icon: <ToothIcon />,
    },
    {
      title: "Educator & Advocate",
      description:
        "Beyond the clinic, Dr. Cohen shares practical education with over 2M followers on YouTube, TikTok, and Instagram — empowering people to improve their oral health from home and feel confident when they step into the practice.",
      icon: <ToothIcon />,
    },
  ];

  return (
    <section className="px-6 md:px-12 xl:px-24 py-12">
      <div className="flex flex-col md:flex-row items-stretch justify-center md:gap-[35px]">
        <div className="md:w-1/2 w-full flex">
          <Image
            src="/svg/service-section-dentist.svg"
            alt="Service Section Background"
            width={649}
            height={902}
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col justify-between rounded-2xl">
          <div>
            <p className="text-space-blue text-lg md:text-xl">
              Welcome To Alluna Dental
            </p>
            <p className="text-dark font-bold text-2xl md:text-4xl mt-4 pb-9">
              The New Face of Cosmetic Dentistry in Studio City
            </p>
          </div>

            {services.map((service, index) => (
              <div key={index}>
                <div className={`flex items-center gap-2 ${index !==0 && "mt-8"}`}>
                  {service.icon}
                  <p className="text-gray text-base font-semibold">
                    {service.title}
                  </p>
                </div>
                <p className="text-dark text-lg mt-[10px]">{service.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
