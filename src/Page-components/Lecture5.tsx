import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import ParagraphCenter from "../components/ParagraphCenter";
import ParagraphStart from "../components/ParagraphStart";
import ParagraphEnd from "../components/ParagraphEnd";
import Header from "../components/header";
import BottomBar from "../components/BottomBar";
import TextEmp from "../components/TextEmp";
import LE from "../components/ListElement";
import LI from "../components/ListItem";
import CardF from "../components/Card4";
import SIDA1 from "../photos/5-Sida/S1.png";
import SIDA2 from "../photos/5-Sida/S2.png";
import SIDA3 from "../photos/5-Sida/S3.jpg";
import SIDA4 from "../photos/5-Sida/S4.png";
import SIDA5 from "../photos/5-Sida/S5.png";
import SIDA6 from "../photos/5-Sida/S6.jpg";
import SIDA7 from "../photos/5-Sida/S7.jpg";
import SIDA8 from "../photos/5-Sida/S8.jpg";
import SIDA9 from "../photos/5-Sida/S9.jpg";
import SIDA0 from "../photos/5-Sida/S10.jfif";
import "../components/css/background.css";
import "../components/css/list.css";
import "../components/css/Image.css";

const Lecture5 = () => {
  return (
    <>
      <div className="page-background">
        <NavBar />
        <Banner
          imgType="banner BannerL5"
          title=""
          header="Sida"
          description="Sindromul imunodeficientei umane"
        />
        <Header
          text="SIDA - Virusul HIV"
          alignement="cHeader"
          PaddingTop={2}
          PaddingBottom={2}
        />
        <ParagraphStart
          PaddingText={15}
          ColValI={2}
          imgSrc={SIDA1}
          description="Reprezentare grafică a unei particule infecțioase din virusul HIV"
        >
          <TextEmp style="textBold"> SIDA </TextEmp>(sindromul imunodeficienței
          umane dobândite) este o boală cauzată de virusul HIV, care afectează
          sistemul imunitar. Aceasta duce la infecții severe, pierdere în
          greutate și probleme neurologice. HIV se transmite prin contact
          sexual, sânge infectat sau de la mamă la făt. Chiar dacă o persoană
          este seropozitivă (are anticorpi împotriva HIV), nu prezintă
          întotdeauna simptome, dar poate transmite virusul.
        </ParagraphStart>
        <br />
        <br />
        <div className="Image-Container">
          <img src={SIDA2} className="Image-Child" height={250} />
        </div>
        <ParagraphCenter PaddingTextTop={4}>
          Mecanismul de interacțiune dintre virusul{" "}
          <TextEmp style="textItalic">HIV</TextEmp> și limfocitul CD4 se
          desfășoară în următorii pași:
        </ParagraphCenter>
        <br />
        <ParagraphCenter>
          <TextEmp style="textBold">1. Interacțiunea inițială:</TextEmp>{" "}
          Proteina gp120 de pe HIV se leagă de receptorul CD4 de pe limfocit.
        </ParagraphCenter>
        <ParagraphCenter>
          <TextEmp style="textBold">2. Modificare conformațională:</TextEmp>{" "}
          Această legătură provoacă o schimbare în structura gp120, permițând o
          interacțiune secundară cu CCR5.
        </ParagraphCenter>
        <ParagraphCenter>
          <TextEmp style="textBold">3. Introducerea gp41:</TextEmp> Capetele
          distale ale proteinei gp41 sunt introduse în membrana celulară.
        </ParagraphCenter>
        <ParagraphCenter>
          <TextEmp style="textBold">4. Fuzionarea membranelor:</TextEmp> gp41
          suferă modificări care formează bucle spiralate, facilitând fuziunea
          membranelor virale și celulare.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextH={2} PaddingTextTop={3}>
          Virusul <TextEmp style="textItalic">HIV</TextEmp> este un retrovirus
          cu <TextEmp style="textBold">ARN</TextEmp> care se transformă în{" "}
          <TextEmp style="textBold">ADN</TextEmp> printr-o enzimă numită
          reverstranscriptaza. Primul tip de HIV, HIV-1, a fost izolat la
          Institutul Pasteur din Paris și se găsește în întreaga lume. Un al
          doilea tip, HIV-2, a fost descoperit mai târziu și este predominant în
          Africa de Vest, având o structură similară cu HIV-1.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextH={4} PaddingTextTop={3}>
          HIV-1 și HIV-2 se împart în mai multe subgrupe, având o diferență de
          50% în materialul genetic. Virusurile din aceeași grupă au o diferență
          de 5–10%. Reverstranscriptaza cauzează mutații prin erori de copiere,
          ceea ce reduce eficacitatea tratamentului. Recontaminarea cu alte
          virusuri crește activitatea celulelor infectate și multiplicarea
          virusului.
        </ParagraphCenter>
        <ParagraphCenter
          PaddingTextH={3}
          PaddingTextTop={3}
          PaddingTextBottom={3}
        >
          HIV-1 și HIV-2 se împart în mai multe subgrupe, având o diferență de
          50% în materialul genetic. Virusurile din aceeași grupă au o diferență
          de 5–10%. Reverstranscriptaza cauzează mutații prin erori de copiere,
          ceea ce reduce eficacitatea tratamentului. Recontaminarea cu alte
          virusuri crește activitatea celulelor infectate și multiplicarea
          virusului.
        </ParagraphCenter>
        <Header
          text="Căi de transmitere"
          alignement="cHeader"
          PaddingBottom={4}
        />
        <ParagraphEnd
          ColValI={3}
          ColValS={2}
          imgSrc={SIDA3}
          PaddingText={9}
          description="Hematie HIV negativă (stânga) și hematie HIV pozitivă (dreapta). Aglutinarea indică prezența virusului."
        >
          Virusul HIV se transmite în patru moduri principale: prin contact
          sexual (prin mucoasele genitale), prin sânge (transfuzie sau seringi
          infectate), de la mamă la copil în timpul sarcinii și prin alăptare.
          Deși virusul poate fi găsit în lacrimi și salivă, nu s-au raportat
          cazuri de transmitere prin mușcături sau săruturi profunde.
        </ParagraphEnd>
        <Header
          text="Semne și simptome"
          alignement="cHeader"
          PaddingTop={3}
          PaddingBottom={4}
        />
        <ParagraphStart
          imgSrc={SIDA4}
          description="Principalele simptome ale SIDA"
          PaddingText={16}
          ColValI={3}
          ColValS={2}
        >
          După infectarea cu HIV, organismul începe să producă anticorpi
          specifici, un proces numit seroconversie. Aceasta durează între 4 și
          12 săptămâni pentru un sistem imunitar sănătos, dar poate dura 3–6
          luni dacă sistemul este slăbit de alte boli. Perioada de așteptare
          până la apariția anticorpilor se numește fereastra imunologică. Deși
          anticorpii indică infecția, ei nu pot distruge virusul, deoarece HIV
          se modifică pentru a-i evita.
        </ParagraphStart>
        <ParagraphCenter PaddingTextBottom={4} />
        <div>
          <LE>Simptome ale sistemului nervos central:</LE>
          <LI Col2={1}>
            <TextEmp style="textBold">• Encefalită:</TextEmp> Inflamația
            creierului, cauzând confuzie, pierderi de memorie și convulsii.
          </LI>
          <LI Col2={1}>
            <TextEmp style="textBold">• Meningită:</TextEmp> Inflamația
            membranelor din jurul creierului și măduvei spinării, provocând
            dureri de cap și febră.
          </LI>
          <LE>Ochii:</LE>
          <LI Col2={1}>
            <TextEmp style="textBold">• Retinită:</TextEmp> Inflamația retinei,
            ce poate duce la pierderea vederii.
          </LI>
          <LE>Plămâni:</LE>
          <LI Col2={1}>
            <TextEmp style="textBold">• Pneumonie pneumocystis:</TextEmp>{" "}
            Pneumonie severă frecventă la pacienții cu SIDA.
          </LI>
          <LI Col2={1}>
            <TextEmp style="textBold">• Tuberculoză:</TextEmp> Infecție care
            afectează, de obicei, plămânii, dar poate implica și alte organe.
          </LI>
          <LI Col2={1}>
            <TextEmp style="textBold">• Tumori pulmonare:</TextEmp> Apărute din
            cauza imunității slăbite.
          </LI>
          <LE>Piele:</LE>
          <LI Col2={1}>
            <TextEmp style="textBold">• Tumori:</TextEmp> Leziuni precum
            sarcomul Kaposi, frecvente în SIDA.
          </LI>
          <LE>Gastrointestinal:</LE>
          <LI Col2={1}>
            <TextEmp style="textBold">• Esofagită:</TextEmp> Inflamația
            esofagului, provocând dureri la înghițire.
          </LI>
          <LI Col2={1}>
            <TextEmp style="textBold">• Diaree cronică:</TextEmp> Persistența
            diareei din infecții oportuniste.
          </LI>
          <LI Col2={1}>
            <TextEmp style="textBold">• Tumori:</TextEmp> Tumori în tractul
            digestiv.
          </LI>
        </div>
        <Header
          text="Faza acută a primo-infecției"
          alignement="cHeader"
          PaddingTop={4}
          PaddingBottom={2}
        />
        <ParagraphCenter PaddingTextH={7}>
          Primo-infecția HIV afectează 20-50% dintre persoanele infectate, în 15
          zile până la 3 luni după contaminare. Simptomele sunt asemănătoare
          mononucleozei: febră (până la o lună), ganglioni umflati, dureri
          articulare, erupții cutanate și dificultăți la înghițit. Pot apărea și
          infecții fungice sau, rar, simptome neurologice. Această fază dispare
          de obicei în aproximativ o lună.
        </ParagraphCenter>
        <Header
          text="Faza de infecție cronică asimptomatică"
          alignement="cHeader"
          PaddingTop={3}
          PaddingBottom={2}
        />
        <ParagraphCenter PaddingTextBottom={2} PaddingTextH={5}>
          Această fază durează între 1 și 7 ani (sau mai mult) și este când
          virusul se multiplică. Poate să nu apasră simptome, dar în 20-50%
          dintre cazuri, ganglionii limfatici se umflă, în special în zonele
          gâtului și maxilarului.
        </ParagraphCenter>
        <Header text="SIDA declarată" alignement="cHeader" />
        <ParagraphCenter
          PaddingTextH={4}
          PaddingTextTop={2}
          PaddingTextBottom={3}
        >
          Când imunitatea este foarte slăbită, riscul de infecții oportuniste
          crește. Aceste infecții apar atunci când microorganismele, precum
          bacilul tuberculozei, profită de sistemul imunitar compromis. Ele sunt
          adesea legate între ele, ceea ce îngreunează diagnosticarea și
          tratamentul. Infecțiile pot recidiva din cauza persistentei lor și a
          deteriorării continue a imunității pacientului.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextBottom={3}>
          Infecțiile bacteriene sunt frecvente în infecția cu HIV, iar
          tuberculoza afectează în special persoanele din condiții defavorizate.
          Infecțiile fungice sunt printre cele mai comune în SIDA.
        </ParagraphCenter>
        <div>
          <LE Col2={2}>
            Există patru tipuri principale de infecții parazitare în SIDA:
          </LE>
          <LI Col2={1}>
            <TextEmp style="textBold">1. Criptosporidioza –</TextEmp> cauzează
            diaree severă, deshidratare, febră și dureri abdominale.
          </LI>
          <LI Col2={1}>
            <TextEmp style="textBold">2. Microsporidioza –</TextEmp> poate cauza
            20-30% din diareea inexplicabilă.
          </LI>
          <LI Col2={1}>
            <TextEmp style="textBold">3. Pneumocistoza –</TextEmp> poate apărea
            în 15-50% din cazuri fără tratament preventiv, cu simptome de tuse
            uscată și insuficiență respiratorie.
          </LI>
          <LI Col2={1}>
            <TextEmp style="textBold">4. Toxoplasmoza –</TextEmp> reactivarea
            unei infecții vechi poate provoca probleme neurologice severe.
          </LI>
        </div>
        <ParagraphCenter PaddingTextTop={3} PaddingTextBottom={3}>
          Infecțiile virale, cum ar fi cele cauzate de virusuri latente,
          afectează 20-50% dintre pacienți.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextH={3} PaddingTextBottom={3}>
          În plus față de infecții, SIDA poate duce la tumori canceroase, cum ar
          fi sarcomul lui Kaposi și limfoamele maligne. Sarcomul lui Kaposi
          apare mai frecvent la bărbați homosexuali și se manifestă prin leziuni
          cutanate violacee. Limfoamele maligne sunt cauzate de proliferarea
          celulelor imunitare.
        </ParagraphCenter>
        <CardF
          src1={SIDA5}
          src2={SIDA6}
          src3={SIDA7}
          src4={SIDA8}
          description1="Candidoză bucală pseudomembranoasă la un pacient infectat"
          description2="Leziuni cutanate asociate sarcomului Kaposi"
          description3="Noduli în mucoasa duodenală a unui pacient seropozitiv"
          description4="Spațiu alveolar ocupat de exsudat la un plămân"
        />
        <Header
          text="Sistemul de stadializare al OMS pentru infecția HIV"
          alignement="cHeader"
          PaddingTop={3}
          PaddingBottom={3}
        />
        <div>
          <LE Col2={1}>
            În 1990, OMS a introdus un sistem de stadializare pentru pacienții
            infectați cu HIV-1:
          </LE>
          <br />
          <LI Col2={1}>
            <TextEmp style="textBold">• Stadiul I:</TextEmp> Infecția HIV este
            asimptomatică și nu este considerată SIDA.
          </LI>
          <br />
          <LI Col2={1}>
            <TextEmp style="textBold">• Stadiul II:</TextEmp> Manifestări minore
            pe piele și mucoase, precum și infecții respiratorii recurente.
          </LI>
          <br />
          <LI Col2={1}>
            <TextEmp style="textBold">• Stadiul III:</TextEmp> Diaree cronică
            inexplicabilă (peste o lună), infecții bacteriene severe și
            tuberculoză pulmonară.
          </LI>
          <br />
          <LI Col2={1}>
            <TextEmp style="textBold">• Stadiul IV:</TextEmp> Include
            toxoplasmoza cerebrală, candidoza esofagiană și sarcomul lui Kaposi.
          </LI>
        </div>
        <Header
          text="Diagnostic"
          alignement="cHeader"
          PaddingBottom={2}
          PaddingTop={3}
        />
        <ParagraphCenter PaddingTextBottom={3}>
          Diagnosticarea infecției cu HIV se face prin detectarea anticorpilor
          specifici în sânge.
        </ParagraphCenter>
        <ParagraphEnd
          imgSrc={SIDA9}
          ColValS={2}
          ColValI={4}
          PaddingText={2}
          description="Componentele unui test ELISA"
        >
          Diagnosticul poate fi stabilit cu certitudine abia după trei luni de
          la infectare, când anticorpii sunt suficient de mulți pentru a fi
          detectați. Se folosesc două teste: testul ELISA, care poate da
          rezultate fals pozitive, și testul Western-Blot, care confirmă
          rezultatul. Testarea este obligatorie pentru donatorii de sânge și
          organe, și este recomandată femeilor gravide și persoanelor expuse
          riscurilor. În majoritatea țărilor, medicii trebuie să declare orice
          caz de SIDA autorităților sanitare, asigurându-se că identitatea
          pacientului rămâne anonimă.
        </ParagraphEnd>
        <Header
          text="Tratament"
          alignement="cHeader"
          PaddingBottom={3}
          PaddingTop={3}
        />
        <ParagraphCenter PaddingTextH={6} PaddingTextBottom={3}>
          Tratamentul HIV include inhibarea virusului și tratarea bolilor
          asociate, cu reguli de viață pentru a încetini evoluția către SIDA și
          a preveni transmiterea.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextH={5} PaddingTextBottom={3}>
          <TextEmp style="textBold">Tratamentul antiviral</TextEmp> folosește
          medicamente precum zidovudina (AZT) și didanozina, uneori în
          combinații (triterapie). Deși pot îmbunătăți starea pacientului, nu
          pot eradica virusul. AZT poate reduce riscul de transmitere de la mamă
          la făt.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextH={3} PaddingTextBottom={3}>
          <TextEmp style="textBold">Tratamentele preventive</TextEmp> pentru
          infecțiile oportuniste includ antibiotice, antifungice, și intervenții
          chirurgicale.
        </ParagraphCenter>
        <ParagraphStart
          imgSrc={SIDA0}
          PaddingText={12}
          ColValS={3}
          ColValI={3}
          description="AZT (zidovudină), primul medicament dovedit a fi eficient împotriva HIV"
        >
          <TextEmp style="textBold">Reguli de igienă</TextEmp> pentru persoanele
          seropozitive includ evitarea recontaminării, urmărirea medicală
          regulată, o dietă sănătoasă, igiena personală și evitarea substanțelor
          care afectează imunitatea. Aceste măsuri pot întârzia evoluția bolii.
        </ParagraphStart>
        <Header
          text="Curiozitati"
          alignement="cHeader"
          PaddingTop={3}
          PaddingBottom={3}
        />
        <ParagraphCenter PaddingTextBottom={2}>
          <TextEmp style="textBold">• HIV vs. SIDA:</TextEmp> HIV este virusul
          care cauzează SIDA, dar nu toți cei infectați cu HIV dezvoltă SIDA.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextBottom={2}>
          <TextEmp style="textBold">• Tratament:</TextEmp> Tratamentul
          antiretroviral permite persoanelor cu HIV să trăiască o viață
          sănătoasă și lungă.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextBottom={2}>
          <TextEmp style="textBold">• Originea virusului:</TextEmp> HIV provine
          dintr-un virus similar la cimpanzei și gorile, transmis oamenilor prin
          contactul cu sângele.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextBottom={2}>
          <TextEmp style="textBold">• Răspândire globală:</TextEmp> Aproape 38
          de milioane de oameni trăiesc cu HIV la nivel mondial.
        </ParagraphCenter>
        <ParagraphCenter PaddingTextBottom={3}>
          <TextEmp style="textBold">• Stigmatul social:</TextEmp> Stigma legată
          de HIV/SIDA afectează persoanele infectate, contribuind la
          discriminare.
        </ParagraphCenter>
        <BottomBar />
      </div>
    </>
  );
};

export default Lecture5;
