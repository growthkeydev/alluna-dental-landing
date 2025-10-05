import Image from "next/image"

export const SmileProofSection = () => (
    <div className="px-32 pt-20 flex flex-col items-center justify-center relative">
        <p className="text-lg text-space-blue">Smile Proof</p>
        <p className="text-dark font-bold text-[40px]">The Art of Natural Results</p>
        <p className="text-dark-gray font-normal text-lg">Tailored veneers designed to enhance your beauty — never fake, always authentic</p>


            <div className="flex items-center justify-start gap-10 mt-10 w-full">
                <div className="flex flex-col gap-36">
                    <p className=" text-black text-2xl">Before</p>
                    <p className=" text-black text-2xl">After</p>
                </div>
                <div>
                    <Image
                        width={100}
                        height={100}
                        src="/svg/smile-proof-1.svg"
                        alt="Smile Proof 1"
                        className="w-full"
                    />

                </div>
                <div>
                    <Image
                        width={100}
                        height={100}
                        src="/svg/smile-proof-2.svg"
                        alt="Smile Proof 1"
                        className="w-full"
                    />
                </div>
                <div>
                    <Image
                        width={100}
                        height={100}
                        src="/svg/smile-proof-3.svg"
                        alt="Smile Proof 1"
                        className="w-full"
                    />
                </div>
            </div>


    </div>
)