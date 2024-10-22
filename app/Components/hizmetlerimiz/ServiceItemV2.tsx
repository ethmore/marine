"use client"
import React, { ReactNode } from "react";


interface Props {
    title: any;
    children?: ReactNode;
    reversed?: boolean;
    type: string;
    imageSrc_1: string;
    imageSrc_2: string;
}

const ServiceItemV2 = ({ title, children, reversed, type, imageSrc_1, imageSrc_2 }: Props) => {
    return (
        <div className={`mt-8 flex flex-col ${reversed ? "items-end" : "items-start"}`}>
            {/* Title */}
            <h2 className={`min-w-[50%] text-2xl font-semibold p-3 px-6 text-center text-white bg-primary2 ${reversed ? "rounded-l-full" : "rounded-r-full"}`}>{title}</h2>

            <div className={`flex w-full ${reversed ? "flex-row-reverse" : ""}`}>
                {/* Triangle */}
                <div style={reversed ? { borderWidth: "40px 40px 0 0" } : { borderWidth: " 0 40px 40px 0" }} className={`hidden lg:block w-0 h-0 ${reversed ? "border-r-transparent" : "border-b-transparent"}  border-[#0c3f69]`}></div>

                <style jsx>
                    {`
                        ::-webkit-scrollbar {
                            width: 8px;
                        }

                        ::-webkit-scrollbar-track {
                            //   box-shadow: inset 0 0 5px grey;
                            background: #f5f5f5;
                            border-radius: 10px;
                        }

                        ::-webkit-scrollbar-thumb {
                            width: 50%;
                            background: #8a8a8a;
                            border-radius: 10px;
                            border: 1px solid #f5f5f5
                        }
                    `}
                </style>
                <div className={`cont flex flex-col lg:flex-row justify-between p-6 bg-neutral-200 lg:h-[300px] w-full ${reversed ? "lg:flex-row-reverse" : ""}`}>
                    {/* Text Content */}
                    {children ? (
                        <div className={`flex flex-col lg:w-1/2 text-lg lg:overflow-y-auto ${reversed ? "lg:ml-8 lg:pl-2" : "lg:mr-8 lg:pr-2 lg:text-end"} `} style={{ scrollbarWidth: "thin" }}>
                            <div className={`flex flex-col gap-y-2  ${type}`}>
                                {React.Children.map(children, (child, index) => {
                                    return React.cloneElement(child as React.ReactElement<any>);
                                })}
                            </div>
                        </div>
                    ) : (
                        ""
                    )}

                    {/* Images */}
                    <div className={`flex justify-between mt-4 lg:mt-0 h-[200px] xl:h-full  ${!children ? "xl:w-[100%]" : "xl:w-[50%]"}`}>
                        <img src={imageSrc_1} alt={imageSrc_1} className={`object-cover h-full w-[49%]  rounded-3xl`} loading="lazy" />
                        <img src={imageSrc_2} alt={imageSrc_2} className={`object-cover h-full w-[49%]  rounded-3xl`} loading="lazy" />

                        {/* <Image loader={imageLoader} src={imageSrc_1} alt={imageSrc_1} className={`object-cover h-full w-[49%]  rounded-3xl`} width={1000} height={1000} />
                        <Image loader={imageLoader} src={imageSrc_2} alt={imageSrc_2} className={`object-cover h-full w-[49%]  rounded-3xl`} width={1000} height={1000} /> */}

                        {/* <Image src={imageSrc_1} alt="im1" className={`object-cover h-full w-[49%] rounded-3xl`} /> */}
                        {/* <Image src={imageSrc_2} alt="im2" className={`object-cover h-full w-[49%] rounded-3xl`} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItemV2;
