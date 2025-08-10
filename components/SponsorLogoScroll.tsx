'use client';
import Image from 'next/image';
import { useState } from 'react';

const sponsorLogos = [
    { src: '/logos/jobaxle.svg', name: 'JobAxle' },
    { src: '/logos/intern-sathi.png', name: 'Intern Sathi' },
    { src: '/logos/mj_logo.svg', name: 'MJ Logo' },
    { src: '/logos/kantipurjob.png', name: 'Kantipur Job' },
    { src: '/logos/kumarijob.svg', name: 'Kumari Job' }
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
                        <div key={index} className="flex-shrink-0 flex items-center justify-center">
                            {imageErrors.has(index) ? (
                                // Fallback when image fails to load
                                <div className="w-[120px] h-[60px] bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-500 font-medium border">
                                    {logo.name}
                                </div>
                            ) : (
                                <Image
                                    src={logo.src}
                                    alt={`${logo.name} Logo`}
                                    width={120}
                                    height={60}
                                    className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                                    onError={() => handleImageError(index)}
                                    priority={index < 5} // Prioritize first set of images
                                />
                            )}
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
