import Underline from "../Underline";

const References = () => {
    const divStyle = "p-4 md:p-12 w-[45%] lg:w-[20%] h-[70px] lg:h-[120px] flex items-center justify-center rounded-lg grayscale-[1] ";
    const logoStyle = "max-h-[50px] md:max-h-[65px] 2xl:max-h-[80px] w-auto";

    return (
        <div id="reference" className="pt-20 flex flex-col justify-center scroll-mt-[200px] lg:scroll-mt-[100px]">
            <h1 className="text-center font-bold text-3xl">REFERANSLAR</h1>
            <Underline />
            <div className="w-full bg-neutral-300 flex items-center align-middle mt-4 mb-4 ">
                <div className="flex flex-wrap md:w-full justify-around gap-y-3 2xl:gap-y-7 max-w-[1700px] m-auto brightness-[50%] opacity-80">
                    <div className={`${divStyle}`}>
                        <img src={`/references/panaroma_solutions.svg`} alt={'reference image'} className={`${logoStyle}`} loading="lazy" />
                    </div>
                    <div className={`${divStyle}`}>
                        <img src={`/references/medpan.webp`} alt={'reference image'} className={`${logoStyle}`} loading="lazy" />
                    </div>
                    <div className={`${divStyle}`}>
                        <img src={`/references/spanopoulos-logo-346x74.png`} alt={'reference image'} className={`${logoStyle}`} loading="lazy" />
                    </div>
                    <div className={`${divStyle}`}>
                        <img src={`/references/marineworks.png`} alt={'reference image'} className={`${logoStyle}`} loading="lazy" />
                    </div>
                    <div className={`${divStyle}`}>
                        <img src={`/references/edt_offshore.svg`} alt={'reference image'} className={`${logoStyle}`} loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default References;
