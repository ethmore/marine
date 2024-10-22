import Underline from "../Underline";
import ContactForm from "./ContactForm";
import "react-loading-skeleton/dist/skeleton.css";

const Contact = () => {
    return (
        <div id="contact" className="pt-20 flex flex-col w-[90vw] md:w-[90vw] lg:w-[75vw] xl:w-[85vw] 2xl:w-[70vw] max-w-[1200px] m-auto justify-center items-center scroll-mt-[400px] lg:scroll-mt-[100px]">
            <div className="">
                <h2 className="text-center font-bold text-3xl">Bize Ulaşın</h2>
                <Underline />
                <p className="mt-4 text-xl">Denizcilikle ilgili herhangi bir konuda yardıma ihtiyacınız varsa, <b>biz buradayız!</b> En iyi çözümleri bulmak için bize ulaşın.</p>
            </div>

            <div className="flex flex-col lg:flex-row md:gap-x-4 2xl:gap-x-16 mt-16 w-full md:w-[80%] lg:w-full justify-around">
                <div className="mt-4 lg:mt-0 lg:w-1/2 ">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;
