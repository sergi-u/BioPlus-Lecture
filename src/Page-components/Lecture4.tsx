import "../components/css/background.css";
import "../components/css/Image.css";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import BottomBar from "../components/BottomBar";
import Header from "../components/header";
import ParagraphCenter from "../components/ParagraphCenter";
//import ParagraphStart2 from "../components/ParagraphStart2";
//import ParagraphEnd2 from "../components/ParagraphEnd2";
//import LI from "../components/ListItem";
//import LE from "../components/ListElement";
//import EP1 from "../photos/4-Epilepsie/EP-1.jfif";
import EP2 from "../photos/4-Epilepsie/EP-2.jpg";
//import EP3 from "../photos/4-Epilepsie/EP-3.jpg";
import ParagraphStart from "../components/ParagraphStart";

const Lecture4 = () => {
  return (
    <div className="page-background">
      <NavBar />
      <Banner imgType="banner BannerL4" title="Epilepsie" />
      <Header text="Cauze" alignement="cHeader" PaddingTop={2} />
      <ParagraphCenter PaddingTextBottom={3} PaddingTextTop={3}>
        Epilepsia este o tulburare neurologică cauzată de descărcări electrice
        anormale la nivelul creierului.
      </ParagraphCenter>
      <ParagraphStart imgSrc={EP2} ColValI={3} PaddingText={10}>
        Principalele cauze includ leziuni cerebrale, infecții ale sistemului
        nervos central, accidente vasculare cerebrale, tumori cerebrale sau
        malformații congenitale.
      </ParagraphStart>
      <ParagraphCenter
        PaddingTextTop={3}
        PaddingTextBottom={1}
        PaddingTextH={10}
      >
        Moștenirea genetică joacă, de asemenea, un rol important, unii oameni
        fiind predispuși la crize epileptice din cauza mutațiilor genetice.
      </ParagraphCenter>
      <ParagraphCenter PaddingTextH={7}>
        În unele cazuri, cauza poate rămâne necunoscută. Factorii declanșatori
        precum lipsa somnului, stresul sau alcoolul pot agrava epilepsia la cei
        deja diagnosticați.
      </ParagraphCenter>
      <Header
        text="Manifestări"
        alignement="cHeader"
        PaddingTop={3}
        PaddingBottom={2}
      />
      <BottomBar />
    </div>
  );
};

export default Lecture4;
