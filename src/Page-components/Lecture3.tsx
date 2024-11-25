import "../components/css/background.css";
import "../components/css/Image.css";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import BottomBar from "../components/BottomBar";
import Header from "../components/header";
import ParagraphCenter from "../components/ParagraphCenter";
import ParagraphStart2 from "../components/ParagraphStart2";
import ParagraphEnd2 from "../components/ParagraphEnd2";
import LI from "../components/ListItem";
import LE from "../components/ListElement";
import TextEmp from "../components/TextEmp";
import AVC1 from "../photos/3-AVC/AVC-1.png";
import AVC2 from "../photos/3-AVC/AVC-2.png";
import AVC3 from "../photos/3-AVC/AVC-3.png";
import AVC4 from "../photos/3-AVC/AVC-4.png";
import AVC5 from "../photos/3-AVC/AVC-5.png";
import AVC6 from "../photos/3-AVC/AVC-6.png";
//import AVC7 from "../photos/3-AVC/AVC-7.png";
//import AVC8 from "../photos/3-AVC/AVC-8.png";
//import AVC9 from "../photos/3-AVC/AVC-9.png";

const Lecture3 = () => {
  return (
    <>
      <div className="page-background">
        <NavBar />
        <Banner
          imgType="banner BannerL3"
          header="AVC"
          title=""
          description="Accident Vascular Cerebral"
        />
        <Header
          text="Introducere in AVC"
          alignement="cHeader"
          PaddingTop={2}
          PaddingBottom={2}
        />
        <ParagraphCenter PaddingTextBottom={3}>
          <TextEmp style="textItalic">
            Ce este un accident vascular cerebral?
          </TextEmp>
        </ParagraphCenter>
        <ParagraphStart2 imgSrc={AVC1} ColValI={3} PaddingText={7}>
          <TextEmp style="textBold">Definiție:</TextEmp> Un accident vascular
          cerebral (AVC) reprezintă o afecțiune medicală gravă care apare atunci
          când fluxul de sânge către o parte a creierului este întrerupt sau
          redus, ceea ce duce la o deteriorare a țesutului cerebral. Creierul nu
          mai primește suficient oxigen și substanțe nutritive, iar celulele
          cerebrale încep să moară
        </ParagraphStart2>
        <ParagraphCenter PaddingTextTop={3} PaddingTextH={10}>
          <TextEmp style="textBold"> Importanța:</TextEmp> Accidentele vasculare
          cerebrale sunt urgente medicale și necesită intervenție rapidă pentru
          a minimiza daunele și a îmbunătăți șansele de recuperare.
        </ParagraphCenter>
        <br />
        <ParagraphCenter PaddingTextH={13}>
          Prevenirea unui AVC include controlul factorilor de risc, cum ar fi
          hipertensiunea arterială, fumatul, diabetul, colesterolul ridicat și
          sedentarismul.
        </ParagraphCenter>
        <Header
          text="Anatomia și funcția creierului"
          alignement="cHeader"
          PaddingTop={3}
          PaddingBottom={3}
        />
        <ParagraphCenter PaddingTextBottom={3}>
          Explicație succintă despre cum funcționează creierul și importanța
          alimentării cu sânge.
        </ParagraphCenter>
        <ParagraphEnd2 imgSrc={AVC2} ColValI={3} ColValS={2} PaddingH={23}>
          Rolul arterelor și circulația cerebrală – ce se întâmplă când fluxul
          sanguin este obstrucționat.
        </ParagraphEnd2>
        <Header
          text="Tipurile de AVC"
          alignement="cHeader"
          PaddingTop={3}
          PaddingBottom={3}
        />
        <LE>1. AVC ischemic </LE>

        <ParagraphCenter PaddingTextH={16}>
          Acest tip reprezintă aproximativ 80% din cazurile de AVC și apare
          atunci când fluxul de sânge către creier este blocat din cauza unui
          cheag de sânge sau a unei îngustări a vaselor de sânge. Există două
          subtipuri majore de AVC ischemic:
        </ParagraphCenter>
        <br />
        <ParagraphCenter PaddingTextH={9}>
          <TextEmp style="textBold">
            Accident vascular cerebral trombotic
          </TextEmp>{" "}
          se produce atunci când un cheag de sânge (tromb) se formează într-o
          arteră a creierului, de obicei în urma acumulării de depuneri de
          grăsime sau colesterol pe peretele vasului (ateroscleroză). Acest
          cheag blochează fluxul sanguin către țesutul cerebral.
        </ParagraphCenter>
        <br />
        <ParagraphCenter PaddingTextH={9}>
          <TextEmp style="textBold">Accident vascular cerebral embolic</TextEmp>{" "}
          apare atunci când un cheag de sânge sau o bucată de material (numită
          embol) se formează într-o altă zonă a corpului, de obicei în inimă, și
          este transportat prin sânge până ajunge într-o arteră mai mică din
          creier, unde blochează circulația. Acest tip este adesea asociat cu
          afecțiuni ale inimii, cum ar fi fibrilația atrială.
        </ParagraphCenter>
        <br />
        <LE>2. AVC hemoragic </LE>
        <br />
        <ParagraphCenter PaddingTextH={12}>
          Acest tip apare atunci când un vas de sânge din creier se rupe și
          sângele se varsă în țesutul cerebral sau în spațiile din jurul
          creierului.
        </ParagraphCenter>
        <br />
        <ParagraphCenter PaddingTextH={12}>
          AVC-ul hemoragic reprezintă aproximativ 20% din cazurile de AVC și se
          poate produce din diverse cauze, inclusiv hipertensiune arterială
          severă, anevrisme cerebrale sau malformații vasculare.
        </ParagraphCenter>
        <br />
        <ParagraphCenter PaddingTextH={12}>
          Acest tip de AVC este mai periculos și adesea necesită intervenție
          chirurgicală urgentă.
        </ParagraphCenter>
        <br />
        <LE>3. Accident ischemic tranzitoriu (AIT) </LE>
        <br />
        <ParagraphCenter PaddingTextH={6}>
          Un accident vascular cerebral tranzitor (sau "mini-AVC") este similar
          cu un AVC ischemic, dar simptomele dispar complet într-un interval de
          timp scurt (de obicei, în decurs de 24 de ore).
        </ParagraphCenter>
        <br />
        <ParagraphCenter PaddingTextH={10}>
          Deși nu provoacă leziuni cerebrale permanente, un AIT este un semnal
          de alarmă important, indicând un risc crescut de a suferi un AVC
          complet.
        </ParagraphCenter>
        <br />
        <br />
        <div className="Image-Container">
          <img src={AVC3} className="Image-Child" height={700} />
        </div>
        <Header
          text="Cauzele AVC"
          alignement="cHeader"
          PaddingTop={4}
          PaddingBottom={2}
        />
        <div className="Image-Container">
          <img src={AVC4} className="Image-Child" height={400} />
        </div>
        <br />
        <LI Col2={1}>
          <TextEmp style="textBold">01. </TextEmp>Ateroscleroza (îngustarea
          arterelor)
        </LI>
        <LI Col2={1}>
          <TextEmp style="textBold">02. </TextEmp>Formarea cheagurilor de sânge
          (trombi)
        </LI>
        <LI Col2={1}>
          <TextEmp style="textBold">03. </TextEmp>Fibrilația atrială (un ritm
          cardiac neregulat){" "}
        </LI>
        <LI Col2={1}>
          <TextEmp style="textBold">04.</TextEmp> Afecțiuni de coagulare a
          sângelui
        </LI>
        <LI Col2={1}>
          <TextEmp style="textBold">05.</TextEmp> Hipertensiunea arterială
          (tensiunea arterială mare)
        </LI>
        <LI Col2={1}>
          <TextEmp style="textBold">06.</TextEmp> Diabetul zaharat
        </LI>
        <LI Col2={1}>
          <TextEmp style="textBold">07. </TextEmp>Colesterolul crescut
        </LI>
        <LI Col2={1}>
          <TextEmp style="textBold">08. </TextEmp>Fumatul
        </LI>
        <LI Col2={1}>
          <TextEmp style="textBold">09. </TextEmp>Consumul excesiv de alcool
        </LI>
        <LI Col2={1}>
          <TextEmp style="textBold">10.</TextEmp> Stresul cronic și lipsa
          activității fizice
        </LI>
        <LI Col2={1}>
          <TextEmp style="textBold">11.</TextEmp> Apneea de somn
        </LI>
        <LI Col2={1}>
          <TextEmp style="textBold">12. </TextEmp>Vârsta înaintată și istoricul
          familial
        </LI>
        <LI Col2={1}>
          <TextEmp style="textBold">13. </TextEmp>Răni la cap și afecțiuni
          vasculare congenitale
        </LI>

        <Header
          text="Factori de risc"
          alignement="cHeader"
          PaddingTop={3}
          PaddingBottom={3}
        />
        <LE>Factori modificabili:</LE>
        <LI Col2={1}>
          Fumatul, hipertensiunea arterială, diabetul, obezitatea, sedentarismul
        </LI>
        <LE>Factori nemodificabili:</LE>
        <LI Col2={1}>
          Vârsta (peste 55 de ani), sexul, istoricul familial de AVC
        </LI>
        <br />
        <div className="Image-Container">
          <img src={AVC5} className="Image-Child" height={400} />
        </div>
        <Header
          text="Simptomele AVC"
          alignement="cHeader"
          PaddingTop={3}
          PaddingBottom={3}
        />
        <LE Col2={1}>Slăbiciune sau paralizie bruscă pe o parte a corpului:</LE>
        <ParagraphCenter
          PaddingTextH={9}
          PaddingTextTop={1}
          PaddingTextBottom={2}
        >
          Aceasta este una dintre cele mai frecvente manifestări ale unui AVC.
          Persoanele afectate pot observa că o parte a feței, brațului sau
          piciorului devine brusc slăbită sau paralizată, adesea pe o parte a
          corpului. De exemplu, persoana ar putea să nu își poată ridica brațul
          sau să aibă dificultăți în a merge.
        </ParagraphCenter>
        <div className="Image-Container">
          <img src={AVC6} className="Image-Child" height={500} />
        </div>
        <br />
        <LE Col2={1}>Dificultăți de vorbire sau de înțelegere:</LE>
        <ParagraphCenter
          PaddingTextH={9}
          PaddingTextTop={1}
          PaddingTextBottom={2}
        >
          Se poate manifesta prin imposibilitatea de a vorbi clar sau de a
          înțelege vorbirea altor persoane. Poate apărea dificultatea în a forma
          cuvinte sau în a pronunța propoziții corecte.
        </ParagraphCenter>
        <LE Col2={1}>Amorteală sau furnicături într-o parte a corpului:</LE>
        <ParagraphCenter
          PaddingTextH={9}
          PaddingTextTop={1}
          PaddingTextBottom={2}
        >
          Persoanele care suferă un AVC pot simți o amorțeală bruscă sau
          furnicături pe o parte a corpului, inclusiv pe față, braț sau picior.
        </ParagraphCenter>
        <LE Col2={1}>Probleme de vedere:</LE>
        <ParagraphCenter
          PaddingTextH={9}
          PaddingTextTop={1}
          PaddingTextBottom={2}
        >
          Persoanele pot dezvolta brusc pierderea vederii sau dificultăți în a
          vedea cu unul sau ambele ochi. Aceste probleme pot include vederea
          încețoșată sau vedere dublă.
        </ParagraphCenter>
        <LE Col2={1}>Confuzie sau dificultăți de înțelegere:</LE>
        <ParagraphCenter
          PaddingTextH={9}
          PaddingTextTop={1}
          PaddingTextBottom={2}
        >
          O persoană poate deveni brusc confuză, având dificultăți în a înțelege
          ceea ce se întâmplă sau ceea ce i se spune.
        </ParagraphCenter>
        <LE Col2={1}>Dificultăți de echilibru sau coordonare:</LE>
        <ParagraphCenter
          PaddingTextH={9}
          PaddingTextTop={1}
          PaddingTextBottom={2}
        >
          Persoanele care suferă un AVC pot simți o pierdere bruscă a
          echilibrului sau pot avea dificultăți în a merge. Pot apărea și vertij
          sau senzații de amețeală.
        </ParagraphCenter>
        <LE Col2={1}>Durere de cap severă și bruscă:</LE>
        <ParagraphCenter
          PaddingTextH={9}
          PaddingTextTop={1}
          PaddingTextBottom={2}
        >
          Deși nu toate accidentele vasculare cerebrale sunt însoțite de durere
          de cap, un AVC hemoragic poate provoca o durere de cap severă și
          bruscă, care poate fi însoțită de greață și vărsături.
        </ParagraphCenter>
        <BottomBar />
      </div>
    </>
  );
};

export default Lecture3;
