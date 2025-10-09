'use client'

import { ChevronIcon } from "@/icons"
import { useState } from "react";

export const FaqSection = () => {

    const [selectedFaq, setSelectedFaq] = useState(0);

    const faqs = [

        {
            question: 'Porcelain vs. composite veneers — what’s the difference?',
            answer: 'Porcelain offers superior translucency, polish, and long‑term stain resistance. Composite is placed chairside in one visit and is generally less costly but may require more maintenance over time.'
        },
        {
            question: 'Will insurance cover veneers?',
            answer: 'Veneers are usually considered cosmetic and not covered. If a tooth needs structural coverage for function, other benefits may apply. We’ll give you a transparent estimate before we begin.'
        },
        {
            question: 'Do you offer financing?',
            answer: 'Yes — we work with third‑party financing partners and also accept major credit/debit cards and HSA/FSA where eligible. Ask our team to review monthly payment options at your consult. (edited)'
        },
        {
            question: 'Do you offer a warranty?',
            answer: 'We stand behind our work and provide clear post‑op guidance. Ask us about our office policy on adjustments and coverage; details vary by case and home‑care compliance.'
        },
        {
            question: 'Will veneers stain?',
            answer: 'Porcelain veneers are highly stain‑resistant. Coffee, tea, wine, and turmeric can stain natural enamel and old bonding more readily; regular cleanings keep everything bright. Composite veneers can pick up more stain over time.'
        },
        {
            question: 'What shade should I pick?',
            answer: 'We’ll guide you to a shade that’s bright yet believable for your complexion. If you plan to whiten your lower teeth, we’ll align the veneer shade accordingly. (edited)'
        },
        {
            question: 'What’s the process and timeline?',
            answer: 'Consultation & photos/scans → 2) Smile design and shade selection → 3) Prep (if needed) and temporaries → 4) Lab crafts your veneers (about 1–3 weeks) → 5) Try‑in & bonding → 6) Follow‑up and nightguard if indicated.'
        },

    ]

    const onSelectFaq = (index: number) => {
        if (index === selectedFaq) {
            setSelectedFaq(-1)
        } else {
            setSelectedFaq(index);
        }

    }

    return (
        <div className="px-4 md:px-12 xl:px-24 flex flex-col items-center justify-center pb-12 md:pb-0">
            <p className="text-space-blue text-lg ">FAQ</p>
            <p className="text-dark text-3xl xl:text-[40px] pt-4 font-bold md:font-normal text-center md:text-left">Answers to Common Questions</p>
            <p className="text-dark-gray text-base xl:text-lg pt-3 text-center md:text-left">Everything you need to know about veneers, comfort, and your smile journey with Alluna Dental.</p>
            <div className="pt-12 w-full">
                {
                    faqs.map((faq, index) => (
                        <div onClick={() => onSelectFaq(index)} key={index} className={`flex w-full cursor-pointer items-center justify-between border-t border-soft-gray py-8 ${index === faqs.length - 1 ? "border-b" : ""}`}>
                            <div className="flex flex-col">
                                <p className={`${selectedFaq === index ? "font-bold" : "font-normal"} text-deep-midnight  text-xl`}>{faq.question}</p>
                                <p className={`text-dark-gray font-normal text-lg ${selectedFaq !== index && "hidden"}`}>{faq.answer}</p>
                            </div>
                            <div>
                                <ChevronIcon />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}