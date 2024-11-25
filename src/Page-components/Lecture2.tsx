import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import ParagraphCenter from "../components/ParagraphCenter";
import ParagraphStart from "../components/ParagraphStart";
import ParagraphEnd from "../components/ParagraphEnd";
//import ParagraphEnd2 from "../components/ParagraphEnd2";
// ParagraphStart2 from "../components/ParagraphStart2";
import Header from "../components/header";
import TextEmp from "../components/TextEmp";
import LE from "../components/ListElement";
import LI from "../components/ListItem";
import TBC1 from "../photos/2-TBC/TBC-1.jpg";
import TBC2 from "../photos/2-TBC/TBC-2.jpg";
import TBC3 from "../photos/2-TBC/TBC-3.jpg";
//import TBC4 from "../photos/2-TBC/TBC-4.jpg";
import TBC5 from "../photos/2-TBC/TBC-5.jpg";
import TBC6 from "../photos/2-TBC/TBC-6.png";
import TBC7 from "../photos/2-TBC/TBC-7.png";
import TBC8 from "../photos/2-TBC/TBC-8.jpg";
import "../components/css/background.css";
import "../components/css/list.css";
import "../components/css/Image.css";
import BottomBar from "../components/BottomBar";

const Lecture2 = () => {
  return (
    <>
      <div className="page-background">
        <NavBar />
        <Banner
          imgType="banner BannerL2"
          header="TBC"
          title=""
          description="Tuberculoza"
        />
        <Header
          text="Cauze ale TBC"
          alignement="cHeader"
          PaddingTop={2}
          PaddingBottom={2}
        />
        <ParagraphStart imgSrc={TBC1} ColValI={3} PaddingText={7}>
          Tuberculoza este o boală infecțioasă cauzată de bacteria Mycobacterium
          tuberculosis, care afectează în principal plămânii, dar poate să se
          răspândească și în alte părți ale corpului (ganglioni limfatici, oase,
          rinichi, meninge etc.).
        </ParagraphStart>
        <br />
        <LE>Mecanismul de transmitere: </LE>
        <LI Col1={7}>
          Tuberculoza se transmite prin inhalarea picăturilor mici de salivă sau
          secreții nazale, eliberate în aer prin tuse, strănut sau chiar vorbire
          de către o persoană infectată. Așadar, boala are o rată ridicată de
          transmisibilitate în medii aglomerate și slab ventilate.
        </LI>
        <br />
        <div className="Image-Container">
          <img src={TBC2} className="Image-Child" height={400} />
        </div>
        <Header
          text="Factorii de risc"
          alignement="cHeader"
          PaddingTop={3}
          PaddingBottom={3}
        />
        <LE>Condiții socio-economice precare:</LE>
        <LI Col2={1}>
          Agregarea în locuințe mici, supraaglomerate, lipsa accesului la apă
          curată și alimentație deficitară pot favoriza apariția și răspândirea
          tuberculozei.
        </LI>
        <br />
        <LE>Sistemul imunitar slăbit:</LE>
        <LI Col2={1}>
          Persoanele cu sistem imunitar compromis sunt cele mai vulnerabile.
        </LI>
        <br />
        <LI Col2={1}>
          Printre acestea se numără persoanele infectate cu HIV, cele care
          urmează tratamente pentru cancer, pacienții diabetici sau cei care
          utilizează medicamente imunosupresoare.
        </LI>
        <br />
        <LE>Expunerea prelungită:</LE>
        <LI Col2={1}>
          Persoanele care locuiesc cu cineva care are TBC activă sau care
          lucrează în medii precum spitale sau aziluri au un risc crescut de
          infecție.
        </LI>
        <br />
        <br />
        <LE>Tuberculoza latentă:</LE>
        <LI Col2={1}>
          Un aspect important este că bacteria poate rămâne în organism într-o
          stare latentă, fără a provoca simptome.
        </LI>
        <br />
        <LI Col2={1}>
          Aceasta se numește tuberculoză latentă, iar persoanele infectate nu
          sunt contagioase.
        </LI>
        <br />
        <LI Col2={1}>
          Aproximativ un sfert din populația mondială este estimată a fi
          infectată cu forma latentă, care se poate activa în condiții de
          imunitate scăzută.
        </LI>
        <Header
          text="Manifestări ale TBC"
          alignement="cHeader"
          PaddingBottom={3}
          PaddingTop={2}
        />
        <ParagraphEnd imgSrc={TBC3} ColValI={4} ColValS={2} PaddingText={10}>
          Simptomele tuberculozei se pot dezvolta lent și pot varia în funcție
          de organul afectat. Cele mai comune manifestări apar în cazul în care
          sunt afectați plămânii, dar pot exista și alte tipuri de manifestări.
        </ParagraphEnd>
        <br />
        <br />
        <LE>Simptome pulmonare:</LE>
        <br />
        <LI>
          <TextEmp style="textBold">Tuse persistentă:</TextEmp>
        </LI>
        <ParagraphCenter PaddingTextH={14}>
          De obicei, tusea durează mai mult de trei săptămâni și poate fi
          însoțită de flegmă sau chiar sânge (hemoptizie).
        </ParagraphCenter>
        <br />
        <LI>
          <TextEmp style="textBold">Durere în piept:</TextEmp>
        </LI>
        <ParagraphCenter PaddingTextH={14}>
          Aceasta apare în special la respirație profundă sau tuse.
        </ParagraphCenter>
        <br />
        <LI>
          <TextEmp style="textBold">
            Respirație scurtă și respirație îngreunată:
          </TextEmp>
        </LI>
        <ParagraphCenter PaddingTextH={14}>
          Pot apărea în stadii avansate ale bolii, din cauza inflamației și a
          reducerii capacității pulmonare.
        </ParagraphCenter>
        <br />
        <LE>Simptome generale:</LE>
        <br />
        <LI>
          <TextEmp style="textBold">Febră și frisoane:</TextEmp>
        </LI>
        <ParagraphCenter PaddingTextH={16}>
          În special febră nocturnă, însoțită de transpirații.
        </ParagraphCenter>
        <LI>
          <TextEmp style="textBold">
            Scădere în greutate și pierderea apetitului:
          </TextEmp>
        </LI>
        <ParagraphCenter PaddingTextH={16}>
          Una dintre caracteristicile clasice ale tuberculozei, semn al unei
          infecții sistemice severe.
        </ParagraphCenter>
        <LI>
          <TextEmp style="textBold">
            Scădere în greutate și pierderea apetitului:
          </TextEmp>
        </LI>
        <ParagraphCenter PaddingTextH={16}>
          Efectele toxice ale bacteriei și răspunsul imun al organismului duc la
          senzația de oboseală cronică.
        </ParagraphCenter>
        <br />
        <div className="Image-Container">
          <img src={TBC7} className="Image-Child" height={600} />
        </div>
        <br />
        <LE>TBC extrapulmonară:</LE>
        <br />
        <LI>
          <TextEmp style="textBold">Ganglionii limfatici:</TextEmp>
        </LI>
        <ParagraphCenter>
          Tuberculoza ganglionară se manifestă prin inflamarea nodurilor
          limfatice, în special în zona gâtului.
        </ParagraphCenter>
        <LI>
          <TextEmp style="textBold">Oase și articulații:</TextEmp>
        </LI>
        <ParagraphCenter>
          Tuberculoza osoasă, cunoscută și sub numele de maladia Pott, afectează
          cel mai adesea coloana vertebrală, provocând dureri de spate și
          deformări.
        </ParagraphCenter>
        <LI>
          <TextEmp style="textBold">Sistemul nervos central:</TextEmp>
        </LI>
        <ParagraphCenter>
          Meningita tuberculoasă poate provoca simptome severe, precum dureri de
          cap, confuzie și convulsii.
        </ParagraphCenter>
        <br />
        <br />
        <div className="Image-Container">
          <img src={TBC5} className="Image-Child" height={700} />
        </div>
        <Header
          text="Radiografie pulmonară (examen cu Raze X) a unei
persoane bolnave de tuberculoză"
          alignement="cHeader"
        />
        <Header
          text="în stadiu avansat.
Săgețile albe indică infecția în ambii plămâni."
          alignement="cHeader"
        />
        <Header
          text="Săgețile
negre arată cavitatea care s-a format."
          alignement="cHeader"
        />
        <Header
          text="Metode de prevenție"
          alignement="cHeader"
          PaddingTop={3}
          PaddingBottom={3}
        />
        <ParagraphCenter PaddingTextBottom={2}>
          Prevenirea tuberculozei implică o combinație de măsuri la nivel
          personal și comunitar.
        </ParagraphCenter>
        <LE>o Vaccinarea (BCG):</LE>
        <LI Col2={1}>
          • Vaccinul Bacillus Calmette-Guérin (BCG) este administrat pentru a
          proteja împotriva formelor severe de TBC, cum ar fi meningita
          tuberculoasă la copii.
        </LI>
        <br />
        <br />
        <ParagraphStart
          imgSrc={TBC8}
          PaddingText={10}
          description="vaccinul BCG"
        >
          Eficiența vaccinului variază în funcție de regiune și de grupa de
          vârstă,rămâne esențial în prevenirea cazurilor severe
        </ParagraphStart>
        <LE>o Detectarea și tratarea timpurie:</LE>
        <LI Col2={1}>
          • Identificarea precoce a cazurilor active este esențială pentru a
          preveni răspândirea bolii. Testele precum testul cutanat la
          tuberculină (Mantoux) și testele de sânge (IGRA) ajută la depistarea
          infecției.
        </LI>
        <br />
        <LI Col2={1}>
          • În țările dezvoltate, programele de screening sunt utilizate pentru
          grupurile cu risc crescut, precum persoanele care vin din regiuni
          endemice sau care lucrează în medii medicale.
        </LI>
        <br />
        <LE>o Reducerea riscurilor de transmitere:</LE>
        <LI Col2={1}>
          • Ventilația spațiilor interioare reduce concentrația bacteriilor din
          aer.
        </LI>
        <br />
        <LI Col2={1}>
          • Izolarea pacienților contagioși: Persoanele diagnosticate cu TBC
          activă ar trebui să fie izolate în perioada de tratament inițial
          pentru a reduce riscul de contaminare.
        </LI>
        <br />
        <LI Col2={1}>
          • Educație și conștientizare: Este important să se promoveze igiena
          respiratorie, precum acoperirea gurii și nasului la tuse și strănut.
        </LI>
        <Header
          text="Tratament pentru TBC"
          alignement="cHeader"
          PaddingBottom={3}
          PaddingTop={3}
        />
        <ParagraphCenter PaddingTextBottom={2}>
          Tratamentul pentru TBC este complex și necesită administrarea unor
          medicamente timp de mai multe luni pentru a eradica complet bacteria.
        </ParagraphCenter>
        <LE>o Antibiotice standard:</LE>
        <br />
        <LI Col2={1}>
          •Tratamentul de bază pentru TBC activă implică utilizarea unei
          combinații de 4 medicamente: izoniazid, rifampicină, pirazinamidă și
          etambutol.
        </LI>
        <LI Col2={1}>
          Acest regim terapeutic trebuie urmat timp de cel puțin 6 luni, iar în
          unele cazuri poate fi prelungit.
        </LI>
        <br />
        <LI Col2={1}>
          • Scopul tratamentului combinat este prevenirea dezvoltării
          rezistenței la medicamentele antibacteriene.
        </LI>
        <LI Col2={1}>
          Utilizarea incompletă a medicamentelor poate duce la TBC rezistent la
          medicamente (MDR-TB).
        </LI>
        <br />
        <LE Col2={1}>o TBC rezistentă la medicamente (MDR-TB și XDR-TB):</LE>
        <br />
        <LI Col2={1}>
          • MDR-TB (Multi-Drug Resistant Tuberculosis) este rezistentă la cele
          mai eficiente medicamente, izoniazid și rifampicină.
        </LI>
        <LI Col2={1}>
          Tratamentul durează mai mult (până la 2 ani) și include medicamente
          mai toxice.
        </LI>
        <br />
        <LI Col2={1}>
          • XDR-TB (Extensively Drug-Resistant Tuberculosis) este și mai greu de
          tratat, fiind rezistentă la majoritatea antibioticelor folosite în mod
          obișnuit.
        </LI>
        <br />
        <div className="Image-Container">
          <img src={TBC6} className="Image-Child" height={700} />
        </div>
        <br />
        <LE>o Monitorizare și suport:</LE>
        <br />
        <LI Col2={1}>
          • Supravegherea medicală este crucială pentru a asigura aderarea la
          tratament și pentru a evita dezvoltarea rezistenței bacteriene.
        </LI>
        <LI Col2={1}>
          Metode precum DOT (Directly Observed Therapy) implică monitorizarea
          zilnică a pacientului de către personalul medical pentru a se asigura
          că acesta ia medicamentele în mod corespunzător.
        </LI>
        <br />
        <LI Col2={1}>
          • Pacienții sunt încurajați să-și continue tratamentul chiar și atunci
          când simptomele dispar, deoarece întreruperea prematură poate duce la
          recăderi.
        </LI>
        <Header
          text="Curiozități despre TBC"
          alignement="cHeader"
          PaddingBottom={3}
          PaddingTop={3}
        />
        <LE>• TBC în istorie:</LE>
        <ParagraphCenter
          PaddingTextTop={1}
          PaddingTextBottom={1}
          PaddingTextH={10}
        >
          În secolul XIX, tuberculoza era responsabilă pentru moartea a milioane
          de oameni anual. Era denumită „boala romantică”, deoarece numeroși
          artiști și scriitori faimoși au suferit de aceasta. Era considerată
          chiar un simbol al geniului creativ, influențând operele unor
          personalități ca Franz Kafka, John Keats și Emily Brontë.
        </ParagraphCenter>
        <LE>• Impactul asupra artei și literaturii:</LE>
        <ParagraphCenter
          PaddingTextTop={1}
          PaddingTextBottom={1}
          PaddingTextH={10}
        >
          Tuberculoza a inspirat multe lucrări artistice și literare. De
          exemplu, romanul „La Dame aux Camélias” al lui Alexandre Dumas fiul
          descrie povestea tragică a unei femei afectate de TBC, temă preluată
          și în opera „La Traviata” de Giuseppe Verdi.
        </ParagraphCenter>
        <LE>• TBC și epidemiologia modernă:</LE>
        <ParagraphCenter
          PaddingTextTop={1}
          PaddingTextBottom={1}
          PaddingTextH={10}
        >
          Deși este o boală veche, tuberculoza rămâne o amenințare și în zilele
          noastre. Organizația Mondială a Sănătății estimează că, în fiecare an,
          10 milioane de persoane se îmbolnăvesc de TBC, iar aproximativ 1,5
          milioane mor din cauza acestei boli, ceea ce o face una dintre
          principalele cauze de deces infecțios la nivel mondial.
        </ParagraphCenter>
        <LE>• Rolul animalelor în transmiterea bolii:</LE>
        <ParagraphCenter
          PaddingTextTop={1}
          PaddingTextBottom={1}
          PaddingTextH={10}
        >
          Tuberculoza poate afecta și animalele. De exemplu, bovinele pot
          contracta tuberculoza bovină, care poate fi transmisă oamenilor prin
          laptele nepasteurizat. Aceasta este una dintre rațiunile pentru care
          pasteurizarea este atât de importantă în procesarea lactatelor.
        </ParagraphCenter>
        <BottomBar />
      </div>
    </>
  );
};

export default Lecture2;
