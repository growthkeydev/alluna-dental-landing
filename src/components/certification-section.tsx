import { DoubleQoutationIcon } from "@/icons";
import Image from "next/image";

export const CertificateSection = () => (
    <div className="px-32 pt-20 flex items-stretch justify-between">
        <div className="h-[677px] w-[60%] flex flex-col justify-between">
            <p className="text-space-blue text-lg">The Man Behind the Story</p>
            <p className="text-dark font-bold text-5xl">Meet Dr. David Cohen</p>
            <div className="flex gap-4">
                <div>
                    <Image
                        width={92}
                        height={92}
                        src="/svg/certificate-1.svg"
                        alt="Certificate 1"
                        className="rounded-3xl w-full h-full"
                    />
                </div>
                <div>
                    <Image
                        width={92}
                        height={92}
                        src="/svg/certificate-2.svg"
                        alt="Certificate 2"
                        className="rounded-3xl w-full h-full"
                    />
                </div>
                <div>
                    <Image
                        width={92}
                        height={92}
                        src="/svg/certificate-3.svg"
                        alt="Certificate 3"
                        className="rounded-3xl w-full h-full"
                    />
                </div>
                <div>
                    <Image
                        width={92}
                        height={92}
                        src="/svg/certificate-4.svg"
                        alt="Certificate 4"
                        className="rounded-3xl w-full h-full"
                    />
                </div>
                <div>
                    <Image
                        width={92}
                        height={92}
                        src="/svg/certificate-5.svg"
                        alt="Certificate 5"
                        className="rounded-3xl w-full h-full"
                    />
                </div>
                <div>
                    <Image
                        width={92}
                        height={92}
                        src="/svg/certificate-6.svg"
                        alt="Certificate 6"
                        className="rounded-3xl w-full h-full"
                    />
                </div>
                <div>
                    <Image
                        width={92}
                        height={92}
                        src="/svg/certificate-7.svg"
                        alt="Certificate 7"
                        className="rounded-3xl w-full h-full"
                    />
                </div>
            </div>

            <div className="flex items-end justify-between">
                <div>
                    <DoubleQoutationIcon />
                    <p className="text-gray font-normal text-xl  max-w-[245px] mt-5">
                        Patients come to us worried about pain or results looking fake. I built Alluna Dental to prove that cosmetic dentistry can be comfortable, precise, and beautifully natural</p>

                    <div>
                        <Image
                            width={238}
                            height={87}
                            src="/svg/sign.svg"
                            alt="Sign"
                            className="rounded-3xl"
                        />
                    </div>
                </div>
                <div>
                    <Image
                        width={238}
                        height={87}
                        src="/svg/smile.svg"
                        alt="Smile"
                        className="rounded-3xl w-full h-full"
                    />
                </div>
            </div>
        </div>
        <div className="h-[677px]">
            <Image
                width={1000}
                height={1000}
                src="/svg/certificate-doctor.svg"
                alt="Certificate doctor"
                className="rounded-3xl w-full h-full"
            />
        </div>
    </div>
)