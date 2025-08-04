'use client';

import Image from 'next/image';

const sponsorLogos = [
    '/logos/image.webp',
    '/logos/intern-sathi.png',
    '/logos/jn-logo.png',
    '/logos/mj_logo.svg',
    // Add more logos as needed
];

export default function SponsorLogoScroll() {
    return (
        <div className="py-10">
            {/* <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">
                🤝 Trusted by Hiring Partners
            </h2> */}

            <div className="max-w-4xl mx-auto overflow-hidden">
                <div className="animate-slow-scroll flex w-max space-x-12">
                    {sponsorLogos.concat(sponsorLogos).map((logo, index) => (
                        <div key={index} className="flex-shrink-0">
                            <Image
                                src={logo}
                                alt="Sponsor Logo"
                                width={120}
                                height={60}
                                className="object-contain  transition duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
