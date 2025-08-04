// components/FAQ.tsx
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'How does JobFindingAI help me find a job?',
        answer:
            'We match you with relevant job listings and help apply automatically using AI.',
    },
    {
        question: 'Is JobFindingAI free to use?',
        answer:
            'Yes, a free plan is available. Premium options offer more features and automation.',
    },
    {
        question: 'How do I improve my resume with JobFindingAI?',
        answer:
            'Our AI provides resume feedback and suggestions to improve visibility.',
    },
    {
        question: 'Can I track my job applications?',
        answer:
            'Yes, with a simple dashboard to monitor statuses and success rates.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-white py-16 px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">FAQs</h2>
                <p className="text-sm text-gray-500 mb-8">
                    Browse frequently asked questions or{' '}
                    <a href="/support" className="underline hover:text-black">
                        contact support
                    </a>
                    .
                </p>
            </div>

            <div className="max-w-2xl mx-auto divide-y divide-gray-200">
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex justify-between items-center py-3 text-left text-sm text-gray-800 hover:text-black focus:outline-none"
                        >
                            {faq.question}
                            <ChevronDown
                                className={`w-4 h-4 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="text-sm text-gray-600 pb-4">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
