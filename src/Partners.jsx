
import Aksigorta from "./assets/partners/aksigortaRed.svg"
import Allianz from "./assets/partners/allianz-logo1.webp"
import Anadolu from "./assets/partners/anadolu.svg"
import AnaSigorta from "./assets/partners/anaSigorta.svg"
import Ankara from "./assets/partners/ankara.png"
import Atlas from "./assets/partners/atlas.png"
import Axa from "./assets/partners/axa.png"
import Bereket from "./assets/partners/bereket.svg"
import Corpus from "./assets/partners/corpus.png"
import Doga from "./assets/partners/doga.svg"
import Hdi from "./assets/partners/hdi.png"
import Hepiyi from "./assets/partners/hepiyi.svg"
import Koru from "./assets/partners/koru.png"
import Magdeburger from "./assets/partners/Magdeburger.png"
import Neova from "./assets/partners/neova.png"
import Quick from "./assets/partners/quick.svg"
import Ray from "./assets/partners/ray.png"
import Referans from "./assets/partners/bereket.svg"
import Seker from "./assets/partners/seker.svg"
import Turkiye from "./assets/partners/turkiye.png"
import Turkiyenippon from "./assets/partners/türknippon.svg"
import Unico from "./assets/partners/unico.webp"
import Zurich from "./assets/partners/zurich.png"
import Sompo from "./assets/partners/sompo.svg"
import "./partners.css";
const Partners = () => {

    const logos = [
        Aksigorta,
        Allianz,
        Anadolu,
        AnaSigorta,
        Ankara,
        Atlas,
        Axa,
        Bereket,
        Corpus,
        Doga,
        Hdi,
        Hepiyi,
        Koru,
        Magdeburger,
        Neova,
        Quick,
        Ray,
        Referans,
        Seker,
        Turkiye,
        Turkiyenippon,
        Unico,
        Zurich,
        Sompo
    ];

    return (
        <div className="p-10">
            <h1 className="red">Güçlü İş Ortaklarımız</h1>
            <p className="text-center mb-10">
                Dijikor Sigorta, Türkiye'nin ve dünyanın önde gelen sigorta şirketleri ile iş birliği yaparak hep daha iyisi için çalışıyor.
            </p>


            
            <div className="partner-grid">
                
                {Array.from({ length: 24 }).map((_, i) => (
                    <img
                        key={i}
                        src={logos[i]}
                        alt="logo"
                        className="w-28 h-auto object-contain"
                    />
                ))}
            </div>
        </div>
    );

}

export default Partners
