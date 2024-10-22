"use client";
import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

interface Props {
    color?:string
}

function ScrollToTop({color}:Props) {
    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = () => {
        const pos = window.pageYOffset;
        setScrollPos(pos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <div>
            <button
                className={`transition-all duration-200 fixed bottom-4 right-4 z-[10] hover:scale-110 
                ${
                    scrollPos >= 400
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                }`}
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                aria-label="scroll to top"
            >
                <BsFillArrowUpCircleFill
                    size={55}
                    className={`text-primary text-#${color} `}
                />
            </button>
        </div>
    );
}

export default ScrollToTop;
