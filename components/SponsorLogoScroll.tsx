'use client';
import Image from 'next/image';
import { useState } from 'react';

const sponsorLogos = [
    '/logos/jobaxle.svg',
    '/logos/intern-sathi.png',
    '/logos/mj_logo.svg',
    '/logos/kantipurjob.png',
    '/logos/kumarijob.svg'
    // Add more logos as needed
];

export default function SponsorLogoScroll() {
    const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

    const handleImageError = (index: number): void => {
        setImageErrors(prev => new Set(prev).add(index));
    };

    return (
        <div className="py-10">
            <div className="max-w-4xl mx-auto overflow-hidden">
                <div className="flex animate-scroll space-x-12" style={{
                    width: `${sponsorLogos.length * 2 * 144}px`, // 144px = 120px width + 48px gap
                    animation: 'scroll 20s linear infinite'
                }}>
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

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-${sponsorLogos.length * 144}px);
                    }
                }
                
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
