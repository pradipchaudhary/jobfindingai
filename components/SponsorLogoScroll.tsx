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
                <div className="scroll-container flex space-x-12"
                    style={{
                        width: `${sponsorLogos.length * 2 * 144}px`, // 144px = 120px width + 48px gap
                        animation: 'scroll 20s linear infinite'
                    }}
                >
                    {sponsorLogos.concat(sponsorLogos).map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 group"
                        >
                            <Image
                                src={logo}
                                alt="Sponsor Logo"
                                width={120}
                                height={60}
                                style={{ height: 'auto' }}
                                className="object-contain transition duration-300"
                                onError={() => handleImageError(index)}
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

                .scroll-container {
                    animation: scroll 20s linear infinite;
                }

                /* Pause animation when hovering any image */
                .scroll-container:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
