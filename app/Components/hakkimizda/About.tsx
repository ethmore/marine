import Underline from "../Underline";

const About = () => {
    return (
        <div
            id="about"
            className="bg-neutral-100 w-full max-w-[2000px] h-max md:h-[600px] xl:h-[500px] mx-auto flex flex-col md:flex-row justify-between mt-24 scroll-mt-[400px] lg:scroll-mt-[100px]">
            <div className="flex h-full md:w-1/2  m-auto">
                <div className="flex flex-col md:w-2/3 m-auto p-4">
                    <h1 className="text-center font-bold text-3xl">
                        HAKKIMIZDA
                    </h1>
                    <Underline />
                    <div className="my-8">
                        <p>
                            Aquat Marine Constructions olarak, deniz
                            ekosistemlerinin korunması ve deniz kirliliğinin
                            azaltılması için aktif olarak çalışıyoruz ve gelecek
                            nesiller için sağlıklı bir deniz ortamı bırakmayı
                            amaçlıyoruz.
                        </p>
                        <p className="pt-4">
                            Misyonumuz, denizcilik sektöründe mükemmelliği teşvik
                            etmek ve denizlerin sınırsız potansiyelini
                            müşterilerimize sunmaktır. Her projeye yenilikçi bir
                            yaklaşım getiriyoruz ve müşterilerimizin beklentilerini
                            aşmak için çalışıyoruz.
                        </p>
                    </div>
                </div>
            </div>
            <img
                srcSet="./about/about-1280w.webp 4000w, ./about/about-720w.webp 1500w"
                src="./about/about-1280w.webp"
                alt="Hakkimizda"
                className="object-cover hidden md:block md:w-1/2 h-full"
                loading="lazy"
            />
        </div>
    );
};

export default About;
