import "./globals.css";
import { Fira_Sans } from "next/font/google";
import ScrollToTop from "./Components/ScrollToTop";

const inter = Fira_Sans({ weight: "400", subsets: ["cyrillic"] });

export const metadata = {
    title: "Aquat Marine",
    description:
        "Aquat Marine Construction. Denizcilik sektöründe lider bir firma olarak, liman hizmetleri, su altı mühendislik çözümleri sunmaktadır. Müşterilerimize kaliteli, güvenilir ve yenilikçi denizcilik hizmetleri sunarak sektördeki öncü konumumuzu sürdürüyoruz.",
    keywords:
        "denizcilik, liman hizmetleri, su altı kaynak, batık çıkarma, boru hattı döşeme, sörvey, batimetri, su altı kesim, arama kurtarma, mersin denizcilik, mersin liman hizmetleri, mersin, mersin su altı kaynak, mersin batık çıkarma, mersin boru hattı döşeme, mersin sörvey hizmetleri, mersin batimetri mersin su altı kesim, mersin arama kurtarma",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr">
            <body className={inter.className}>
                {children}
                <ScrollToTop />
            </body>
        </html>
    );
}
