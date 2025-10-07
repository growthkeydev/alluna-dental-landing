'use client'

import { ArrowRightIcon, DoubleQoutationIcon } from "@/icons";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const TestimonalSection = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const velocity = useRef(0);
    const momentumID = useRef<number | null>(null);
    const [showLeftShadow, setShowLeftShadow] = useState(false);
    const [showRightShadow, setShowRightShadow] = useState(true);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const updateShadows = () => {
            if (el.scrollLeft > 0) {
                setShowLeftShadow(true);
            } else {
                setShowLeftShadow(false);
            }

            if (el.scrollLeft < el.scrollWidth - el.clientWidth) {
                setShowRightShadow(true);
            } else {
                setShowRightShadow(false);
            }
        };

        const applyMomentum = () => {
            if (Math.abs(velocity.current) > 0.1) {
                el.scrollLeft -= velocity.current;
                velocity.current *= 0.95; // friction
                momentumID.current = requestAnimationFrame(applyMomentum);
                updateShadows();
            } else {
                cancelAnimationFrame(momentumID.current!);
                momentumID.current = null;
            }
        };

        const handleDown = (e: MouseEvent | TouchEvent) => {
            isDown.current = true;
            el.classList.add("cursor-grabbing");
            cancelAnimationFrame(momentumID.current!);
            velocity.current = 0; // Reset velocity on new drag

            const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
            startX.current = pageX - el.offsetLeft;
            scrollLeft.current = el.scrollLeft;

            document.body.style.userSelect = "none";
        };

        const handleUp = () => {
            isDown.current = false;
            el.classList.remove("cursor-grabbing");
            document.body.style.userSelect = "";

            // Only apply momentum if velocity is significant
            if (Math.abs(velocity.current) > 1 && !momentumID.current) {
                applyMomentum();
            } else {
                velocity.current = 0; // Reset small velocities
            }
        };

        const handleMove = (e: MouseEvent | TouchEvent) => {
            if (!isDown.current) return;

            const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
            const rect = el.getBoundingClientRect();

            // Stop scrolling if pointer is outside the container with buffer
            const buffer = 50; // pixels buffer outside container
            if (pageX < rect.left - buffer || pageX > rect.right + buffer) {
                velocity.current = 0; // Reset velocity when outside
                handleUp();
                return;
            }

            e.preventDefault();
            const x = pageX - el.offsetLeft;
            const walk = x - startX.current;

            el.scrollLeft = scrollLeft.current - walk;
            velocity.current = walk - velocity.current * 0.5; // Smoother velocity calculation
            updateShadows();
        };

        // Update shadows on scroll
        el.addEventListener("scroll", updateShadows);

        // Mouse events
        el.addEventListener("mousedown", handleDown);
        window.addEventListener("mouseup", handleUp);
        window.addEventListener("mousemove", handleMove);

        // Touch events
        el.addEventListener("touchstart", handleDown, { passive: false });
        window.addEventListener("touchend", handleUp);
        window.addEventListener("touchmove", handleMove, { passive: false });

        // Initial shadow update
        updateShadows();

        return () => {
            el.removeEventListener("scroll", updateShadows);
            el.removeEventListener("mousedown", handleDown);
            window.removeEventListener("mouseup", handleUp);
            window.removeEventListener("mousemove", handleMove);

            el.removeEventListener("touchstart", handleDown);
            window.removeEventListener("touchend", handleUp);
            window.removeEventListener("touchmove", handleMove);

            // Clean up any running animation frames
            if (momentumID.current) {
                cancelAnimationFrame(momentumID.current);
            }
        };
    }, []);

    const quotations = Array(15)
        .fill(0)
        .map((_, index) => (
            <div
                className="bg-light-blue rounded-3xl w-[288px] min-w-[288px] p-6 space-y-4 cursor-grab"
                key={index}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/images/avatar.png"
                            width={48}
                            height={48}
                            alt="Avatar"
                            draggable="false"
                            style={{ userSelect: 'none', pointerEvents: 'none' }}
                        />
                        <div>
                            <p className="text-dark-brown">Aurelia T. Wainw</p>
                            <p className="text-reddish-brown opacity-[62%]">Veneers Patient</p>
                        </div>
                    </div>
                    <DoubleQoutationIcon />
                </div>
                <div className="flex items-center justify-start gap-2">
                    {Array(5)
                        .fill(0)
                        .map((_, i) => (
                            <div key={i}>
                                <Image
                                    src="/svg/star.svg"
                                    alt="Star"
                                    width={25}
                                    height={25}
                                    className="w-full h-full"
                                    draggable="false"
                                    style={{ userSelect: 'none', pointerEvents: 'none' }}
                                />
                            </div>
                        ))}
                </div>
                <p className="font-bold text-xl">
                    "I finally love my smile again, natural and beautiful!"
                </p>
            </div>
        ));

    return (
        <div
            style={{
                backgroundImage: `url('/svg/testimonal-section-background.svg')`,
                backgroundSize: '',
                backgroundRepeat: 'no-repeat',
            }}
            className="md:px-2 px-4 xl:px-24 pt-12 flex flex-col items-center justify-center relative">

            <p className="text-base text-dark">Testimonials</p>
            <p className="text-dark text-3xl md:text-5xl font-bold mt-4 text-center md:text-left">
                What Our Patients Say About Us
            </p>
            <p className="text-dark text-base md:text-[22px] font-bold mt-4 text-center">
                We're proud to be trusted by patients across Los Angeles who wanted
                natural,
                <br />
                confidence-boosting veneers. These are their words, in their own voices.
            </p>

            <div className="flex items-center justify-center gap-10 mt-4">
                <Image
                    src="/svg/google-reviews.svg"
                    alt="Google Reviews"
                    width={209}
                    height={72}
                    className="w-full h-full"
                />
                <Image
                    src="/svg/yelp-reviews.svg"
                    alt="Yelp Reviews"
                    width={150}
                    height={82}
                    className="w-full h-full"
                />
            </div>

            <div className="relative w-full mt-12">
                <div
                    className={`absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#E9F5F6] to-[#E9F5F600] z-10 pointer-events-none transition-opacity duration-300 ${showLeftShadow ? 'opacity-100' : 'opacity-0'
                        }`}
                />

                <div
                    className={`absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#E9F5F6] to-[#E9F5F600] z-10 pointer-events-none transition-opacity duration-300 ${showRightShadow ? 'opacity-100' : 'opacity-0'
                        }`}
                />
                <div
                    ref={scrollRef}
                    className="flex gap-10 w-full overflow-x-auto no-scrollbar cursor-grab relative"
                >
                    {quotations}
                </div>
            </div>

            <div className="flex items-center justify-center gap-[10px] my-12 w-full md:w-max bg-teal-blue rounded-2xl px-8 py-5">
                <p className="text-base md:text-lg font-bold text-white">Get Your Free Quote</p>
                <ArrowRightIcon className="text-white" />
            </div>
        </div>
    );
};