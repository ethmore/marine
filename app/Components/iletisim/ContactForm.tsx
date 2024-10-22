"use client";
import { useState } from "react";

interface Props {
    className?:string
}

const ContactForm = ({className}:Props) => {
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [infoVisible, setInfoVisible] = useState(false);

    async function handleSubmit(event: any) {
        event.preventDefault();
        setLoading(true);
        setSuccessful(false);
        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value),
        };

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response) {
            setLoading(false);
            setSuccessful(true);
            setInfoVisible(true);
            event.target.name.value = "";
            event.target.email.value = "";
            event.target.title.value = "";
            event.target.message.value = "";
        } else {
            setLoading(false);
            setSuccessful(false);
            setInfoVisible(true);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`relative flex flex-col ${className}`}
        >
            <input
                type="text"
                id="name"
                placeholder="İsim"
                required
                className="bg-primary2 h-[45px] rounded-2xl pl-8 text-white"
            />
            <input
                type="email"
                id="email"
                placeholder="Mail Adresi"
                required
                className="bg-primary2 h-[45px] rounded-2xl mt-2 pl-8 text-white"
            />
            <input
                type="text"
                id="title"
                placeholder="Konu Başlığı"
                required
                className="bg-primary2 h-[45px] rounded-2xl mt-2 pl-8 text-white"
            />
            <textarea
                id="message"
                rows={12}
                placeholder="Mesajınız..."
                required
                className="bg-primary2 max-h-[14rem] min-h-[14rem] rounded-2xl mt-2 pl-8 p-4 text-start text-white"
            ></textarea>

            {/* Info Message */}
            <div
                className={`absolute bottom-[11%] z-[1] transition-all duration-200  justify-around items-center w-full mt-2 rounded-xl p-2 flex ${
                    infoVisible ? "visible opacity-100" : "invisible opacity-0"
                } ${successful ? "bg-green-400" : "bg-red-400"}`}
            >
                <p className="text-center text-neutral-800 px-2 pr-6">
                    {" "}
                    {successful
                        ? "Teşekkür ederiz! Size en kısa sürede geri dönüş yapacağız"
                        : "Mesajınız gönderilirken bir hata meydana geldi. Bize telefon numaramızdan ya da sosyal medya hesaplarımızdan ulaşabilirsiniz"}
                </p>

                <button
                    className="absolute top-2 right-2 w-[27px] h-[27px] rounded-full border-2 border-neutral-600 flex flex-col items-center justify-center"
                    onClick={(e) => {
                        e.preventDefault();
                        setInfoVisible(false);
                    }}
                >
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[15px] h-[2px] bg-neutral-600 translate-y-[1px] rotate-45 "></div>
                        <div className="w-[15px] h-[2px] bg-neutral-600 translate-y-[-1px] rotate-[135deg]"></div>
                    </div>
                </button>
            </div>

            {/* Send Button */}
            <div className="flex justify-between items-center">
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#04ce78] w-2/5 h-[45px] rounded-full mt-2 text-black text-xl disabled:bg-gray-700 disabled:text-gray-300"
                >
                    {loading ? "Gönderiliyor" : "Gönder"}
                </button>
                <p className="pr-4">info@aquatmarine.com.tr</p>
            </div>
        </form>
    );
};

export default ContactForm;
