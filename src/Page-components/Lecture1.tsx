import "../components/css/background.css";
import "../components/css/Image.css";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import ParagraphCenter from "../components/ParagraphCenter";
//import ParagraphStart from "../components/ParagraphStart";
import ParagraphStart2 from "../components/ParagraphStart2";
import BottomBar from "../components/BottomBar";
import TextEmp from "../components/TextEmp";
import LI from "../components/ListItem";
import LE from "../components/ListElement";
import Header from "../components/header";
//import TOXI1 from "../photos/1-Toxi/TOXI-1.png";
import TOXI2 from "../photos/1-Toxi/TOXI-2.png";
import TOXI3 from "../photos/1-Toxi/TOXI-3.png";
import TOXI4 from "../photos/1-Toxi/TOXI-4.jfif";
import TOXI5 from "../photos/1-Toxi/TOXI-5.jpg";
//import TOXI6 from "../photos/1-Toxi/TOXI-6.jpg";

const Lecture1 = () => {
  return (
    <>
      <div className="page-background">
        <NavBar />
        <Banner
          imgType="banner BannerL1"
          header="Toxiinfecție Alimentara"
          title=""
        />
        <Header
          text="Definiție"
          alignement="cHeader"
          PaddingTop={2}
          PaddingBottom={3}
        />
        <ParagraphCenter PaddingTextH={6} PaddingTextBottom={1}>
          Toxiinfecția alimentară este o afecțiune cauzată de consumul de
          alimente contaminate cu microorganisme patogene, cum ar fi bacterii,
          virusuri sau paraziți. Aceste microorganisme eliberează toxine în
          organism, provocând simptome precum greață, vărsături, diaree și
          crampe abdominale.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextBottom={1} PaddingTextH={6}>
          Totul din cauza unor alimente care nu au fost păstrate sau gătite
          corespunzător. E important să ai grijă ce mănânci și să te speli pe
          mâini, pentru a preveni astfel de neplăceri.
        </ParagraphCenter>
        <div className="Image-Container">
          <img src={TOXI5} className="Image-Child" height={1000} />
        </div>
        <Header
          text="Cauze principale"
          alignement="cHeader"
          PaddingTop={3}
          PaddingBottom={3}
        />
        <LE>1. Bacterii:</LE>
        <ParagraphStart2 imgSrc={TOXI2} ColValI={3} PaddingText={10}>
          Cele mai frecvente bacterii responsabile sunt Salmonella, Escherichia
          coli (E. coli), și Listeria. Aceste bacterii se găsesc adesea în
          alimente insuficient gătite, lapte nepasteurizat și fructe și legume
          nespălate.
        </ParagraphStart2>
        <br />
        <LE>2. Virusuri:</LE>
        <ParagraphCenter
          PaddingTextH={16}
          PaddingTextTop={2}
          PaddingTextBottom={2}
        >
          Virusuri precum norovirusul sau virusul hepatitei A pot contamina
          alimentele și apa, cauzând boli digestive. Acestea sunt adesea
          răspândite prin manipularea alimentelor de către persoane infectate.
        </ParagraphCenter>
        <LE>3. Paraziți:</LE>
        <ParagraphCenter
          PaddingTextH={14}
          PaddingTextTop={2}
          PaddingTextBottom={3}
        >
          Paraziți precum Giardia, Toxoplasma sau Entamoeba histolytica pot fi
          prezenți în alimente sau apă contaminate. Aceștia pot provoca infecții
          care afectează sistemul digestiv.
        </ParagraphCenter>
        <LE>4. Toxinele:</LE>
        <ParagraphCenter
          PaddingTextH={14}
          PaddingTextTop={2}
          PaddingTextBottom={3}
        >
          Unele microorganisme, cum ar fi Clostridium botulinum sau
          Staphylococcus aureus, pot produce toxine periculoase în alimente. De
          exemplu, Clostridium botulinum produce o toxină extrem de periculoasă
          care poate duce la botulism.
        </ParagraphCenter>
        <LE>5. Manipularea incorectă a alimentelor:</LE>
        <ParagraphCenter
          PaddingTextH={14}
          PaddingTextTop={2}
          PaddingTextBottom={3}
        >
          Alimentele pot fi contaminate dacă nu sunt manipulate corect. De
          exemplu, dacă nu se respectă igiena personală, cum ar fi spălarea
          mâinilor, sau dacă alimentele sunt lăsate la temperatura camerei prea
          mult timp.
        </ParagraphCenter>
        <LE Col2={1}>6. Depozitarea și prepararea greșită a alimentelor:</LE>
        <ParagraphCenter
          PaddingTextH={14}
          PaddingTextTop={2}
          PaddingTextBottom={3}
        >
          Alimentele care sunt păstrate la temperaturi prea ridicate sau prea
          scăzute pot favoriza dezvoltarea microorganismelor patogene. De
          asemenea, gătirea insuficientă a alimentelor poate lăsa
          microorganismele periculoase active.
        </ParagraphCenter>
        <LE Col2={1}>7. Contaminarea în timpul recoltării sau procesării:</LE>
        <ParagraphCenter
          PaddingTextH={14}
          PaddingTextTop={2}
          PaddingTextBottom={3}
        >
          Uneori, alimentele pot fi contaminate chiar din momentul recoltării
          sau procesării, prin utilizarea unor echipamente murdare sau prin
          contactul cu apă poluată.
        </ParagraphCenter>
        <Header
          text="Cum să previi toxiinfecția alimentară"
          alignement="cHeader"
          PaddingBottom={3}
        />
        <ParagraphCenter PaddingTextBottom={3}>
          <TextEmp style="textBold">1. Gătește bine alimentele:</TextEmp>{" "}
          Bacteriile periculoase mor la temperaturi înalte.
        </ParagraphCenter>
        <div className="Image-Container">
          <img src={TOXI3} className="Image-Child" height={300} />
        </div>
        <ParagraphCenter PaddingTextTop={3}>
          <TextEmp style="textBold">2. Spală-te pe mâini:</TextEmp> Înainte de a
          prepara sau mânca alimente, spală-te pe mâini cu apă și săpun timp de
          cel puțin 20 de secunde. Este important să o faci și după ce ai
          folosit toaleta, ai atins animale sau ai manipulat alimente crude.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextTop={2}>
          <TextEmp style="textBold">3. Păstrează corect alimentele: </TextEmp>
          Frigiderul trebuie să fie la o temperatură sub 4°C pentru a împiedica
          înmulțirea bacteriilor.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextTop={2}>
          <TextEmp style="textBold">
            4. Evită consumul de alimente expirate:{" "}
          </TextEmp>
          Acestea pot conține microorganisme care au avut timp să se
          înmulțească.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextTop={3}>
          <TextEmp style="textBold">5. Evita contaminarea încrucișată:</TextEmp>{" "}
          Nu folosi aceleași ustensile, tocătoare sau suprafețe pentru
          alimentele crude (de exemplu, carne) și pentru alimentele gata de
          consum (legume, salate). După ce manipulezi alimente crude, spală bine
          toate ustensilele și suprafețele.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextTop={3} PaddingTextBottom={3}>
          <TextEmp style="textBold">
            6. Dezinfectează corect frigiderul și cămară:
          </TextEmp>{" "}
          Curăță și igienizează periodic frigiderul și cămara pentru a preveni
          dezvoltarea bacteriilor. Împachetarea corespunzătoare a alimentelor
          pentru a preveni scurgerile și mirosurile este esențială
        </ParagraphCenter>
        <Header text="Simptome" alignement="cHeader" PaddingBottom={3} />
        <LE>Greață și vărsături:</LE>
        <br />
        <LI Col2={1}>
          Unul dintre cele mai frecvente simptome care apare aproape imediat
          după consumul alimentelor contaminate.
        </LI>
        <LI Col2={1}>
          De obicei, apare împreună cu greața și poate fi severă în anumite
          cazuri.
        </LI>
        <br />
        <LE>Diaree și crampe abdominale:</LE>
        <br />
        <LI Col2={1}>
          Un alt simptom comun, care poate fi însoțit de scaune apoase și
          frecvente. Uneori, diareea poate fi sangvinolentă (cu sânge) în cazul
          unor infecții bacteriene severe.
        </LI>
        <br />
        <LI Col2={1}>
          Durerea sau senzația de disconfort în zona stomacului este frecventă,
          iar aceste crampe pot varia de la ușoare la severe.
        </LI>
        <LE>Febră:</LE>
        <LI Col2={1}>
          În unele cazuri, infecțiile alimentare pot provoca febră ușoară sau
          moderată, în special dacă sunt cauzate de bacterii.
        </LI>
        <br />
        <LE>Oboseală sau slăbiciune:</LE>
        <LI Col2={1}>
          O stare generală de oboseală poate apărea, mai ales dacă organismul
          este deshidratat din cauza vărsăturilor și diareei.
        </LI>
        <br />
        <LE>Deshidratare:</LE>
        <LI Col2={1}>
          Din cauza pierderii rapide de lichide (prin diaree și vărsături),
          persoanele infectate pot deveni deshidratate. Semnele de deshidratare
          includ gură uscată, sete intensă, urinare rară, amețeli și piele
          uscată.
        </LI>
        <br />
        <br />
        <div className="Image-Container">
          <img src={TOXI4} className="Image-Child" height={500} />
        </div>
        <Header
          text="Curiozități"
          alignement="cHeader"
          PaddingTop={3}
          PaddingBottom={2}
        />
        <LE>Bacteriile sunt adesea vinovate:</LE>
        <ParagraphCenter PaddingTextBottom={1}>
          • Cele mai comune cauze ale toxiinfecțiilor alimentare sunt
          bacteriile, iar Salmonella, Escherichia coli (E. coli), și
          Campylobacter sunt printre cele mai frecvente.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextBottom={1} PaddingTextH={8}>
          Aceste bacterii pot supraviețui și se pot înmulți rapid în alimente,
          mai ales în condiții de temperaturi ridicate sau scăzute.
        </ParagraphCenter>
        <br />
        <LE>Simptomele nu apar imediat:</LE>
        <ParagraphCenter PaddingTextBottom={1} PaddingTextH={8}>
          • De obicei, simptomele toxiinfecțiilor alimentare apar între 6 și 48
          de ore după ce ai consumat alimentele contaminate, dar uneori pot
          apărea și după 72 de ore sau mai mult.
        </ParagraphCenter>
        <br />
        <LE>Botulismul este o infecție rară, dar periculoasă:</LE>
        <ParagraphCenter PaddingTextBottom={2} PaddingTextH={10}>
          • Toxiinfecția cu Clostridium botulinum, care provoacă botulism, este
          extrem de rară, dar este foarte gravă. Această bacterie produce o
          toxină puternică care poate paraliza mușchii și chiar duce la moarte
          dacă nu este tratată prompt.
        </ParagraphCenter>
        <br />
        <LE>Alimentele gătite pot fi și ele periculoase:</LE>
        <ParagraphCenter PaddingTextBottom={2} PaddingTextH={10}>
          • Este un mit că doar alimentele crude sunt periculoase. Chiar și
          alimentele gătite incorect sau păstrate la temperaturi nepotrivite pot
          dezvolta bacterii care provoacă toxiinfecții. De exemplu, carnea de
          pui trebuie gătită la 75°C pentru a distruge bacteriile periculoase.
        </ParagraphCenter>
        <br />
        <LE>Contaminarea poate apărea și din apă:</LE>
        <ParagraphCenter PaddingTextBottom={2} PaddingTextH={10}>
          • Pe lângă alimente, apa contaminată poate fi o sursă majoră de
          toxiinfecții alimentare. Virusuri și paraziți, cum ar fi Giardia sau
          Norovirus, se pot transmite prin apa nesigură.
        </ParagraphCenter>
        <BottomBar />
      </div>
    </>
  );
};

export default Lecture1;
