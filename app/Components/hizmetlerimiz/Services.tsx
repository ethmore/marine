import Underline from "../Underline";
import ServiceItemV2 from "./ServiceItemV2";


const Services = () => {
    return (
        <div id="services" className="flex flex-col md:w-[85vw] lg:w-[75vw] xl:w-[70vw] 2xl:w-[50vw] max-w-[1200px] m-auto pt-4 scroll-mt-[400px] lg:scroll-mt-[100px] justify-center ">
            <h1 className="text-center font-bold text-3xl z-10">HİZMETLERİMİZ</h1>
            <Underline />
            <div>
                <ServiceItemV2 title={"Deniz Yapıları İnşaatı"} type="odd" imageSrc_1="./services/service1.webp" imageSrc_2="./services/service2.webp">
                    <p>Yüzer iskelelerin inşası.</p>
                    <p>Liman ve marina yapıları.</p>
                    <p>Deniz platformları.</p>
                    <p>Dalgakıran ve rıhtımlar.</p>
                </ServiceItemV2>

                <ServiceItemV2 title={"Sualtı Araştırma ve Keşif"} type="even" imageSrc_1="./services/service3.webp" imageSrc_2="./services/service4.webp" reversed={true}>
                    <p>Denizaltı keşif görevleri.</p>
                    <p>Sualtı haritalama ve inceleme.</p>
                    <p>Batık araştırma ve kurtarma.</p>
                    <p>Biyoçeşitlilik araştırmaları.</p>
                </ServiceItemV2>

                <ServiceItemV2 title={"Arama Kurtarma Hizmetleri"} type="odd" imageSrc_1="./services/service5.webp" imageSrc_2="./services/service6.webp">
                    <p>Acil durum müdahale ekipleri.</p>
                    <p>Denizde kaybolan veya mahsur kalan kişilerin aranması.</p>
                    <p>Kaza sonrası enkaz temizliği.</p>
                    <p>Kurtarma eğitim ve danışmanlık hizmetleri.</p>
                </ServiceItemV2>

                <ServiceItemV2 title={"Endüstriyel Dalış Hizmetleri"} type="even" imageSrc_1="./services/service7.webp" imageSrc_2="./services/service8.webp" reversed={true}>
                    <p>Su altı kaynakları montajı ve bakımı.</p>
                    <p>Denizaltı yapıların onarımı ve bakımı.</p>
                    <p>Dalış gözetim ve güvenlik.</p>
                    <p>Denizaltı kaynak işleri.</p>
                </ServiceItemV2> 

                <ServiceItemV2 title={"Deniz Çevresi Koruma ve Bakım"} type="odd" imageSrc_1="./services/service9.webp" imageSrc_2="./services/service10.webp">
                    <p>Deniz temizliği ve atık toplama.</p>
                    <p>Resif restorasyonu ve korunması.</p>
                    <p>Deniz yaşamı rehabilitasyonu.</p>
                    <p>Deniz kirliliği önleme danışmanlığı.</p>
                </ServiceItemV2>
            </div>
        </div>
    );
};

export default Services;
