"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./logo.webp";
import { NavItem } from "./NavItem";

const Navbar = () => {
    const [navState, setNavState] = useState(true);

    return (
        <div className={`transition-all duration-500 ease-in-out relative top-0 left-0 right-0 lg:sticky flex h-[100px] w-full md:px-8 lg:pl-14 lg:pr-16 z-20 bg-white justify-around lg:justify-between items-center shadow-lg ${navState ? "mb-0" : "mb-[300px]"}`}>
            {/* Logo */}
            <div className="relative">
                <Link href="/">
                    <Image alt="logo" src="./logo.webp" width={0} height={0} className="max-w-[160px] md:max-w-[256px] max-h-[66px] w-auto h-auto"/>
                </Link>
            </div>

            <div className="bg-white w-full h-full absolute -z-10 left-0"></div>

            {/* Mobile Navbar Button */}
            <div
                className={`transition-all duration-100 w-[20px] absolute left-[4%] lg:hidden h-full flex flex-col align-middle justify-center ${navState ? "gap-[4px]" : "gap-0"}`}
                onClick={() => {
                    setNavState(!navState);
                }}>
                <div className={`transition-all duration-100 w-full h-[2px] bg-black ${navState ? "" : "rotate-45 translate-y-[1px]"}`}></div>
                <div className={`transition-all duration-100 w-full h-[2px] bg-black ${navState ? "" : "hidden"}`}></div>
                <div className={`transition-all duration-100 w-full h-[2px] bg-black ${navState ? " " : "rotate-[135deg] -translate-y-[1px]"}`}></div>
            </div>

            {/* Mobile Navbar List */}
                <div
                    className={`${navState? "-top-[320px]" : "left-0 top-[100px]"} flex lg:hidden transition-all duration-500 -z-50 flex-col pl-8 py-4 justify-around bg-[#131521] w-full h-[300px] absolute`}
                    onClick={() => {
                        setNavState(!navState);
                    }}>
                    <NavItem className="py-2   " name="Ana Sayfa" href="/" elementID="carousel" mobile={true} />
                    <NavItem className="py-2 " name="Hakkımızda" href="/#about" elementID="about" mobile={true} />
                    <NavItem className="py-2 !text-white  visited:text-white active:text-white link:text-white" name="Hizmetlerimiz" href="/#services" elementID="services" mobile={true} />
                    <NavItem className="py-2 !text-white  visited:text-white active:text-white link:text-white" name="Referanslar" href="/#reference" elementID="reference" mobile={true} />
                    <NavItem className="py-2 !text-white  visited:text-white active:text-white link:text-white" name="İletişim" href="/#contact" elementID="contact" mobile={true} />
                </div>

            {/* Desktop Navbar List */}
            <div className="hidden lg:flex text-base font-bold w-[700px] justify-around items-center ">
                <NavItem name="Ana Sayfa" href="/" elementID="carousel" />
                <NavItem name="Hakkımızda" href="/#about" elementID="about" />
                <NavItem name="Hizmetlerimiz" href="/#services" elementID="services" />
                <NavItem name="Referanslar" href="/#reference" elementID="reference" />
                <NavItem name="İletişim" href="/#contact" elementID="contact" />
            </div>
        </div>
    );
};

export default Navbar;
