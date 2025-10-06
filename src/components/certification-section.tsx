import { DoubleQoutationIcon } from "@/icons";
import Image from "next/image";

export const CertificateSection = () => (
    <div className="md:px-2 px-12 xl:px-24 pt-24 flex items-stretch justify-between gap-6">
        <div className=" w-[810px] flex flex-col justify-between">
            <p className="text-space-blue text-base xl:text-lg pt-4">The Man Behind the Story</p>
            <p className="text-dark font-bold text-3xl xl:text-5xl">Meet Dr. David Cohen</p>
            <div className="flex gap-4 pt-8">
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
            <div>
                <Image
                    width={238}
                    height={87}
                    src="/svg/certificate-section-sign.svg"
                    alt="Smile"
                    className="w-full h-full"
                />
            </div>
        </div>
        <div className="">
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