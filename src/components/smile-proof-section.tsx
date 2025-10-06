import Image from "next/image"

export const SmileProofSection = () => (
    <div className="px-6 md:px-12 xl:px-24 py-24 flex flex-col items-center justify-center relative">
        <p className="text-lg text-space-blue">Smile Proof</p>
        <p className="text-dark font-bold text-[40px] pt-4">The Art of Natural Results</p>
        <p className="text-dark-gray font-normal text-lg pt-3 pb-14 text-center">Tailored veneers designed to enhance your beauty — never fake, always authentic</p>
        <Image
            width={100}
            height={100}
            src="/svg/smile-section.svg"
            alt="Smile"
            className="w-full"
        />
    </div>
)