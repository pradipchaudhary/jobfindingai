'use client';

import Image from 'next/image';

const sponsorLogos = [
    '/public/logos/jobaxle.svg',
    '/logos/intern-sathi.png',
    '/logos/mj_logo.svg',
    '/logos/kantipurjob.png',
    '/logos/kumarijob.svg',
];

export default function SponsorLogoScroll() {
    return (
        <div className="py-10">
            <div className="max-w-4xl mx-auto overflow-hidden">
                <div className="animate-slow-scroll flex w-max space-x-12">
                    {sponsorLogos.concat(sponsorLogos).map((logo, index) => (
                        <div key={index} className="w-[120px] h-[60px] relative flex-shrink-0">
                            <Image
                                src={logo}
                                alt={`Sponsor Logo ${index}`}
                                fill
                                className="object-contain"
                                priority
                                unoptimized // 🛠 Optional: Remove if you want optimization
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
