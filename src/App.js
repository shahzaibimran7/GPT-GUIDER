import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BrowsingPlugin from "./components/BrowsingPlugin";
import GptProf from "./components/GptProf";
import DocumentOCR from "./components/DocumentOCR";
import ChatPdf from "./components/ChatPdf";
import Transcription from "./components/Transcription";
import DGPlugin from "./components/DGPlugin";
import YTTranscription from "./components/YTTranscription";
import QnA from "./components/QnA";
import Footer from "./components/Footer";
import Feature from "./Pages/Feature";
import Routers from "./routes/Routers";

function App() {
  return (
    <div className="relative bg-[#07091E] min-h-screen min-w-screen pt-6 xl:px-[140px] lg:px-[90px]">
      <Routers />
      <Navbar />
      <Hero />
      <Feature />
      <BrowsingPlugin />
      <GptProf />
      <DocumentOCR />
      <ChatPdf />
      <Transcription />
      <DGPlugin />
      <YTTranscription />
      <QnA />
      <Footer />
    </div>
  );
}

export default App;
