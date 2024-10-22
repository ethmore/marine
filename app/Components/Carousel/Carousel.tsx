"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import {
    BsChevronCompactLeft,
    BsChevronCompactRight,
    BsMouse,
} from "react-icons/bs";
import dalga from "../../../public/wave.svg";

interface CarouselItemProps {
    children: ReactNode;
    width?: number;
}

interface CarouselProps {
    children: ReactNode;
}

const CarouselItem = ({ children, width }: CarouselItemProps) => {
    return (
        <div
            className="carousel-item overflow-hidden inline-block items-center justify-center w-full h-full"
            style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1);
        }, 4000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
    });

    return (
        <div
            id="carousel"
            className="relative h-[50vh] md:h-[calc(100vh-100px)] max-w-[2000px] max-h-[1000px] mx-auto bg-[#fef3ef] scroll-mt-[100px]">
            {/* Slogan */}
            <div className="absolute left-1/2 top-[40%] md:top-1/4 -translate-x-1/2 -translate-y-1/2 z-[2]">
                <h1
                    className="text-white text-[2.5rem] lg:text-5xl  text-center leading-tight lg:leading-relaxed"
                    style={{ textShadow: "#000 2px 2px 10px" }}>
                    <i>
                        "Dalgaların Ötesinde
                        <br />
                        İz Bırakan Çözümler"
                    </i>
                </h1>
            </div>

            {/* Carousel */}
            <div
                {...handlers}
                className="relative overflow-hidden h-full w-full m-auto">
                {/* Mouse Icon */}
                <div className="hidden md:block absolute bottom-[95px] md:bottom-[240px] left-[calc(50%-16px)] z-10 motion-safe:animate-bounce">
                    <BsMouse className="text-white" size={32} />
                </div>

                {/* Blue Filter */}
                <div className="absolute left-0 top-0 w-full h-full bg-[#003a705b] z-[1]"/>

                {/* Carousel Images */}
                <div
                    className="whitespace-nowrap transform duration-[750ms] h-full"
                    style={{
                        transform: "translateX(-" + activeIndex * 100 + "%)",
                    }}>
                    {React.Children.map(children, (child, index) => {
                        return React.cloneElement(
                            child as React.ReactElement<any>
                        );
                    })}
                </div>

                {/* Navigation Icons */}
                <div className="flex justify-center">
                    <button
                        className="m-1 w-[70px] h-[70px] absolute left-[0] top-[30%] -translate-y-1/2 cursor-pointer z-[2]"
                        onClick={() => {
                            updateIndex(activeIndex - 1);
                        }}
                        aria-label="carousel left button">
                        <BsChevronCompactLeft
                            size={"100%"}
                            className="text-white"
                        />
                    </button>

                    <button
                        className="m-1 w-[70px] h-[70px] absolute right-[0] top-[30%] -translate-y-1/2 cursor-pointer z-[2]"
                        onClick={() => {
                            updateIndex(activeIndex + 1);
                        }}
                        aria-label="carousel right button">
                        <BsChevronCompactRight
                            size={"100%"}
                            className="text-white"
                        />
                    </button>
                </div>

                <style jsx>
                    {`
                        .carousel-item img {
                            object-fit: cover;
                            // width: 80vw;
                            // height: 70vh;
                        }
                    `}
                </style>
            </div>

            <div
                className={`absolute -bottom-4 lg:-bottom-16 w-full pointer-events-none z-[2]`}>
                <img src="./wave.svg" alt="wave" className="w-full min-[2000px]:scale-[1.001]" />
            </div>
        </div>
    );
};

function CarouselWrapper() {
    return (
        <Carousel>
            <CarouselItem>
                <img
                    srcSet="./carousel/carousel1.webp 4000w, ./carousel/carousel1-500w.webp 500w"
                    src="./carousel/carousel1.webp"
                    alt="carousel_image_2"
                    className="object-cover w-full h-full"
                />
            </CarouselItem>
            <CarouselItem>
                <img
                    srcSet="./carousel/carousel2.webp 4000w, ./carousel/carousel2-500w.webp 500w"
                    src="./carousel/carousel2.webp"
                    alt="carousel_image_3"
                    className="object-cover w-full h-full"
                    loading="lazy"
                />
            </CarouselItem>
            <CarouselItem>
                <img
                    srcSet="./carousel/carousel3.webp 4000w, ./carousel/carousel3-500w.webp 500w"
                    src="./carousel/carousel3.webp"
                    alt="carousel_image_1"
                    className="object-cover w-full h-full"
                    loading="lazy"
                />
            </CarouselItem>
        </Carousel>
    );
}

export { CarouselWrapper };
