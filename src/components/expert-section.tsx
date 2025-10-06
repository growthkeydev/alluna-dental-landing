import Image from "next/image";

export const ExpertSection = () => {

    const secrets = [
        {
            title: '1. The Importance of Translucency',
            description: 'Well-proportioned veneers ensure vitality and balance in your smile—showing the right length of upper front teeth when you speak and smile.'
        },
        {
            title: '2. Proportions and Tooth Length',
            description: 'Natural teeth reflect light with subtle translucency. Our veneers mimic this quality, avoiding the artificial, “opaque” look.'
        },
        {
            title: '3. Selecting the Ideal Shade',
            description: 'The whitest shade isn’t always best. We select tones that harmonize with your skin and features, so people see you—not your dental work.'
        },
        {
            title: '4. Functional Bite Alignment',
            description: 'We analyze your bite to ensure comfort and durability. Proper alignment prevents chips, discomfort, and premature wear.'
        },
        {
            title: '5. Veneers Should Be Unique to You',
            description: 'Every smile we design is bespoke, taking into account age, gender, lip shape, and facial structure for a natural, personal result.'
        },
        {
            title: '6. The Value of Temporaries',
            description: 'Custom temporaries let you “test drive” your new smile. You’ll preview shape, length, and shade—so the final veneers match your vision perfectly.'
        },
    ]

    return (
        <div className="px-6 md:px-12 xl:px-24 pt-20 relative">
            <Image
                width={100}
                height={100}
                src="/svg/expert-section.svg"
                alt="expert-section"
                className="  w-full"
            />
            {/* <div className="">
                <p className="text-space-blue text-lg ">Expert Insights</p>
                <p className="text-dark text-[40px] font-bold mt-4">Six Expert Secrets to Veneers You’ll Love for a Lifetime</p>
                <p className="text-dark-gray text-lg font-normal mt-3">Avoid the common pitfalls of cosmetic dentistry. Learn what truly makes veneers look natural, last long, and feel like your own teeth.</p>

                <div className="grid grid-cols-2 gap-y-8 gap-x-7 mt-8 ">
                    {
                        secrets.map((secret, index) => (
                            <div key={index} className="space-y-3 max-w-[507px]">
                                <p className="text-dark text-xl font-bold">{secret.title}</p>
                                <p className="text-space-blue text-sm font-normal">{secret.description}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div>
                <Image
                    width={100}
                    height={100}
                    src="/svg/expert-section-image.svg"
                    alt="expert-section"
                    className="  w-full"
                />
            </div> */}
        </div>
    );
};